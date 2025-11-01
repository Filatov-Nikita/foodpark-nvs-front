<template>
  <footer id="contacts" class="footer">
    <div class="wrapper">
      <div class="wrap">
        <div class="col1">
          <a class="logo-wrap"href="/">
            <img class="logo" width="137" height="42" src="@/assets/images/logo-trc.svg" alt="лого ТРЦ «Аура»" loading="lazy">
          </a>
          <div class="text name">ТРЦ «Аура»</div>
          <div class="text">{{ address }}</div>
        </div>
        <div class="col2">
          <nav class="nav">
            <div>
              <a class="link" href="#about">О нас</a>
            </div>
            <div>
              <a class="link" href="#food">Кафе и рестораны</a>
            </div>
            <div>
              <a class="link" href="#activities">Мероприятия</a>
            </div>
            <div>
              <a class="link" href="#promotions">Акции</a>
            </div>
            <div>
              <a class="link" href="#contacts">Контакты</a>
            </div>
          </nav>
        </div>
        <div class="col3">
          <a class="link phone" :href="`tel:${phone}`">{{ phone }}</a>
          <div class="text">{{ workTime }}</div>
          <div class="soc-items">
            <a class="soc-item" :href="tgHref" target="_blank">
              <BaseIcon name="social-tg" fit />
              <TelegramRound />
            </a>
          </div>
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

    @include sm {
      padding-bottom: 35px;
    }
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    margin: -15px -10px;
  }

  .col1 {
    padding: 15px 10px;
    width: 32%;

    @include lg {
      width: 40%;
    }

    @include sm {
      width: 100%;
    }
  }

  .col2 {
    padding: 15px 10px;
    width: 21%;

    @include lg {
      width: 30%;
    }

    @include sm {
      width: 100%;
    }
  }

  .col3 {
    padding: 15px 10px;
    width: 47%;

    @include lg {
      width: 30%;
    }

    @include sm {
      width: 100%;
    }
  }

  .nav {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @include sm {
      gap: 12px;
    }
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
    width: 137px;
    display: inline-block;
    margin-bottom: 35px;

    @include md {
      width: 120px;
    }

    @include sm {
      width: 110px;
      margin-bottom: 20px;
    }
  }

  .name, .phone {
    margin-bottom: 16px;

    @include sm {
      margin-bottom: 12px;
    }
  }

  .phone {
    display: inline-block;
  }

  .soc-items {
    margin-top: 16px;

    @include sm {
      margin-top: 12px;
    }
  }

  .soc-item {
    display: block;
    width: 32px;
    height: 32px;
  }
</style>
