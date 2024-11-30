<template>
  <section id="badges" class="badges">
    <div class="wrapper">
      <div class="row-items">
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
      <div class="row-items">
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
  </section>
</template>

<script setup>
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
</script>

<style scoped lang="scss">
  .badges {
    overflow: hidden;
  }

  .row-items {
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
</style>
