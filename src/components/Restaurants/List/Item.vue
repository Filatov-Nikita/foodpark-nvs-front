<template>
  <article class="item">
    <div class="img-wrap">
      <img width="890" height="712" class="photo" src="@/assets/images/rest.jpg" loading="lazy" />
      <div class="logo-wrap">
        <img width="75" height="75" class="logo" src="@/assets/images/rest-logo.svg" loading="lazy">
      </div>
    </div>
    <div class="body">
      <h3 class="name">{{ item.title }}</h3>
      <p v-if="item.kitchen" class="kitchen-name">
        {{ item.kitchen.name }}
      </p>
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
  .item {

  }

  .img-wrap {
    position: relative;
    border-radius: 30px;
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
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .photo {
    width: 100%;
  }

  .logo-wrap {
    position: absolute;
    z-index: 2;
    top: 15px;
    left: 15px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.9);
    width: 90px;
    height: 90px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 100%;
  }

  .body {
    margin-top: 15px;
  }

  .name {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.3;
    @apply tw-tracking-1;
  }

  .kitchen-name {
    margin-top: 2px;
    @apply tw-text-gray;
  }
</style>
