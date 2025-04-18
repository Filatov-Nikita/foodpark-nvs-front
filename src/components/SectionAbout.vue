<template>
  <section id="about">
    <div class="wrapper">
      <h2 class="h2 h2--red title tw-text-center">{{ title }}</h2>
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

  .title {
    @include md {
      font-size: 40px;
    }

    @include sm {
      font-size: 32px;
    }

    @include xs {
      font-size: 20px;
    }
  }
</style>
