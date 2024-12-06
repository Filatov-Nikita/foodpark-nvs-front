<template>
  <section id="badges" class="badges">
    <div class="wrapper">
      <div class="rows" ref="rowsRef">
        <div ref="row1Ref" class="row-items row1" :style="{ '--x': x1 + 'px' }">
          <BaseBadge
            class="item"
            v-for="item in row1Items"
            :textColor="item.textColor"
            :color="item.color"
            :design="item.design"
          >
            {{ item.text }}
          </BaseBadge>
        </div>
        <div ref="row2Ref" class="row-items row2" :style="{ '--x': x2 + 'px' }">
          <BaseBadge
            class="item"
            v-for="item in row2Items"
            :textColor="item.textColor"
            :color="item.color"
            :design="item.design"
          >
            {{ item.text }}
          </BaseBadge>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import useMoveBadges from '@/composables/useMoveBadges';
  import { ref } from 'vue';

  const colorBlack = '#222222';
  const colorWhite = '#ffffff';

  const row1Items = [
    {
      text: 'Стрит-фуд',
      color: '#C7E74A',
      textColor: colorBlack,
      design: 'filled',
    },
    {
      text: 'Рестораны',
      color: '#EB8711',
      textColor: colorBlack,
      design: 'outlined',
    },
    {
      text: 'Здоровое питание',
      color: '#7B9904',
      textColor: colorWhite,
      design: 'filled',
    },
    {
      text: 'Кухни мира',
      color: '#FEB3D2',
      textColor: colorBlack,
      design: 'filled',
    },
    {
      text: 'Лежаки и беседки',
      color: '#FED12E',
      textColor: colorBlack,
      design: 'filled',
    },
    {
      text: 'Уникальная атмосфера',
      color: '#E85E4B',
      textColor: colorBlack,
      design: 'outlined',
    },
    {
      text: 'Рабочие зоны с Wi-Fi',
      color: '#EC76EE',
      textColor: colorBlack,
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
      color: colorBlack,
      textColor: colorWhite,
      design: 'filled',
    },
    {
      text: 'Живые концерты',
      color: '#E85E4B',
      textColor: colorWhite,
      design: 'filled',
    },
    {
      text: 'Dj-сеты',
      color: colorBlack,
      textColor: colorBlack,
      design: 'outlined',
    },
    {
      text: 'Гастрофестивали',
      color: '#FF44B5',
      textColor: colorWhite,
      design: 'filled',
    },
    {
      text: 'Место для встреч',
      color: '#E85E4B',
      textColor: colorWhite,
      design: 'filled',
    },
    {
      text: 'Детский клуб',
      color: '#FED12E',
      textColor: colorBlack,
      design: 'outlined',
    },
    {
      text: 'Бизнес-ланч',
      color: '#C7E74A',
      textColor: colorBlack,
      design: 'filled',
    },
  ];

  const row1Ref = ref(null);
  const row2Ref = ref(null);
  const rowsRef = ref(null);

  const { x1, x2 } = useMoveBadges(row1Ref, row2Ref, rowsRef);
</script>

<style scoped lang="scss">
  .badges {
    overflow: hidden;
  }

  .row-items {
    width: max-content;
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;

    & + & {
      margin-top: 30px;
    }
  }

  .item {
    flex-shrink: 0;
  }

  .row1, .row2 {
    transform: translateX(var(--x));
  }
</style>
