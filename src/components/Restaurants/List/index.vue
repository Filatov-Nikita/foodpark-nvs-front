<template>
  <div>
    <Item
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
