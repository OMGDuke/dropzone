<template>
  <div class="section drop has-text-centered">
    <div class="map-name has-text-centered">
      <h2 class="title is-2">{{mapData.name}}</h2>
    </div>
    <div class="columns">
       <div class="controls column auto">
        <div class="controls__location">
          <h2 class="no-margin title is-4">You should drop in:</h2>
          <h2 class="title is-2">{{selectedSquare.name}}</h2>
          <h2 class="subtitle is-3">{{selectedSquare.coord}}</h2>
        </div>
        <div class="controls__repick is-spaced">
          <button class="button is-large is-primary" v-on:click="selectSquare">Pick again</button>
        </div>
      </div>
      <Map class="column is-two-thirds" v-bind:mapImage="mapImage" v-bind:mapData="mapData"
        v-bind:selectedSquare="selectedSquare">
      </Map>
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
  .drop {
    padding-top: 10px;
  }
  .controls {
    display: grid;
    grid-template-rows: auto auto;
    width: 100%;
    text-align: center;
    &__repick {
      // min-height: 70px;
      align-self: flex-start;
    }
    &__location {
      // max-width: 100%;
      align-self: center;
    }
  }

  h2.no-margin {
    margin-bottom: 0 !important;
  }
</style>
