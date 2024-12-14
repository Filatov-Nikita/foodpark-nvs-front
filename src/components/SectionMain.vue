<template>
  <div class="main">
    <Header :tgHref="tgHref" />
    <div class="wrapper">
      <div class="body">
        <h1 class="h1 h1--red" v-html="titleHtml"></h1>
        <p class="subtitle">{{ subtitle }}</p>
        <BaseButton class="btn" nativeLink href="#food">{{ btnTitle }}</BaseButton>
      </div>
    </div>
    <video class="video" :src="video.url" autoplay muted loop></video>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import Header from './Header.vue';

  const props = defineProps({
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
    },
    tgHref: {
      required: true,
      type: String,
    },
  });

  const titleHtml = computed(() => {
    return props.title.replace('-', '&#8209;');
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

    @include sm {
      min-height: 530px;
      padding-bottom: 30px;
    }

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

    @include sm {
      font-size: 16px;
      margin-top: 12px;
    }
  }

  .body {
    text-align: center;
  }

  .btn {
    margin-top: 40px;
    width: 100%;
    max-width: 269px;

    @include sm {
      margin-top: 18px;
    }
  }
</style>
