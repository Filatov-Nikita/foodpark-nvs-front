<template>
  <div
    class="badge"
    :class="{
     'badge--filled': design === 'filled',
     'badge--outlined': design === 'outlined',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
  defineProps({
    color: {
      default: '#000000',
      type: String,
    },
    textColor: {
      default: '#ffffff',
      type: String,
    },
    design: {
      default: 'filled',
      type: String,
    }
  });
</script>

<style scoped lang="scss">
  .badge {
    display: inline-block;
    text-align: center;
    padding: 15px 30px;
    border-width: 1px;
    border-style: solid;
    color: v-bind(textColor);
    border-color: v-bind(color);
    border-radius: 30px;
    font-weight: 500;
    @apply tw-tracking-1;

    &--filled {
      background-color: v-bind(color);
    }
  }
</style>
