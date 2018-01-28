<template>
  <div class="map__container--outer column is-two-thirds">
    <div class="grid__horizontal" v-bind:style="gridColumns">
      <template v-for="coord in mapData.horizontalGrid">
        <div :key="coord">{{coord}}
        </div>
      </template>
    </div>
    <div class="grid__vertical" v-bind:style="gridRows">
      <template v-for="coord in mapData.verticalGrid">
        <div :key="coord">{{coord}}
        </div>
      </template>
    </div>
    <div class="map__container--inner">
      <img class="map__image image" :src="mapImage" alt="">
      <div class="grid is-overlay" v-bind:style="[gridColumns, gridRows]">
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
      gridColumns: {
        gridTemplateColumns: `repeat(${this.mapData.gridSize}, 1fr)`,
      },
      gridRows: {
        gridTemplateRows: `repeat(${this.mapData.gridSize}, 1fr)`,
      },
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
    &__horizontal {
      display: grid;
      grid-column-start: 2;
      font-weight: bold;
      div {
        justify-self: center;
      }
    }
    &__vertical {
      display: grid;
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
