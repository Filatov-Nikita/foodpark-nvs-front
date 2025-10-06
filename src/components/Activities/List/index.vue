<template>
  <div>
    <p class="empty" v-if="items.length === 0">Пока нет ни одного события</p>
    <Swiper
      v-else
      :key="k"
      :spaceBetween="16"
      :slidesPerView="1"
      :breakpoints="{
        '720.9': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '992.9': {
          slidesPerView: 3,
        },
      }"
      @swiper="onSwiper"
      @slideChange="onSliderChange"
    >
      <SwiperSlide
        v-for="item in items"
        :key="item.id"
      >
        <ListItem :item="item" @show="$emit('changed:item', item.id)" />
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
  import { ref, watch } from 'vue';

  const props = defineProps({
    items: {
      required: true,
      type: Array,
    }
  });

  defineEmits([ 'changed:item' ]);

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

  const k = ref(0);

  watch(() => props.items, () => {
    k.value++;
  });
</script>

<style scoped lang="scss">
  .empty {
    padding: 50px 0;
    text-align: center;
    font-weight: 500;
    font-size: 18px;

    @include sm {
      font-size: 16px;
      padding: 40px 0;
    }
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
