<template>
  <section id="activities" class="activities">
    <div class="wrapper">
      <h2 class="h2 h2--secondary tw-text-center">Мероприятия</h2>
      <TypesList v-if="types" class="types-list" :items="types" :activeType="activeType" @change:type="activeType = $event" />
      <div class="loader" v-if="loading">
        <BaseSpinner size="100px" />
      </div>
      <ActivitiesList v-else-if="elements" class="event-list" :items="elements" @changed:item="onChangeItem" />
      <DetailedModal v-if="activeActivity" v-model="showedActivity" :activityId="activeActivity" />
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import TypesList from './Activities/TypesList.vue';
  import ActivitiesList from './Activities/List/index.vue';
  import DetailedModal from './Activities/DetailedModal.vue';
  import api from '@/repositories';
  import useRequest from '@/composables/useRequest';

  const { data: types } = await useRequest(api.activities.types, {
    errorMessage: 'Не удалось загрузить типы мероприятий!',
  });

  const activeType = ref(types.value[0]?.term_id ?? null);

  const { data: elements, loading } = await useRequest(() => api.activities.elements(activeType.value), {
    errorMessage: 'Не удалось загрузить мероприятия!',
    watch: [ activeType ],
  });

  const activeActivity = ref(null);
  const showedActivity = ref(false);

  function onChangeItem(activityId) {
    activeActivity.value = activityId;
    showedActivity.value = true;
  }
</script>

<style scoped lang="scss">
  .activities {
    position: relative;
  }

  .types-list {
    margin-top: 30px;
  }

  .event-list {
    margin-top: 18px;
  }

  .loader {
    padding: 30px 0;
    text-align: center;
  }
</style>
