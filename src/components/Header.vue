<template>
  <header class="header">
    <div class="wrapper">
      <div v-if="grid.lg" class="wrap">
        <div class="nav">
          <a class="link" href="#about">О нас</a>
          <a class="link" href="#food">Кафе и рестораны</a>
        </div>
        <a class="logo-wrap" href="/">
          <img class="logo" width="250" height="64" src="@/assets/images/logo.svg" alt="лого фудпарка">
        </a>
        <div class="nav">
          <a class="link" href="#activities">Мероприятия</a>
          <a class="link" href="#promotions">Акции</a>
          <a class="link" href="#contacts">Контакты</a>
        </div>
      </div>
      <div class="wrap" v-else>
        <a class="logo-wrap" href="/">
          <img class="logo" width="250" height="64" src="@/assets/images/logo.svg" alt="лого фудпарка">
        </a>
        <button class="btn-burger" @click="showed = !showed">
          <IconBurger />
        </button>
      </div>
    </div>
    <NavMobile v-if="!grid.lg" :tgHref="tgHref" :showed="showed" @close="showed = false" />
  </header>
</template>

<script setup>
  import NavMobile from './NavMobile.vue';
  import useAppGrid from '@/composables/useAppGrid';
  import IconBurger from '@/components/Icons/Burger.vue';
  import { ref } from 'vue';

  defineProps({
    tgHref: {
      required: true,
      type: String,
    },
  })

  const grid = useAppGrid();

  const showed = ref(false);
</script>

<style scoped lang="scss">
  .header {
    padding: 16px 0;
    background-color: rgba(0, 0, 0, 0.4);

    @include sm {
      padding: 12px 0;
    }
  }

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .link {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    @apply tw-text-white tw-uppercase;

    &:hover {
      opacity: 0.8;
    }
  }

  .logo-wrap {
    width: 250px;

    @include md {
      width: 200px;
    }

    @include sm {
      width: 144px;
    }
  }

  .btn-burger {
    width: 32px;
    height: 32px;
  }
</style>
