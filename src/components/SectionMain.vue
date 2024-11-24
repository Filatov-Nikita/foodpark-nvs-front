<template>
  <div class="main">
    <Header />
    <div class="wrapper">
      <div class="body">
        <h1 class="h1 h1--red">{{ title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>
        <BaseButton class="btn" nativeLink href="#food">За вкусной едой</BaseButton>
      </div>
    </div>
    <video class="video" :src="video.url" autoplay muted loop></video>
  </div>
</template>

<script setup lang="ts">
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
  }

  .video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
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
