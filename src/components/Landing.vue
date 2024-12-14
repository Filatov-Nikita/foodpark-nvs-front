<template>
  <main>
    <SectionMain
      class="main-sec"
      v-if="home"
      :title="home.zagolovok"
      :subtitle="home.podzagolovok"
      :btnTitle="home.tekst_na_knopke"
      :tgHref="home.ssylka_na_telegram"
      :video="{
        url: home.video.url,
      }"
    />
    <SectionAbout class="about-sec" :title="home.banner_zagolovok" :items="home.banners" />
    <SectionBadges class="badges-sec" />
    <SectionPhotos class="photos-sec" />
    <SectionRestaurants class="rest-sec" />
    <SectionActivities class="activ-sec" />
    <SectionPromotions class="prom-sec" />
    <SectionSubscribe class="subs-sec" :tgHref="home.ssylka_na_telegram" />
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
  import SectionAbout from './SectionAbout.vue';
  import SectionBadges from './SectionBadges.vue';
  import SectionPromotions from './SectionPromotions.vue';
  import SectionActivities from './SectionActivities.vue';
  import SectionPhotos from './SectionPhotos.vue';
  import Footer from './Footer.vue';
  import api from '@/repositories';

  const home = await api.home.show();
</script>

<style scoped lang="scss">
  .main-sec {
    margin-bottom: 120px;
  }

  .about-sec {
    margin-bottom: 100px;
  }

  .rest-sec {
    margin-bottom: 180px;
  }

  .subs-sec {
    margin-bottom: 180px;
  }

  .badges-sec {
    margin-bottom: 100px;
  }

  .prom-sec {
    margin-bottom: 170px;
  }

  .activ-sec {
    margin-bottom: 150px;
  }

  .photos-sec {
    margin-bottom: 180px;
  }
</style>
