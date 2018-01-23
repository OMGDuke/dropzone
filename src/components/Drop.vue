<template>
  <div class="drop section columns">
    <div class="map__container column">
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
      <img class="map__image image" :src="mapImage" alt="">
      <div class="grid is-overlay">
        <template v-for="coord in mapData.grid">
          <div class="grid__square" :key="coord"
            :class="{'grid__square--selected': coord === selectedSquare.coord}">
          </div>
        </template>
      </div>
    </div>
    <div class="controls column auto">
      <div class="repick">
        <a class="button is-primary" href="#" v-on:click="selectSquare">Pick again</a>
      </div>
      <div class="location">
        <h2>You should drop in:</h2>
        <h2>{{selectedSquare.name}} - ({{selectedSquare.coord}})</h2>
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
  .map {
    &__container {
      display: grid;
      grid-template-columns: 20px 800px;
      grid-template-rows: 20px 800px;
    }
    &__image {
      // height: 800px;;
      // position: absolute;
      // z-index: -10;
      // top: 50px;
      // left: 50px;
    }
  }

  .grid {
    width: 800px;
    height: 800px;
    display: grid;
    grid-template-columns: repeat(8, 100px);
    grid-template-rows: repeat(8, 100px);
    top: 68px;
    left: 44px;
    &__horizontal {
      display: grid;
      grid-template-columns: repeat(8, 100px);
      grid-column-start: 2;
      font-weight: bold;
      div {
        justify-self: center;
      }
    }
    &__vertical {
      display: grid;
      grid-template-rows: repeat(8, 100px);
      font-weight: bold;
      div {
        align-self: center;
        width: 10px;
      }
    }
    &__square {
      border: 1px greenyellow solid;
      &--selected {
        background: rgba(0, 256, 0, 0.3);
      }
    }
  }

  .controls {
    display: grid;
    grid-template-rows: 100px 1fr;
    text-align: center;
  }

  .repick {
    justify-self: center;
  }

  .location {
    justify-self: center;
    text-align: center;
  }
</style>
