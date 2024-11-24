<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="wrap">
        <div class="col1">
          <a class="logo-wrap"href="/">
            <img class="logo" width="119" height="39" src="@/assets/images/logo-trc.svg" alt="лого ТРЦ «Аура»" loading="lazy">
          </a>
          <div class="text name">ТРЦ «Аура»</div>
          <div class="text">{{ address }}</div>
        </div>
        <div class="col2">
          <nav class="nav">
            <div>
              <a class="link" href="#">О нас</a>
            </div>
            <div>
              <a class="link" href="#">Кафе и рестораны</a>
            </div>
            <div>
              <a class="link" href="#">Мероприятия</a>
            </div>
            <div>
              <a class="link" href="#">Контакты</a>
            </div>
          </nav>
        </div>
        <div class="col3">
          <a class="link phone" href="#">{{ phone }}</a>
          <div class="text">{{ workTime }}</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  defineProps({
    address: {
      required: true,
      type: String,
    },
    tgHref: {
      required: true,
      type: String,
    },
    workTime: {
      required: true,
      type: String,
    },
    phone: {
      required: true,
      type: String,
    }
  });
</script>

<style scoped lang="scss">
  .footer {
    padding-top: 40px;
    padding-bottom: 80px;
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
  }

  .col1 {
    padding: 0 10px;
    width: 32%;
  }

  .col2 {
    padding: 0 10px;
    width: 21%;
  }

  .col3 {
    padding: 0 10px;
    width: 47%;
  }

  .nav {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .text, .link {
    font-size: 16px;
    line-height: 1.25;
    @apply tw-tracking-1;
  }

  .link {
    &:hover {
      opacity: 0.7;
    }
  }

  .logo-wrap {
    display: inline-block;
    margin-bottom: 35px;
  }

  .name, .phone {
    margin-bottom: 16px;
  }

  .phone {
    display: inline-block;
  }
</style>
