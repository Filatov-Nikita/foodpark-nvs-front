<template>
  <section id="photos" class="photos">
    <div class="wrapper">
      <div class="grid">
        <div class="col-square">
          <div class="square">
            <div class="square1">
              <img class="photo" width="777" height="585" src="@/assets/images/grid/square1.jpg" loading="lazy" />
            </div>
            <div class="square2">
              <img class="photo" width="674" height="585" src="@/assets/images/grid/square2.jpg" loading="lazy" />
            </div>
            <div class="square3">
              <img class="photo" width="882" height="674" src="@/assets/images/grid/square3.jpg" loading="lazy" />
            </div>
            <div class="square4">
              <img class="photo" width="569" height="674" src="@/assets/images/grid/square4.jpg" loading="lazy" />
            </div>
            <div class="long-wrap">
              <img class="photo" width="1475" height="831" src="@/assets/images/grid/long.jpg" loading="lazy" />
            </div>
          </div>
        </div>
        <div class="col-tall">
          <div class="tall-top-wrap">
            <img class="photo" width="572" height="1051" src="@/assets/images/grid/tall1.jpg" loading="lazy" />
          </div>
          <div class="tall-bottom-wrap">
            <img class="photo" width="572" height="1064" src="@/assets/images/grid/tall2.jpg" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .grid {
    display: grid;
    gap: 16px;
    grid-template-columns: calc(71.8% - 8px) calc(28.2% - 8px);
  }

  .photo {
    border-radius: 30px;
    width: 100%;
  }

  .col-tall {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .square {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .square1 {
    width: calc(53.5% - 8px);
  }

  .square2 {
    width: calc(46.5% - 8px);
  }

  .square3 {
    width: calc(60.5% - 8px);
  }

  .square4 {
    width: calc(39.5% - 8px);
  }

  .long-wrap {
    width: 100%;
  }

  .tall-top-wrap {

  }

  .tall-bottom-wrap {

  }
</style>
