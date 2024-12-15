<template>
  <div class="items">
    <ActionItem
      class="action-item"
      v-for="item in items"
      :item="item"
    />
  </div>
</template>

<script setup>
  import ActionItem from './Item.vue';

  defineProps({
    items: {
      required: true,
      type: Array,
    },
  });
</script>

<style scoped lang="scss">
  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
  }

  .action-item {
    width: calc(33.3% - 16px);
    margin: 8px;

    @include md {
      width: calc(50% - 16px);
    }

    @include sm {
      width: calc(100% - 16px);
    }
  }
</style>
