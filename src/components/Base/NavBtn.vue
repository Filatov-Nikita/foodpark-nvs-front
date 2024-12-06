<template>
  <button
    class="nav-btn"
    :class="[ `nav-btn--${dir}`, { 'nav-btn--disabled': disabled } ]"
    :disabled="disabled"
  >
    <svg class="tw-w-full tw-h-full" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="round" d="M30 2.5C14.8364 2.5 2.5 14.8364 2.5 30C2.5 45.1636 14.8364 57.5 30 57.5C45.1636 57.5 57.5 45.1636 57.5 30C57.5 14.8364 45.1636 2.5 30 2.5Z"/>
      <path class="arrow" d="M44.3982 31.6272L36.8982 40.3772C36.4038 40.9534 35.7031 41.25 34.9988 41.25C34.4232 41.25 33.8446 41.0523 33.3728 40.6482C32.3248 39.7498 32.2034 38.1714 33.1018 37.1228L37.0643 32.5H17.5C16.1194 32.5 15 31.3807 15 30C15 28.6194 16.1194 27.5 17.5 27.5H37.0643L33.1018 22.8772C32.2034 21.8287 32.3248 20.2503 33.3728 19.3519C34.4214 18.4534 35.9998 18.5755 36.8982 19.6228L44.3982 28.3728C45.2008 29.3091 45.2008 30.691 44.3982 31.6272Z" />
    </svg>
  </button>
</template>

<script setup>
  defineProps({
    size: {
      default: '60px',
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    dir: {
      default: 'left',
      type: String,
    }
  });
</script>

<style scoped lang="scss">
  .nav-btn {
    width: v-bind(size);
    height: v-bind(size);

    &:hover {
      opacity: 0.7;
    }

    &--left {
      transform: rotate(-180deg);
    }

    &--disabled {
      &:hover {
        opacity: 1;
      }

      .arrow {
        fill: #FFFAEF;
      }

      .round {
        fill: #CBCBCB;
      }
    }
  }

  .arrow {
    fill: #FFFFFF;
  }

  .round {
    fill: #515151;
  }
</style>
