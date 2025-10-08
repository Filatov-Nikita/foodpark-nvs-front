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
          <div class="body" v-html="data.body"></div>
          <div class="menu-wrap" v-if="data.menu">
            <BaseButton class="menu-btn" nativeLink :href="data.menu" target="_blank">
              Меню
            </BaseButton>
          </div>
        </div>
        <div class="right" v-if="data.gallery.length > 0">
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

  const props = defineProps({
    restaurantId: {
      required: true,
      type: [ Number, String ],
    }
  });

  const value = defineModel({
    default: false,
  });

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
  }

  .title {
    font-weight: 700;
    font-size: 52px;
    line-height: 1.3;
    margin-bottom: 10px;
    @apply tw-tracking-1;
  }

  .category-name {
    font-size: 16px;
    line-height: 1.3;
    @apply tw-tracking-1 tw-text-gray;
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
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    --gap-x: 70px;
    --left-w: 40%;
    --right-w: 60%;
    margin-left: calc(var(--gap-x) * -1);
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
  }

  .menu-btn {
    width: 100%;
    max-width: 220px;
  }

  .loader {
    text-align: center;
    padding: 50px;
  }
</style>
