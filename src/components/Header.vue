<template>
  <header class="header">
    <div class="wrapper">
      <div class="wrap">
        <div class="nav">
          <a class="link" href="#">О нас</a>
          <a class="link" href="#">Кафе и рестораны</a>
        </div>
        <a class="logo-wrap" href="/">
          <img class="logo" width="250" height="64" src="@/assets/images/logo.svg" alt="лого фудпарка">
        </a>
        <div class="nav">
          <a class="link" href="#">Мероприятия</a>
          <a class="link" href="#">Акции</a>
          <a class="link" href="#">Контакты</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .header {
    padding: 16px 0;
    background-color: rgba(0, 0, 0, 0.4);
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
</style>
