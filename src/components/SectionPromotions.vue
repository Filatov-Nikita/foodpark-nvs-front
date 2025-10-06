<template>
  <section id="promotions" class="promotions">
    <div class="wrapper">
      <h2 class="h2 h2--secondary tw-text-center">Акции</h2>
      <PromotionsList class="prom-list" :items="promotions" />
    </div>
  </section>
</template>

<script setup>
  import useRequest from '@/composables/useRequest';
  import PromotionsList from './Promotions/List/index.vue';
  import api from '@/repositories';

  const { data: promotions } = await useRequest(api.promotions.all, {
    errorMessage: 'Не удалось загрузить акции!',
  });
</script>

<style scoped lang="scss">
  .prom-list {
    margin-top: 60px;

    @include sm {
      margin-top: 30px;
    }
  }
</style>
