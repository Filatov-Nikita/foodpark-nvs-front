<template>
  <section id="about">
    <div class="wrapper">
      <h2 class="h2 h2--green tw-text-center">{{ title }}</h2>
      <AboutActions class="actions" :items="items" />
    </div>
  </section>
</template>

<script setup>
  import AboutActions from './AboutActions/index.vue';

  defineProps({
    title: {
      required: true,
      type: String,
    },
    items: {
      required: true,
      type: Array,
    },
  });
</script>

<style scoped lang="scss">
  .actions {
    margin-top: 40px;
  }
</style>
