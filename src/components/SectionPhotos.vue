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
    animation: move-block1 10s ease-in-out infinite;
    @apply tw-bg-yellow;

    @include sm {
      top: -15px;
      width: 120px;
    }
  }

  @keyframes move-block1 {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(30%);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .block2 {
    position: absolute;
    bottom: -30px;
    left: 100px;
    width: 70%;
    height: 175px;
    z-index: -1;
    animation: move-block2 10s ease-in-out infinite;
    @apply tw-bg-yellow;

    @include sm {
      bottom: -15px;
      left: 40px;
    }
  }

  @keyframes move-block2 {
    0% {
      transform: translateX(0px) translateY(0px);
    }
    50% {
      transform: translateX(15%) translateY(10px);
    }
    100% {
      transform: translateX(0px)  translateY(0px);
    }
  }

  .block3 {
    --start-offset: 100px;
    --top-gap: 20px;
    position: absolute;
    top: var(--start-offset);
    right: 0px;
    width: 175px;
    height: 60%;
    z-index: -1;
    animation: move-block3 10s ease-in-out infinite;
    @apply tw-bg-yellow;

    @include sm {
      --start-offset: 50px;
      --top-gap: 10px;
    }
  }

  @keyframes move-block3 {
    0% {
      transform: translateY(10%);
    }
    50% {
      transform: translateY(calc(var(--start-offset) * -1 - var(--top-gap)));
    }
    100% {
      transform: translateY(10%);
    }
  }
</style>
