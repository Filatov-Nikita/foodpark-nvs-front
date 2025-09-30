<template>
  <section id="badges">
    <div class="wrapper">
      <Swiper
        class="slider slider1"
        :modules="[ FreeMode, Autoplay ]"
        loop
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }"
        freeMode
        grabCursor
        slidesPerView="auto"
        :speed="10000"
        :spaceBetween="20"
      >
        <SwiperSlide
          class="slide"
          v-for="item in row1Items"
        >
          <BaseBadge
            :textColor="item.textColor"
            :color="item.color"
            :design="item.design"
          >
            {{ item.text }}
          </BaseBadge>
        </SwiperSlide>
      </Swiper>
      <Swiper
        class="slider"
        :modules="[ FreeMode, Autoplay ]"
        loop
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
        }"
        freeMode
        grabCursor
        slidesPerView="auto"
        :speed="13000"
        :spaceBetween="20"
      >
        <SwiperSlide
          class="slide"
          v-for="item in row2Items"
        >
          <BaseBadge
            :textColor="item.textColor"
            :color="item.color"
            :design="item.design"
          >
            {{ item.text }}
          </BaseBadge>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
  import { FreeMode, Autoplay } from 'swiper/modules';

  const colorBlack = '#222222';
  const colorWhite = '#ffffff';

  const row1Items = [
    {
      text: 'Стрит-фуд',
      color: '#D69D2A',
      textColor: colorWhite,
      design: 'filled',
    },
    {
      text: 'Рестораны',
      color: '#D69D2A',
      textColor: colorBlack,
      design: 'outlined',
    },
    {
      text: 'Здоровое питание',
      color: '#659256',
      textColor: colorWhite,
      design: 'filled',
    },
    {
      text: 'Кухни мира',
      color: '#E6EBCE',
      textColor: colorBlack,
      design: 'filled',
    },
    {
      text: 'Лежаки и беседки',
      color: '#E0D160',
      textColor: colorBlack,
      design: 'filled',
    },
    {
      text: 'Уникальная атмосфера',
      color: '#D69D2A',
      textColor: colorBlack,
      design: 'outlined',
    },
    {
      text: 'Рабочие зоны с Wi-Fi',
      color: '#99BE8A',
      textColor: colorWhite,
      design: 'filled',
    },
    {
      text: 'Вкусная еда',
      color: '#E85E4B',
      textColor: colorWhite,
      design: 'filled',
    },
    {
      text: 'Семейные обеды',
      color: '#FF44B5',
      textColor: colorWhite,
      design: 'filled',
    },
  ];

  const row2Items = [
    {
      text: 'Уютные посиделки',
      color: '#7B9904',
      textColor: colorBlack,
      design: 'outlined',
    },
    {
      text: 'Разнообразная кухня',
      color: '#EB8509',
      textColor: colorWhite,
      design: 'filled',
    },
    {
      text: 'Фрилансерам и студентам',
      color: '#E0D160',
      textColor: colorBlack,
      design: 'filled',
    },
    {
      text: 'Живые концерты',
      color: '#E6EBCE',
      textColor: colorBlack,
      design: 'filled',
    },
    {
      text: 'Dj-сеты',
      color: '#131212',
      textColor: colorBlack,
      design: 'outlined',
    },
    {
      text: 'Гастрофестивали',
      color: '#99BE8A',
      textColor: colorWhite,
      design: 'filled',
    },
    {
      text: 'Место для встреч',
      color: '#D69D2A',
      textColor: colorWhite,
      design: 'filled',
    },
    {
      text: 'Детский клуб',
      color: '#659256',
      textColor: colorBlack,
      design: 'outlined',
    },
    {
      text: 'Бизнес-ланч',
      color: '#E0D160',
      textColor: colorBlack,
      design: 'filled',
    },
  ];
</script>

<style scoped>
  .swiper-free-mode.slider > :deep(.swiper-wrapper) {
    transition-timing-function: linear;
  }

  .slider1 {
    margin-bottom: 30px;
  }

  .slide {
    width: fit-content;
  }
</style>
