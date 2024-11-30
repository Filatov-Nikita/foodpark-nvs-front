<template>
  <a class="item" href="#food">
    <div class="img-wrap">
      <img class="photo" width="968" height="801" src="@/assets/images/about-item.jpg" loading="lazy" />
      <div class="name">Атмосфера</div>
    </div>
  </a>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .img-wrap {
    position: relative;
    border-radius: 20px;
    overflow: hidden;

    &::after {
      content: '';
      display: block;
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
    }

    &:hover {
      .photo {
        transform: scale(1.1);
      }
    }
  }

  .photo {
    transition: transform 150ms;
  }

  .name {
    position: absolute;
    z-index: 2;
    width: 100%;
    bottom: 0;
    left: 0;
    text-align: center;
    padding: 30px 16px;
    font-size: 34px;
    line-height: 1.3;
    @apply tw-font-if-kica tw-font-semibold tw-text-white tw-uppercase;
  }
</style>
