<template>
  <component
    class="button"
    :class="`button--${design}`"
    :is="nativeLink ? 'a' : 'button'"
    :href="href"
    :disabled="disabled"
  >
    <slot></slot>
  </component>
</template>

<script setup>
  const props = defineProps({
    nativeLink: {
      default: false,
      type: Boolean,
    },
    href: {
      default: undefined,
      type: String,
    },
    disabled: {
      default: undefined,
      type: Boolean,
    },
    design: {
      default: 'filled',
      type: String,
    },
  });
</script>

<style scoped lang="scss">
  .button {
    display: inline-block;
    font-size: 16px;
    line-height: 1.25;
    border-radius: 30px;
    text-align: center;
    @apply tw-tracking-1 tw-uppercase;

    &--filled {
      padding: 16px 30px;
      font-weight: 500;
      @apply tw-bg-primary tw-text-white;

      &:hover {
        background-color: #de1e54;
      }
    }

    &--bordered {
      padding: 15px 30px;
      font-weight: 400;
      border: 1px solid #E8D8B5;
      @apply tw-text-gray;

      &:hover {
        border-color: #b9ac91;
      }
    }

    @include sm {
      padding: 12px 30px;
      font-size: 14px;
    }
  }
</style>
