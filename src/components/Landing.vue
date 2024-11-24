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
    <div class="wrapper">
      <pre>{{ home }}</pre>
    </div>
    <Footer
      v-if="home"
      :phone="home.phone"
      :address="home.address"
      :tgHref="home.ssylka_na_telegram"
      :workTime="home.vremya_raboty"
    />
  </main>
</template>

<script setup>
  import SectionMain from './SectionMain.vue';
  import Footer from './Footer.vue';
  import api from '@/repositories';

  const home = await api.home.show();
</script>

<style scoped lang="scss">

</style>
