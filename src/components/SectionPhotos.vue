<template>
  <section id="photos" class="photos">
    <div class="wrapper">
      <picture>
        <source media="(max-width: 720.9px)" :width="photoSm.width" :height="photoSm.height" :srcset="photoSm.url">
        <img class="tw-w-full" :width="photoXl.width" :height="photoXl.height" :src="photoXl.url" alt="Фото ресторанов" loading="lazy">
      </picture>
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

<style scoped lang="scss"></style>
