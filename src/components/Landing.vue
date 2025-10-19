<template>
  <main>
    <SectionMain
      class="main-sec"
      v-if="home"
      :title="home.zagolovok"
      :subtitle="home.podzagolovok"
      :btnTitle="home.tekst_na_knopke"
      :tgHref="home.ssylka_na_telegram"
      :video="home.video"
    />
    <SectionAbout v-if="home" class="about-sec" :title="home.banner_zagolovok" :items="home.banners" />
    <SectionBadges class="badges-sec" />
    <SectionPhotos v-if="home" class="photos-sec"
      :photoXl="home.grid.xl"
      :photoSm="home.grid.sm"
    />
    <SectionRestaurants v-if="home" class="rest-sec" :foodparkMapHref="home.foodpark_map_href" />
    <SectionActivities class="activ-sec" />
    <SectionPromotions class="prom-sec" />
    <SectionBlog class="blog-sec" />
    <SectionSubscribe v-if="home" class="subs-sec" :tgHref="home.ssylka_na_telegram" />
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
  import SectionBlog from './SectionBlog.vue';
  import Footer from './Footer.vue';
  import api from '@/repositories';
  import useRequest from '@/composables/useRequest';

  const { data: home } = await useRequest(api.home.show, {
    errorMessage: 'Не удалось загрузить данные!'
  });
</script>

<style scoped lang="scss">
  .main-sec {
    margin-bottom: 120px;

    @include sm {
      margin-bottom: 80px;
    }

    @include sm {
      margin-bottom: 50px;
    }
  }

  .about-sec {
    margin-bottom: 100px;

    @include sm {
      margin-bottom: 50px;
    }
  }

  .rest-sec {
    margin-bottom: 180px;

    @include sm {
      margin-bottom: 80px;
    }
  }

  .subs-sec {
    margin-bottom: 130px;

    @include sm {
      margin-bottom: 40px;
    }
  }

  .badges-sec {
    margin-bottom: 140px;

    @include sm {
      margin-bottom: 50px;
    }
  }

  .prom-sec {
    margin-bottom: 180px;

    @include sm {
      margin-bottom: 80px;
    }
  }

  .activ-sec {
    margin-bottom: 180px;

    @include sm {
      margin-bottom: 80px;
    }
  }

  .photos-sec {
    margin-bottom: 180px;

    @include sm {
      margin-bottom: 80px;
    }
  }

  .blog-sec {
    margin-bottom: 130px;

    @include sm {
      margin-bottom: 90px;
    }
  }
</style>
