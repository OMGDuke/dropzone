<template>
  <div class="drop section columns">
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
    <div class="controls column auto">
      <h1 class="title is-1">
        <router-link class="controls__link--home" to="/">DROPZONE</router-link>
      </h1>
      <div class="repick">
        <button class="button is-primary" v-on:click="selectSquare">Pick again</button>
      </div>
      <div class="location">
        <h2 class="title is-4">You should drop in:</h2>
        <h2 class="title is-2">{{selectedSquare.name}} - ({{selectedSquare.coord}})</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Drop',
  props: ['mapImage', 'mapData'],
  data() {
    return {
      selectedSquare: {},
    };
  },
  created() {
    this.selectSquare();
  },
  methods: {
    selectSquare() {
      const locations = this.mapData.locations;
      const index = Math.random() * locations.length;
      const location = locations[Math.floor(index)];
      this.$data.selectedSquare = location;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "~bulma/bulma.sass";
  html {
    background: black !important;
  }
  body {
    background: black !important;
  }
  .map {
    &__container {
      &--outer {
        display: grid;
        grid-template-columns: 20px auto;
        grid-template-rows: 20px auto;
        max-width: 90vh;
      }
      &--inner {
        position: relative;
        padding: 0;
        max-width: 90vh;

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

  .controls {
    display: grid;
    grid-template-rows: 100px 100px auto;
    width: 100%;
    text-align: center;
    &__link {
      &--home {
        text-decoration: none;
        color: $primary;
        &:hover {
          color: black;
        }
      }
    }
  }

  .repick {
    margin-bottom: 10px;
  }

  .location {
    max-width: 100%;
  }
</style>
