<template>
  <div class="items">
    <BlogListItem
      class="list-item"
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script setup>
  import BlogListItem from './Item.vue';

  defineProps({
    items: {
      required: true,
      type: Array,
    }
  });
</script>

<style scoped lang="scss">
  .items {
    --col-w: 33.3%;
    --gap: 11px;
    display: flex;
    flex-wrap: wrap;
    margin: calc(var(--gap) * -1);

    @include md {
      --col-w: 50%;
    }

    @include sm {
      --col-w: 100%;
    }
  }

  .list-item {
    width: calc(var(--col-w) - var(--gap) * 2);
    margin: var(--gap);
  }
</style>
