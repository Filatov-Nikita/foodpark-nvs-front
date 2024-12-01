<template>
  <section id="activities" class="activities">
    <div class="wrapper">
      <h2 class="h2 h2--green tw-text-center">Мероприятия</h2>
      <TypesList class="types-list" :items="types" :activeType="activeType" @change:type="activeType = $event" />
      <ActivitiesList class="event-list" :items="elements" />
    </div>
  </section>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import TypesList from './Activities/TypesList.vue';
  import ActivitiesList from './Activities/List/index.vue';
  import api from '@/repositories';

  const typesRes = await api.activities.types();
  const types = ref(typesRes);

  const activeType = ref(types.value[0]?.term_id ?? null);

  const elementsRes = await api.activities.elements(activeType.value);
  const elements = ref(elementsRes);

  watch(activeType, async () => {
    const res = await api.activities.elements(activeType.value);
    elements.value = res;
  });
</script>

<style scoped lang="scss">
  .types-list {
    margin-top: 30px;
  }

  .event-list {
    margin-top: 18px;
  }
</style>
