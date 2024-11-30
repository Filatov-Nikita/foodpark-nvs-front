<template>
  <div class="main">
    <Header />
    <div class="wrapper">
      <div class="body">
        <h1 class="h1 h1--red">{{ title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>
        <BaseButton class="btn" nativeLink href="#food">{{ btnTitle }}</BaseButton>
      </div>
    </div>
    <video class="video" :src="video.url" autoplay muted loop></video>
  </div>
</template>

<script setup>
  import Header from './Header.vue';

  defineProps({
    title: {
      required: true,
      type: String,
    },
    subtitle: {
      required: true,
      type: String,
    },
    video: {
      required: true,
      type: Object,
    },
    btnTitle: {
      required: true,
      type: String,
    }
  });
</script>

<style scoped lang="scss">
  .main {
    position: relative;
    min-height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 60px;

    &::after {
      content: '';
      display: block;
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.35);
      z-index: -1;
    }
  }

  .video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }

  .subtitle {
    margin-top: 24px;
    font-size: 20px;
    line-height: 1.3;
    @apply tw-text-white;
  }

  .body {
    text-align: center;
  }

  .btn {
    margin-top: 40px;
    width: 100%;
    max-width: 269px;
  }
</style>
