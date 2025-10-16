<template>
  <section id="food" v-if="items && items.length > 0">
    <div class="wrapper">
      <h2 class="h2 h2--secondary tw-text-center title">Больше о Фуд-Парке</h2>
      <BlogList v-if="items" :items="items" />
      <div class="link-wrap">
        <a class="list-link" href="https://dzen.ru/foodparkaura?tab=articles" target="_blank">
          Смотреть все статьи
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
  import BlogList from '@/components/Blog/List/index.vue';
  import api from '@/repositories';
  import useRequest from '@/composables/useRequest';
  import { computed } from 'vue';

  const { data } = await useRequest(api.blog.all, {
    errorMessage: 'Не удалось загрузить блог!'
  });

  const items = computed(() => {
    if(!data.value) return [];
    return data.value.slice(0, 3);
  });
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 50px;
  }

  .link-wrap {
    margin-top: 40px;
    text-align: center;
  }

  .list-link {
    font-size: 20px;
    @apply tw-tracking-1 tw-uppercase tw-underline;

    @include sm {
      font-size: 18px;
    }

    &:hover {
      @apply tw-text-gray;
    }
  }
</style>
