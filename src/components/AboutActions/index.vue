<template>
  <div class="items">
    <ActionItem class="action-item" />
    <ActionItem class="action-item" />
    <ActionItem class="action-item" />
  </div>
</template>

<script setup>
  import ActionItem from './Item.vue';
</script>

<style scoped>
  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
  }

  .action-item {
    width: calc(33.3% - 16px);
    margin: 8px;
  }
</style>
