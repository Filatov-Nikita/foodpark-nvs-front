<template>
  <section id="photos" class="photos">
    <div class="wrapper tw-relative">
      <picture>
        <source media="(max-width: 720.9px)" :width="photoSm.width" :height="photoSm.height" :srcset="photoSm.url">
        <img class="tw-w-full" :width="photoXl.width" :height="photoXl.height" :src="photoXl.url" alt="Фото ресторанов" loading="lazy">
      </picture>
      <div class="block1"></div>
      <div class="block2"></div>
      <div class="block3"></div>
    </div>
  </section>
</template>

<script setup>
  defineProps({
    photoXl: {
      required: true,
      type: Object,
    },
    photoSm: {
      required: true,
      type: Object,
    }
  });
</script>

<style scoped lang="scss">
  .block1 {
    position: absolute;
    top: -30px;
    left: 0px;
    width: 250px;
    height: 50%;
    z-index: -1;
    @apply tw-bg-yellow;

    @include sm {
      top: -15px;
      width: 120px;
    }
  }

  .block2 {
    position: absolute;
    bottom: -30px;
    left: 100px;
    width: 70%;
    height: 175px;
    z-index: -1;
    @apply tw-bg-yellow;

    @include sm {
      bottom: -15px;
      left: 40px;
    }
  }

  .block3 {
    position: absolute;
    top: 100px;
    right: 0px;
    width: 175px;
    height: 60%;
    z-index: -1;
    @apply tw-bg-yellow;

    @include sm {
      top: 50px;
    }
  }
</style>
