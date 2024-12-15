<template>
  <article class="item">
    <div class="img-wrap" @click="$emit('changed:item')">
      <img class="photo" :width="item.preview.width" :height="item.preview.height" :src="item.preview.url" />
    </div>
    <div class="body-wrap">
      <p class="date">{{ item.post_date }}</p>
      <h3 class="title">{{ item.post_title }}</h3>
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

  defineEmits([ 'changed:item' ]);
</script>

<style scoped lang="scss">
  .item {
    &:hover .title {
      opacity: 0.7;
    }

    &:hover .photo {
      transform: scale(1.1);
    }
  }

  .img-wrap {
    cursor: pointer;
    border-radius: 30px;
    overflow: hidden;
  }

  .photo {
    transition: transform 150ms;
    width: 100%;
  }

  .body-wrap {
    margin-top: 20px;

    @include sm {
      margin-top: 12px;
    }
  }

  .date {
    font-size: 14px;
    line-height: 1.3;
    @apply tw-tracking-1 tw-text-gray;
  }

  .title {
    margin-top: 10px;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;

    @include sm {
      font-size: 16px;
    }
  }
</style>
