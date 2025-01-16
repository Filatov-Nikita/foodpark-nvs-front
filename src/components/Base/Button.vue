<template>
  <component
    class="button"
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
    }
  });
</script>

<style scoped lang="scss">
  .button {
    display: inline-block;
    padding: 16px 30px;
    font-size: 16px;
    line-height: 1.25;
    font-weight: 500;
    border-radius: 30px;
    text-align: center;
    @apply tw-bg-primary tw-text-white tw-tracking-1 tw-uppercase;

    @include sm {
      padding: 12px 30px;
      font-size: 14px;
    }

    &:hover {
      background-color: #de1e54;
    }
  }
</style>
