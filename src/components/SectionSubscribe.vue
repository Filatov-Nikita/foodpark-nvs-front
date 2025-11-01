<template>
  <section id="subscribe">
    <div class="wrapper">
      <h2 v-if="!grid.lg" class="h2 h2--primary title">Подписывайтесь на&nbsp;нас!</h2>
      <div class="wrap">
        <div class="round-wrap">
          <img class="round" width="620" height="620" src="@/assets/images/tg-round.svg" loading="lazy" />
          <div class="anim-wrap">
            <img class="anim-img" width="340" height="340" src="@/assets/images/foodpark.gif" loading="lazy" />
          </div>
        </div>
        <div class="body-wrap">
          <h2 v-if="grid.lg" class="h2 h2--primary title">Подписывайтесь на&nbsp;нас!</h2>
          <p class="text">Не упустите ни одного события! Подписывайтесь на нас в соцсетях, чтобы быть в курсе всех новостей, акций и мероприятий Фуд-парка. Будем на одной волне!</p>
          <BaseButton v-if="grid.md" class="action" nativeLink :href="tgHref" target="_blank">
            Подписаться
          </BaseButton>
        </div>
      </div>
      <BaseButton v-if="!grid.md" class="action" nativeLink :href="tgHref" target="_blank">
        Подписаться
      </BaseButton>
    </div>
  </section>
</template>

<script setup>
  import useAppGrid from '@/composables/useAppGrid';

  defineProps({
    tgHref: {
      required: true,
      type: String,
    },
  });

  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .title {
    font-size: 42px;
    line-height: 1.1;
    margin-bottom: 30px;

    @include md {
      margin-bottom: 50px;
    }

    @include sm {
      font-size: 28px;
      margin-bottom: 30px;
      word-wrap: break-word;
    }

    @include xs {
      max-width: 300px;
    }
  }

  .text {
    margin-bottom: 40px;
    max-width: 600px;
    @apply tw-tracking-1;

    @include sm {
      margin-bottom: 0px;
    }
  }

  .action {
    width: 100%;
    max-width: 254px;

    @include sm {
      margin-top: 30px;
      max-width: 100%;
    }
  }

  .wrap {
    display: flex;
    align-items: center;
    column-gap: 60px;
    row-gap: 30px;

    @include sm {
      column-gap: 20px;
    }

    @include xs {
      flex-wrap: wrap;
    }
  }

  .round-wrap {
    position: relative;
    flex-basis: 310px;

    @include xs {
      flex-grow: 1;
      flex-basis: 128px;
    }
  }

  .round {
    width: 100%;
    animation-name: roundFrames;
    animation-duration: 35s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .anim-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .anim-img {
    width: 54%;
  }

  .body-wrap {
    flex-grow: 1;

    @include xs {
      flex-basis: 180px;
    }
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
