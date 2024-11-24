<template>
  <section id="food">
    <div class="wrapper">
      <h2 class="h2 h2--red tw-text-center title">Кафе и рестораны</h2>
      <RestaurantsList v-if="restaurants" :items="restaurants" />
    </div>
  </section>
</template>

<script setup>
  import RestaurantsList from './Restaurants/List/index.vue';
  import api from '@/repositories';

  const restaurants = await api.restaurants.all();
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 50px;
  }
</style>
