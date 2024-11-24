<template>
  <main>
    <SectionMain
      v-if="home"
      :title="home.zagolovok"
      :subtitle="home.podzagolovok"
      :video="{
        url: home.video.url,
      }"
    />
    <pre>{{ home }}</pre>
  </main>
</template>

<script setup>
  import SectionMain from './SectionMain.vue';
  import api from '@/repositories';

  const home = await api.home.show();
</script>

<style scoped lang="scss">

</style>
