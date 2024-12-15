<template>
  <div class="rest-items">
    <Item
      class="rest-item"
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script setup>
  import Item from './Item.vue';

  defineProps({
    items: {
      required: true,
      type: Array,
    }
  });
</script>

<style scoped lang="scss">
  .rest-items {
    display: flex;
    flex-wrap: wrap;
    margin: -15px -10px;
  }

  .rest-item {
    width: calc(33.3% - 20px);
    margin: 15px 10px;

    @include md {
      width: calc(50% - 20px);
    }

    @include sm {
      width: calc(100% - 20px);
    }
  }
</style>
