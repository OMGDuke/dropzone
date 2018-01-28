<template>
  <div class="map__container--outer column is-two-thirds">
    <div class="grid__horizontal">
      <div>A</div>
      <div>B</div>
      <div>C</div>
      <div>D</div>
      <div>E</div>
      <div>F</div>
      <div>G</div>
      <div>H</div>
    </div>
    <div class="grid__vertical">
      <div>I</div>
      <div>J</div>
      <div>K</div>
      <div>L</div>
      <div>M</div>
      <div>N</div>
      <div>O</div>
      <div>P</div>
    </div>
    <div class="map__container--inner">
      <img class="map__image image" :src="mapImage" alt="">
      <div class="grid is-overlay">
        <template v-for="coord in mapData.grid">
          <div class="grid__square" :key="coord"
            :class="{'grid__square--selected': coord === selectedSquare.coord}">
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: ['mapImage', 'mapData', 'selectedSquare'],
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "~bulma/bulma.sass";
  .page {
    &__heading {
      text-align: center;
      > a {
        color: black;
        text-decoration: none;
        &:hover {
          color: $primary;
        }
      }
    }
  }

  .map {
    &__container {
      &--outer {
        display: grid;
        grid-template-columns: 20px auto;
        grid-template-rows: 20px auto;
        max-width: 80vh;
      }
      &--inner {
        position: relative;
        padding: 0;
        max-width: 80vh;

      }
    }
    &__image {
      width: 100%;
    }
  }

  .grid {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    &__horizontal {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-column-start: 2;
      font-weight: bold;
      div {
        justify-self: center;
      }
    }
    &__vertical {
      display: grid;
      grid-template-rows: repeat(8, 1fr);
      font-weight: bold;
      div {
        align-self: center;
        width: 10px;
      }
    }
    &__square {
      border: 1px $primary solid;
      &--selected {
        background: rgba(0, 209, 178, 0.3);
        box-shadow: 0 0 15px 0 $primary,
                inset 0 0 0 1px $primary,
                inset 0px 11px 8px -10px $primary,
                inset 0px -11px 8px -10px $primary;
      }
    }
  }
</style>
