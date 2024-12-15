<template>
  <article class="item">
    <div class="img-wrap">
      <img class="photo" :width="item.preview.width" :height="item.preview.height" :src="item.preview.url" />
    </div>
    <div class="body-wrap">
      <h3 class="title">{{ item.title }}</h3>
      <p class="text">{{ item.body }}</p>
    </div>
  </article>
</template>

<script setup>
  defineProps({
    item: {
      required: true,
      type: Object,
    }
  });
</script>

<style scoped lang="scss">
  .img-wrap {
    border-radius: 30px;
    overflow: hidden;
    margin-bottom: 20px;

    @include xs {
      margin-bottom: 12px;
    }
  }

  .photo {
    width: 100%;
  }

  .body-wrap {
    text-align: center;
  }

  .title {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 8px;

    @include xs {
      font-size: 16px;
    }
  }

  .text {
    font-size: 18px;
    line-height: 1.3;
    @apply tw-text-gray;

    @include xs {
      font-size: 14px;
    }
  }
</style>
