<template>
  <section id="subscribe">
    <div class="wrapper">
      <div class="wrap">
        <div class="round-wrap">
          <img class="round" width="311" height="310" src="@/assets/images/tg-round.svg" loading="lazy" />
        </div>
        <div class="body-wrap">
          <h2 class="h2 h2--red title">Подписывайтесь на нас!</h2>
          <p class="text">Не упустите ни одного события! Подписывайтесь на нас в соцсетях, чтобы быть в курсе всех новостей, акций и мероприятий Фуд-парка. Будем на одной волне!</p>
          <BaseButton class="action" nativeLink :href="tgHref" target="_blank">
            Подписаться
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  defineProps({
    tgHref: {
      required: true,
      type: String,
    },
  });
</script>

<style scoped lang="scss">
  .title {
    font-size: 42px;
    line-height: 1.1;
    margin-bottom: 30px;
  }


  .text {
    margin-bottom: 40px;
    max-width: 600px;
    @apply tw-tracking-1;
  }

  .action {
    width: 100%;
    max-width: 254px;
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 60px;
  }

  .round-wrap {
    min-width: 310px;
    animation-name: roundFrames;
    animation-duration: 35s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .body-wrap {
    flex-grow: 1;
  }

  @keyframes roundFrames {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
