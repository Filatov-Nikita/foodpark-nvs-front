<template>
  <div class="scroll-x tw-w-full tw-max-w-full">
    <div class="items">
      <CategoryItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        :active="activeCategory === item.id"
        @change:active="$emit('change:item', $event)"
      />
    </div>
  </div>
</template>

<script setup>
  import CategoryItem from './Item.vue';

  defineProps({
    items: {
      required: true,
      type: Array,
    },
    activeCategory: {
      required: true,
      type: [ Number, null ],
    },
  });

  defineEmits(['change:item']);
</script>

<style scoped lang="scss">
  .items {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }
</style>
