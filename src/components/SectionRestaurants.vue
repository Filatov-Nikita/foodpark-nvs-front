<template>
  <section id="food">
    <div class="wrapper">
      <h2 class="h2 h2--red tw-text-center title">Кафе и рестораны</h2>
      <RestaurantsList v-if="restaurants" :items="restaurants" />
      <div class="actions">
        <BaseButton nativeLink :href="foodparkMapHref" target="_blank">Карта фуд-парка</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
  import RestaurantsList from './Restaurants/List/index.vue';
  import api from '@/repositories';

  defineProps({
    foodparkMapHref: {
      required: true,
      type: String,
    }
  });

  const restaurants = await api.restaurants.all();
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 50px;
  }

  .actions {
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
