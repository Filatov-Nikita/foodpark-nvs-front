<template>
  <section id="food">
    <div class="wrapper">
      <h2 class="h2 h2--red tw-text-center title">Кафе и рестораны</h2>
      <RestaurantsList v-if="restaurants" :items="items" />
      <div class="actions">
        <BaseButton class="action" nativeLink :href="foodparkMapHref" target="_blank">Карта фуд-парка</BaseButton>
        <BaseButton class="action" v-if="!isEnd" design="bordered" @click="showMore">
          Показать еще
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
  import RestaurantsList from './Restaurants/List/index.vue';
  import api from '@/repositories';
  import useRequest from '@/composables/useRequest';
  import { computed, ref } from 'vue';

  defineProps({
    foodparkMapHref: {
      required: true,
      type: String,
    }
  });

  const { data: restaurants } = await useRequest(api.restaurants.all);

  const params = ref({
    step: 6,
    from: 0,
    to: 6,
  });

  const items = computed(() => {
    if(!restaurants.value) return [];
    return restaurants.value.slice(params.value.from, params.value.to);
  });

  const isEnd = computed(() => {
    return params.value.to >= restaurants.value.length;
  });

  function showMore() {
    if(!restaurants.value) return;
    params.value.to = Math.min(params.value.to + params.value.step, restaurants.value.length);
  }
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 50px;
  }

  .actions {
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    column-gap: 25px;
    row-gap: 10px;
  }

  .actions .action {
    padding-left: 60px;
    padding-right: 60px;

    @include sm {
      width: 100%;
    }
  }
</style>
