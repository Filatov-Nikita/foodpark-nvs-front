<template>
  <main>
    <SectionMain
      v-if="home"
      :title="home.zagolovok"
      :subtitle="home.podzagolovok"
      :btnTitle="home.tekst_na_knopke"
      :video="{
        url: home.video.url,
      }"
    />
    <SectionRestaurants />
    <SectionSubscribe :tgHref="home.ssylka_na_telegram" />
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
  import SectionRestaurants from './SectionRestaurants.vue';
  import SectionSubscribe from './SectionSubscribe.vue';
  import Footer from './Footer.vue';
  import api from '@/repositories';

  const home = await api.home.show();
</script>

<style scoped lang="scss">

</style>
