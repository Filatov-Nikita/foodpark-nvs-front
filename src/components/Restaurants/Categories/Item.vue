<template>
  <button
    class="category-btn"
    :class="{ 'category-btn--active': active }"
    @click="changeActive"
  >
    {{ item.name }}
  </button>
</template>

<script setup>
  const props = defineProps({
    item: {
      required: true,
      type: Object,
    },
    active: {
      default: false,
      type: Boolean,
    }
  });

  const emit = defineEmits([ 'change:active' ]);

  function changeActive() {
    emit('change:active', props.active ? null : props.item.id);
  }
</script>

<style scoped lang="scss">
  .category-btn {
    padding: 12px 24px;
    font-size: 16px;
    line-height: 1.3;
    border-radius: 30px;
    border: 1px solid theme('colors.accent');
    white-space: nowrap;
    @apply tw-tracking-1 tw-text-dark;

    &:hover {
      background-color: rgba(226, 226, 226, 0.8);
    }

    &--active{
      background-color: theme('colors.accent');

      &:hover {
        background-color: #ddc966;
      }
    }
  }
</style>
