<template>
  <div class="proms" ref="promsRef">
    <Swiper
      class="slider"
      :spaceBetween="16"
      :slidesPerView="1"
      :breakpoints="{
        '992.9': {
          spaceBetween: 20,
          slidesPerView: 2,
        },
      }"
      @swiper="onSwiper"
      @slideChange="onSliderChange"
    >
      <SwiperSlide
        v-for="item in items"
        :key="item.id"
      >
        <PromoItem :item="item" />
      </SwiperSlide>
    </Swiper>
    <template v-if="canPrev || canNext">
      <NavBtn class="left-btn" dir="left" :size="grid.md ? '60px' : '32px'" :disabled="!canPrev" @click="prev" />
      <NavBtn class="right-btn" dir="right" :size="grid.md ? '60px' : '32px'" :disabled="!canNext" @click="next" />
    </template>
  </div>
</template>

<script setup>
  import { useScreen } from 'vue-screen';
  import PromoItem from './Item.vue';
  import NavBtn from '@/components/Base/NavBtn.vue';
  import { onMounted, ref, watch } from 'vue';
  import useSwiperNav from '@/composables/useSwiperNav';
  import useAppGrid from '@/composables/useAppGrid';

  defineProps({
    items: {
      required: true,
      type: Array,
    }
  });

  const screen = useScreen({}, 100);
  const grid = useAppGrid();

  const promsRef = ref(null);
  const swiper = ref(null);

  const {
    canNext,
    canPrev,
    next,
    prev,
    onSliderChange,
    updateActions,
  } = useSwiperNav(swiper);

  const navOffset = ref('0px');

  function getNavOffset() {
    if(!promsRef.value) return;
    const img = promsRef.value.querySelector('.photo');
    if(!img) return;
    navOffset.value = Math.round(img.offsetHeight / 2 - 30).toString() + 'px';
  }

  function onSwiper(swr) {
    swiper.value = swr;
    updateActions();
  }

  onMounted(() => {
    getNavOffset();
  });

  watch(() => screen.width, () => {
    getNavOffset();
  }, { immediate: true });
</script>

<style scoped lang="scss">
  .proms {
    position: relative;
  }

  .slider {
    max-width: 63%;
    margin-left: auto;
    margin-right: auto;

    @include sm {
      max-width: 75%;
    }
  }

  .left-btn, .right-btn {
    position: absolute;
    z-index: 1;
    top: v-bind(navOffset);
  }

  .left-btn {
    left: 0;
  }

  .right-btn {
    right: 0;
  }
</style>
