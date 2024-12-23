<template>
  <a class="item" :href="item.href">
    <div class="img-wrap">
      <img class="photo" :width="item.preview.width" :height="item.preview.height" :src="item.preview.url" loading="lazy" />
      <div class="name">{{ item.title }}</div>
    </div>
  </a>
</template>

<script setup>
  defineProps({
    item: {
      required: true,
      type: Object,
    },
  });
</script>

<style scoped lang="scss">
  .img-wrap {
    position: relative;
    border-radius: 20px;
    overflow: hidden;

    &::after {
      content: '';
      display: block;
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
    }

    &:hover {
      .photo {
        transform: scale(1.1);
      }
    }
  }

  .photo {
    transition: transform 150ms;
  }

  .name {
    position: absolute;
    z-index: 2;
    width: 100%;
    bottom: 0;
    left: 0;
    text-align: center;
    padding: 30px 16px;
    font-size: 34px;
    line-height: 1.3;
    @apply tw-font-if-kica tw-font-semibold tw-text-white tw-uppercase;

    @include sm {
      font-size: 24px;
      padding: 15px;
    }
  }
</style>
