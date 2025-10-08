<template>
  <Swiper
    class="slider"
    :spaceBetween="30"
    :modules="[Pagination, Navigation]"
    pagination
    :navigation="{
      nextEl: next,
      prevEl: prev,
    }"
  >
    <SwiperSlide
      class="slide"
      v-for="photo in images"
    >
      <img class="photo" :width="photo.width" :height="photo.height" :src="photo.url" />
    </SwiperSlide>
    <button ref="prev" class="nav-btn nav-btn--prev">
      <svg class="nav-btn__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.07899 11.556L14.0848 5.17155C14.3147 4.94282 14.6875 4.94282 14.9174 5.17155C15.1473 5.40026 15.1473 5.77136 14.9174 6.00009L8.33404 12L14.9168 17.9999C15.1467 18.2286 15.1467 18.5997 14.9168 18.8285C14.6869 19.0572 14.3141 19.0572 14.0842 18.8285L7.0784 12.444C6.95587 12.3221 6.90334 12.1605 6.91152 12.0006C6.90391 11.8401 6.95642 11.6785 7.07899 11.556Z" fill="#222222"/>
      </svg>
    </button>
    <button ref="next" class="nav-btn nav-btn--next">
      <svg class="nav-btn__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.921 12.444L9.91521 18.8285C9.68531 19.0572 9.31247 19.0572 9.08258 18.8285C8.85268 18.5997 8.85268 18.2286 9.08258 17.9999L15.666 12L9.08316 6.00009C8.85327 5.77136 8.85327 5.40026 9.08316 5.17155C9.31305 4.94284 9.6859 4.94284 9.91577 5.17155L16.9216 11.556C17.0441 11.6779 17.0967 11.8395 17.0885 11.9994C17.0961 12.1599 17.0436 12.3215 16.921 12.444Z" fill="#222222"/>
      </svg>
    </button>
  </Swiper>
</template>

<script setup>
  import { ref } from 'vue';
  import { Pagination, Navigation } from 'swiper/modules';
  import 'swiper/css/pagination';

  const props = defineProps({
    images: {
      required: true,
      type: Object,
    }
  });

  const prev = ref(null);
  const next = ref(null);
</script>

<style scoped lang="scss">
    .photo {
    width: 100%;
    border-radius: 40px;
  }

  .nav-btn {
    position: absolute;
    top: 50%;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    z-index: 10;
    opacity: 0.7;
    padding: 4px;
    @apply tw-bg-white;

    &:hover {
      opacity: 1;
    }

    &.swiper-button-disabled {
      opacity: 0.2 !important;
    }

    &--prev {
      left: 20px;
    }

    &--next {
      right: 20px;
    }

    &__icon {
      width: 100%;
      height: 100%;
    }
  }

  .slider {
    --swiper-pagination-color: #222222;
    --swiper-pagination-bullet-inactive-color: #E0DECF;
    --swiper-pagination-bullet-inactive-opacity: 1;
    --swiper-pagination-bullet-size: 10px;
    --swiper-pagination-bottom: 4px;
    padding-bottom: 28px;
  }
</style>
