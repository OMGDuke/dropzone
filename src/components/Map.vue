<template>
  <div class="map">
    <div>
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
      <img class="map__image" :src="mapImage" alt="">
      <div class="grid">
        <template v-for="coord in mapData.grid">
          <div class="grid__square" :key="coord"
            :class="{'grid__square--selected': coord === selectedSquare.coord}">
          </div>
        </template>
      </div>
    </div>
    <div class="controls">
      <div class="repick">
        <button v-on:click="() => {selectSquare()}">Pick again</button>
      </div>
      <h1 class="location">Dropping in {{selectedSquare.name}} - ({{selectedSquare.coord}})</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map',
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
      console.log('called');
      const locations = this.mapData.locations;
      const index = Math.random() * locations.length;
      const location = locations[Math.floor(index)];
      this.$data.selectedSquare = location;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .map {
    display: grid;
    grid-template-columns: 800px 1fr;
  }
  .map__image {
    height: 800px;;
    position: absolute;
    z-index: -10;
  }
  .grid__horizontal {
    display: grid;
    grid-template-columns: repeat(8, 100px);
    grid-template-rows: auto;
  }

  .grid__horizontal div {
    justify-self: center;
  }

  .grid {
    width: 800px;
    height: 800px;
    display: grid;
    grid-template-columns: repeat(8, 100px);
    grid-template-rows: repeat(8, 100px);
  }

  .grid__square {
    border: 1px greenyellow solid;
  }

  .grid__square--selected {
    background: rgba(0, 256, 0, 0.5);
  }

  .controls {
    display: grid;
    grid-template-rows: 100px 1fr;
    text-align: center;
  }

  .location {
    justify-self: center;
    text-align: center;
  }
</style>
