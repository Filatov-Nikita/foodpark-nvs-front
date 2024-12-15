<template>
  <div class="scroll-x tw-w-fit tw-mx-auto">
    <div class="types">
      <button
        class="item"
        :class="{ 'item--active': item.term_id === activeType }"
        v-for="item in items"
        :key="item.term_id"
        @click="$emit('change:type', item.term_id)"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    activeType: {
      required: true,
      type: [ Number, null ],
    },
    items: {
      required: true,
      type: Array,
    }
  });

  defineEmits(['change:type']);
</script>

<style scoped lang="scss">
  .types {
    display: flex;
    align-items: center;
    column-gap: 50px;
  }

  .item {
    position: relative;
    font-size: 16px;
    line-height: 1.25;
    text-transform: uppercase;
    padding-bottom: 10px;
    white-space: nowrap;
    @apply tw-text-gray;

    &:hover {
      @apply tw-text-dark;
    }

    &--active {
      font-weight: 500;
      @apply tw-text-dark;

      &::after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 80%;
        height: 1px;
        background: #000000;
      }
    }
  }
</style>
