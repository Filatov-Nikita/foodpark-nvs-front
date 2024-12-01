<template>
  <div>
    <p class="empty" v-if="items.length === 0">Пока нет ни одного события</p>
    <Swiper
      v-else
      :spaceBetween="16"
      :slidesPerView="1"
      :breakpoints="{
        800: {
          spaceBetween: 20,
          slidesPerView: 3,
        }
      }"
      @swiper="onSwiper"
      @slideChange="onSliderChange"
    >
      <SwiperSlide
        v-for="item in items"
        :key="item.ID"
      >
        <ListItem :item="item" />
      </SwiperSlide>
      <template #container-start>
        <div class="nav-actions" :class="{ 'tw-invisible': !canPrev && !canNext }">
          <NavBtn class="nav-action" size="36px" dir="left" :disabled="!canPrev" @click="prev" />
          <NavBtn class="nav-action" size="36px" dir="right" :disabled="!canNext" @click="next" />
        </div>
      </template>
    </Swiper>
  </div>
</template>

<script setup>
  import ListItem from './Item.vue';
  import NavBtn from '@/components/Base/NavBtn.vue';
  import useSwiperNav from '@/composables/useSwiperNav';
  import { ref } from 'vue';

  defineProps({
    items: {
      required: true,
      type: Array,
    }
  });

  const swiper = ref(null);

  const {
    canNext,
    canPrev,
    next,
    prev,
    onSliderChange,
    updateActions,
  } = useSwiperNav(swiper);

  function onSwiper(swr) {
    swiper.value = swr;
    updateActions();
  }
</script>

<style scoped lang="scss">
  .empty {
    padding: 50px 0;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
  }

  .nav-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    padding-bottom: 20px;
  }

  .nav-action {
    flex-shrink: 0;
  }
</style>
