<template>
  <BaseModal v-model="value">
    <div class="card">
      <div class="toolbar">
        <ButtonClose @click="value = false" />
      </div>
      <div class="loader" v-if="loading">
        <BaseSpinner size="100px"/>
      </div>
      <div v-else-if="data" class="content">
        <div class="left">
          <p class="title">{{ data.title }}</p>
          <p v-if="data.kitchen" class="category-name">
            {{ data.kitchen.name }}
          </p>
          <GallerySlider v-if="!grid.lg && data.gallery.length > 0" :images="data.gallery" />
          <div class="body" v-html="data.body"></div>
          <div class="menu-wrap" v-if="data.menu">
            <BaseButton class="menu-btn" nativeLink :href="data.menu" target="_blank">
              Меню
            </BaseButton>
          </div>
        </div>
        <div class="right" v-if="grid.lg && data.gallery.length > 0">
          <GallerySlider :images="data.gallery" />
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup>
  import api from '@/repositories';
  import { watch } from 'vue';
  import useRequest from '@/composables/useRequest';
  import ButtonClose from '@/components/Base/ButtonClose.vue';
  import GallerySlider from './GallerySlider.vue';
  import useAppGrid from '@/composables/useAppGrid';

  const props = defineProps({
    restaurantId: {
      required: true,
      type: [ Number, String ],
    }
  });

  const value = defineModel({
    default: false,
  });

  const grid = useAppGrid();

  const { data, loading, send } = await useRequest(
    () => api.restaurants.show(props.restaurantId),
    { immediate: false },
  );

  watch(value, async (val) => {
    if(val) {
      send();
    }
  }, { immediate: true });
</script>


<style scoped lang="scss">
  .card {
    max-width: 100%;
    padding: 40px 30px 80px;
    @apply tw-bg-base tw-w-full;

    @include md {
      padding: 30px;
    }

    @include sm {
      padding: 20px 16px 30px;
    }
  }

  .title {
    font-weight: 700;
    font-size: 52px;
    line-height: 1.3;
    margin-bottom: 10px;
    @apply tw-tracking-1;

    @include md {
      font-size: 36px;
    }

    @include sm {
      font-size: 28px;
      margin-bottom: 6px;
    }
  }

  .category-name {
    font-size: 16px;
    line-height: 1.3;
    @apply tw-tracking-1 tw-text-gray;

    @include md {
      margin-bottom: 32px;
    }

    @include sm {
      margin-bottom: 24px;
    }
  }

  .toolbar {
    text-align: right;
    margin-bottom: 20px;
  }

  .body {
    margin-top: 40px;
    font-size: 16px;
    line-height: 1.3;
    white-space: pre-wrap;
    @apply tw-tracking-1;

    @include md {
      margin-top: 30px;
    }

    @include sm {
      margin-top: 20px;
    }
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    --gap-x: 70px;
    --left-w: 40%;
    --right-w: 60%;
    margin-left: calc(var(--gap-x) * -1);

    @include md {
      --left-w: 100%;
      --gap-x: 0px;
    }
  }

  .left {
    width: calc(var(--left-w) - var(--gap-x));
    margin-left: var(--gap-x);
  }

  .right {
    padding-top: 68px;
    width: calc(var(--right-w) - var(--gap-x));
    margin-left: var(--gap-x);
  }

  .menu-wrap {
    margin-top: 60px;

    @include md {
      margin-top: 40px;
    }

    @include sm {
      margin-top: 32px;
    }
  }

  .menu-btn {
    width: 100%;
    max-width: 220px;

    @include sm {
      max-width: 100%;
    }
  }

  .loader {
    text-align: center;
    padding: 50px;
  }
</style>
