<template>
  <section id="about">
    <div class="wrapper">
      <h2 class="h2 h2--green tw-text-center">Главный гастрономический центр</h2>
      <AboutActions class="actions" />
    </div>
  </section>
</template>

<script setup>
  import AboutActions from './AboutActions/index.vue';
</script>

<style scoped lang="scss">
  .actions {
    margin-top: 40px;
  }
</style>
