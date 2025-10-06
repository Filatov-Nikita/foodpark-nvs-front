<template>
  <Teleport to="body">
    <Transition name="nav-anim">
      <div class="nav-mobile" v-if="showed">
        <div class="wrapper">
          <div class="body">
            <div class="head">
              <ButtonClose @click="$emit('close')" />
            </div>
            <div class="nav">
              <div class="nav-wrap" @click="$emit('close')">
                <a class="nav-link" href="#about" @click.prevent="$scroll.onShowView">
                  О нас
                </a>
              </div>
              <div class="nav-wrap" @click="$emit('close')">
                <a class="nav-link" href="#food" @click.prevent="$scroll.onShowView">
                  Кафе и рестораны
                </a>
              </div>
              <div class="nav-wrap" @click="$emit('close')">
                <a class="nav-link" href="#activities" @click.prevent="$scroll.onShowView">
                  Мероприятия
                </a>
              </div>
              <div class="nav-wrap" @click="$emit('close')">
                <a class="nav-link" href="#promotions" @click.prevent="$scroll.onShowView">
                  Акции
                </a>
              </div>
              <div class="nav-wrap" @click="$emit('close')">
                <a class="nav-link" href="#contacts" @click.prevent="$scroll.onShowView">
                  Контакты
                </a>
              </div>
            </div>
            <a class="btn" :href="tgHref" target="_blank">
              <span>Мы в Telegram</span>
              <IconTelegram class="btn__icon" />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
  import ButtonClose from './Base/ButtonClose.vue';
  import IconTelegram from './Icons/Telegram.vue';

  defineProps({
    showed: {
      required: true,
      type: Boolean,
    },
    tgHref: {
      required: true,
      type: String,
    },
  });

  defineEmits([ 'close' ]);
</script>

<style scoped lang="scss">
  .nav-mobile {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9000;
    background-color: #FFFAEF;
    overflow-x: hidden;
    padding-bottom: 32px;
  }

  .body {
    padding-top: 24px;
  }

  .head {
    text-align: right;
    margin-bottom: 30px;
  }

  .nav-anim {
    &-enter-active {
      animation: fadeIn;
      animation-duration: 250ms;
    }

    &-leave-active {
      animation: fadeOut;
      animation-duration: 250ms;
    }
  }

  .nav {
    margin-bottom: 50px;
  }

  .nav-wrap {
    padding: 7px 0;
  }

  .nav-link {
    font-size: 16px;
    line-height: 1.25;
    @apply tw-text-gray tw-uppercase tw-tracking-1;
  }

  .btn {
    padding: 11px 16px;
    border: 1px solid #E8D8B5;
    border-radius: 30px;
    color: #121212;
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    text-transform: uppercase;

    &__icon {
      width: 20px;
      height: 20px;
    }
  }
</style>
