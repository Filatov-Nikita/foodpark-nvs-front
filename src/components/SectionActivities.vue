<template>
  <section ref="activitiesRef" id="activities" class="activities">
    <div class="wrapper">
      <h2 class="h2 h2--red tw-text-center">Мероприятия</h2>
      <TypesList class="types-list" :items="types" :activeType="activeType" @change:type="activeType = $event" />
      <ActivitiesList class="event-list" :items="elements" @changed:item="onChangeItem" />
      <DetailedModal v-if="activeActivity" v-model="showedActivity" :activityId="activeActivity" />
    </div>
    <div class="activities-decor" ref="decorEl" :style="decorStyles"></div>
  </section>
</template>

<script setup>
  import { computed, nextTick, ref, watch } from 'vue';
  import TypesList from './Activities/TypesList.vue';
  import ActivitiesList from './Activities/List/index.vue';
  import DetailedModal from './Activities/DetailedModal.vue';
  import api from '@/repositories';
  import useIntersect from '@/composables/useIntersect';

  const typesRes = await api.activities.types();
  const types = ref(typesRes);

  const activeType = ref(types.value[0]?.term_id ?? null);

  const elementsRes = await api.activities.elements(activeType.value);
  const elements = ref(elementsRes);

  const activeActivity = ref(null);
  const showedActivity = ref(false);

  function onChangeItem(activityId) {
    activeActivity.value = activityId;
    showedActivity.value = true;
  }

  watch(activeType, async () => {
    const res = await api.activities.elements(activeType.value);
    elements.value = res;
  });

  const decorEl = ref(null);
  const activitiesRef = ref(null);
  const decorPos = ref({
    top: 0,
  });

  watch(elements, () => {
    if(elements.value.length === 0) {
      decorPos.value.top = 0;
    } else {
      nextTick(() => calcDecorOffset());
    }
  });

  const decorStyles = computed(() => {
    return {
      'transform': `translateY(${decorPos.value.top}px)`,
    }
  });

  function calcDecorOffset() {
    const swiper = document.querySelector('#activities .swiper');
    if(!swiper) return;
    const swiperWrap = swiper.querySelector('.swiper-wrapper');
    const img = swiper.querySelector('.img-wrap');
    const top = parseInt(getComputedStyle(decorEl.value).getPropertyValue('top'));
    decorPos.value.top = swiperWrap.offsetTop + swiper.offsetTop + ((img.offsetHeight - decorEl.value.offsetHeight) / 2) - top;
  }

  useIntersect(
    activitiesRef,
    () => {
      calcDecorOffset();
    },
    () => {
      decorPos.value.top = 0;
    },
    { threshold: 0.7, once: false },
  );
</script>

<style scoped lang="scss">
  .activities {
    position: relative;
  }

  .activities-decor {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    height: 210px;
    z-index: -1;
    transition: transform 800ms;
    @apply tw-bg-yellow;

    @include sm {
      top: 15px;
    }
  }

  .types-list {
    margin-top: 30px;
  }

  .event-list {
    margin-top: 18px;
  }
</style>
