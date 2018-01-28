<template>
  <div class="section drop">
    <div class="columns">
      <Map v-bind:mapImage="mapImage" v-bind:mapData="mapData"
        v-bind:selectedSquare="selectedSquare">
      </Map>
      <div class="controls column auto">
        <div class="controls__map-name">
          <h2 class="title is-2">{{mapData.name}}</h2>
        </div>
        <div class="controls__repick is-spaced">
          <button class="button is-large is-primary" v-on:click="selectSquare">Pick again</button>
        </div>
        <div class="controls__location">
          <h2 class="title is-4">You should drop in:</h2>
          <h2 class="title is-2">{{selectedSquare.name}}</h2>
          <h2 class="subtitle is-3">{{selectedSquare.coord}}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from './Map';

export default {
  name: 'Drop',
  props: ['mapImage', 'mapData'],
  components: {
    Map,
  },
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

  .controls {
    display: grid;
    grid-template-rows: 1fr 1fr 3fr;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    &__repick {
      min-height: 70px;
      align-self: center;
    }
    &__location {
      max-width: 100%;
    }
  }
</style>
