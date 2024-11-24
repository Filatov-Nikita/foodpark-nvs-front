<template>
  <article>
    <pre>{{ item }}</pre>
  </article>
</template>

<script setup>
  defineProps({
    item: {
      required: true,
      type: Object,
    }
  });
</script>
