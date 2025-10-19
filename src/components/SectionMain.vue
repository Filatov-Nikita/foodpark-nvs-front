<template>
  <div class="main">
    <Header :tgHref="tgHref" />
    <div class="wrapper">
      <div class="body">
        <h1 class="h1 h1--yellow" v-html="titleHtml"></h1>
        <p class="subtitle">{{ subtitle }}</p>
        <div class="actions">
          <BaseButton class="btn" nativeLink href="#food" @click.prevent="$scroll.onShowView">
            {{ btnTitle }}
          </BaseButton>
          <BaseButton class="btn" design="white" @click="showedModal = true">
            О сладком рекорде
          </BaseButton>
        </div>
        <BaseModal v-model="showedModal">
          <div class="modal-video">
            <div class="modal-head">
              <button class="modal-close" @click="showedModal = false">
                <IconClose class="tw-w-full tw-h-full" />
              </button>
            </div>
            <video class="tw-w-full tw-h-auto" width="1920" height="1080" src="/videos/sweet-fest.mp4" controls></video>
          </div>
        </BaseModal>
      </div>
    </div>
    <video class="video" :poster="video.poster_url" muted loop autoplay playsinline>
      <source
        v-if="video.webm_url"
        :src="video.webm_url"
        type="video/webm"
      />
      <source
        :src="video.url"
        type="video/mp4"
      />
    </video>

  </div>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import Header from './Header.vue';
  import IconClose from './Icons/Close.vue';

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

  const showedModal = ref(false);
</script>

<style scoped lang="scss">
  .main {
    position: relative;
    min-height: 100vh;
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
    margin-top: 30px;
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
    width: 100%;
    max-width: 269px;
  }

  .actions {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    row-gap: 12px;

    @include sm {
      margin-top: 18px;
    }
  }

  .modal-video {
    padding: 32px;
    border-radius: 16px;
    max-width: 70%;
    width: 100%;
    @apply tw-bg-white;

    @include lg {
      max-width: 800px;
    }

    @include md {
      padding: 24px;
    }

    @include sm {
      padding: 12px;
    }
  }

  .modal-close {
    display: inline-block;
    width: 32px;
    height: 32px;
    padding: 8px;
    @apply tw-text-dark;

    &:hover {
      opacity: 0.7;
    }
  }

  .modal-head {
    text-align: right;
    margin-bottom: 16px;
  }
</style>
