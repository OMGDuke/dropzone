<template>
 <div class="map">
   <img class="map__image" src="@/assets/erangel-map.png/" alt="">
   <div class="grid">
    <template v-for="coord in gridCoords">
      <div class="grid__square" :key="coord"
        :class="{'grid__square--selected': coord === selectedSquare.coord}"></div>
    </template>
   </div>
   <h1>Dropping in {{selectedSquare.name}}</h1>
 </div>
</template>

<script>
import erangel from '../Erangel';

export default {
  name: 'Map',
  data() {
    return {
      gridCoords: erangel.grid,
      locations: erangel.locations,
      selectedSquare: this.selectSquare(),
    };
  },
  methods: {
    selectSquare() {
      const location = erangel.locations[Math.floor(Math.random() * erangel.locations.length)];
      return location;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .map {
    height: 800px;
    width: 800px;
  }
  .map__image {
    height: inherit;
    position: absolute;
    z-index: -10;
  }
  .grid {
    width: 800px;
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
</style>
