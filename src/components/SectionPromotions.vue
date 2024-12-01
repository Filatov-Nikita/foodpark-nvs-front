<template>
  <section id="promotions" class="promotions">
    <div class="wrapper">
      <h2 class="h2 h2--red tw-text-center">Акции</h2>
      <PromotionsList class="prom-list" :items="promotions" />
    </div>
  </section>
</template>

<script setup>
  import PromotionsList from './Promotions/List/index.vue';
  import api from '@/repositories';

  const promotions = await api.promotions.all();
</script>

<style scoped lang="scss">
  .prom-list {
    margin-top: 60px;
  }
</style>
