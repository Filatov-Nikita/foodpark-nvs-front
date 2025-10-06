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
        <div v-if="data.image" class="img-wrap">
          <img class="tw-w-full" :width="data.image.width" :height="data.image.height" :src="data.image.url" />
        </div>
        <p class="period">{{ data.period }}</p>
        <p class="title">{{ data.title }}</p>
        <div class="body" v-html="data.body"></div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup>
  import api from '@/repositories';
  import { watch } from 'vue';
  import useRequest from '@/composables/useRequest';
  import ButtonClose from '@/components/Base/ButtonClose.vue';

  const props = defineProps({
    activityId: {
      required: true,
      type: [ Number, String ],
    }
  });

  const value = defineModel({
    default: false,
  });

  const { data, loading, send } = await useRequest(
    () => api.activities.show(props.activityId),
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
    max-width: 1240px;
    padding: 80px;
    padding-top: 40px;
    padding-right: 50px;
    @apply tw-bg-base tw-w-full;
  }

  .img-wrap {
    max-width: 790px;
    margin-bottom: 30px;
    border-radius: 30px;
    overflow: hidden;
  }

  .period {
    font-size: 16px;
    line-height: 1.25;
    margin-bottom: 8px;
    @apply tw-tracking-1 tw-text-gray;
  }

  .title {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 25px;
  }

  .toolbar {
    text-align: right;
    margin-bottom: 32px;
  }

  .content {
    padding-right: 50px;
  }

  .body {
    white-space: pre-wrap;
    @apply tw-tracking-1;
  }

  .loader {
    text-align: center;
    padding: 50px;
  }
</style>
