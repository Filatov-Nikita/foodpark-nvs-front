<template>
  <article>
    <div class="img-wrap">
      <img class="photo" width="890" height="718" src="@/assets/images/event.jpg" />
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
</script>

<style scoped lang="scss">
  .img-wrap {
    border-radius: 30px;
    overflow: hidden;
  }

  .photo {
    width: 100%;
  }

  .body-wrap {
    margin-top: 20px;
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
  }
</style>
