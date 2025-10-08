<template>
  <section id="food">
    <div class="wrapper">
      <h2 class="h2 h2--secondary tw-text-center title">Кафе и рестораны</h2>
      <CategoriesList
        v-if="categories"
        class="categories"
        :items="categories"
        :activeCategory="activeCategory"
        @change:item="activeCategory = $event"
      />
      <div class="loader" v-if="loading">
        <BaseSpinner size="100px" />
      </div>
      <RestaurantsList v-else-if="restaurants" :items="items" @change:item="onChangeItem" />
      <div class="actions">
        <BaseButton class="action" nativeLink :href="foodparkMapHref" target="_blank">Карта фуд-парка</BaseButton>
        <BaseButton class="action" v-if="!isEnd" design="bordered" @click="showMore">
          Показать еще
        </BaseButton>
      </div>
    </div>
    <ModalShowed v-if="activeRest" v-model="showedRest" :restaurantId="activeRest" />
  </section>
</template>

<script setup>
  import RestaurantsList from './Restaurants/List/index.vue';
  import ModalShowed from './Restaurants/ModalShowed.vue';
  import CategoriesList from './Restaurants/Categories/List.vue';
  import api from '@/repositories';
  import useRequest from '@/composables/useRequest';
  import { computed, ref, watch } from 'vue';

  defineProps({
    foodparkMapHref: {
      required: true,
      type: String,
    }
  });

  const activeRest = ref(null);
  const showedRest = ref(false);

  function onChangeItem(restId) {
    activeRest.value = restId;
    showedRest.value = true;
  }

  const { data: categories } = await useRequest(api.restaurants.categories);

  const activeCategory = ref(null);

  const { data: restaurants, loading } = await useRequest(() =>
    api.restaurants.all.apply(null, activeCategory.value ? [ activeCategory.value ]: []),
    {
      errorMessage: 'Не удалось загрузить рестораны!',
      watch: [ activeCategory ],
    }
  );

  const params = ref(initParams());

  watch(activeCategory, () => {
    params.value = initParams();
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

  function initParams() {
    return {
      step: 6,
      from: 0,
      to: 6,
    }
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

  .categories {
    margin-bottom: 40px;
  }

  .loader {
    padding: 90px 0;
    text-align: center;
  }
</style>
