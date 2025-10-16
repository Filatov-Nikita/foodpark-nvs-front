<template>
  <article class="item">
    <div class="photo-wrap">
      <img class="photo" :width="item.image.width" :height="item.image.height" :src="imageUrl" loading="lazy" />
    </div>
    <div class="body">
      <h3 class="title">{{ item.title }}</h3>
      <p class="text">{{ item.text }}</p>
      <p class="time">{{ createdAt }}</p>
    </div>
    <div class="btn-wrap">
      <BaseButton class="btn-link" design="black" nativeLink :href="item.link" target="_blank">
        Читать на дзене
      </BaseButton>
    </div>
  </article>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    item: {
      required: true,
      type: Object,
    }
  });

  const imageUrl = computed(() => {
    return props.item.image.urlTemplate
      .replace('{namespace}', props.item.image.namespace)
      .replace('{size}', 'lazy_smart_crop_1280x720');
  });

  const createdAt = computed(() => {
    const now = Date.now();
    const time = parseInt(props.item.created_at) * 1000;
    const diff = now - time;
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if(hours <= 0) return 'только что';
    if(hours < 24) return `${hours} ${plural(hours, ['час', 'часа', 'часов'])} назад`;
    if(days < 30) return `${days} ${plural(days, ['день', 'дня', 'дней'])} назад`;
    if(months < 12) return `${months} ${plural(months, ['месяц', 'месяца', 'месяцев'])} назад`;
    return `${years} ${plural(years, ['год', 'года', 'лет'])} назад`;
  });

  function plural(count, words) {
    count = Math.abs(count);
    if(count % 10 === 0) return words[2];
    if(count % 100 > 10 && count % 100 < 20) return words[2];
    if(count % 10 === 1) return words[0];
    if(count % 10 > 1 && count % 10 < 5) return words[1];
    return words[2];
  }
</script>

<style scoped lang="scss">
  .item {
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    @apply tw-bg-white;
  }

  .photo {
    width: 100%;
    border-radius: 30px 30px 0 0;
  }

  .body {
    padding: 20px 16px 0px;

    @include sm {
      padding-top: 12px;
    }
  }

  .title, .text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  .title {
    font-size: 20px;
    line-height: 1.3;
    font-weight: 500;
    margin-bottom: 12px;

    @include sm {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }

  .text {
    margin-bottom: 20px;

    @include sm {
      font-size: 14px;
      margin-bottom: 12px;
    }
  }

  .btn-link {
    width: 100%;
    max-width: 280px;

    @include sm {
      max-width: 100%;
    }
  }

  .btn-wrap {
    margin-top: auto;
    padding: 0 16px 30px;
    text-align: center;

    @include sm {
      padding-bottom: 16px;
    }
  }

  .time {
    margin-bottom: 30px;
    font-size: 14px;
    @apply tw-tracking-1 tw-text-gray;;

    @include sm {
      margin-bottom: 16px;
      font-size: 12px;
    }
  }
</style>
