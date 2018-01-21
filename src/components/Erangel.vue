<template>
  <div>
    <Map v-bind:mapImage="erangelMap" v-bind:mapData="erangelData"></Map>
  </div>
</template>

<script>
import erangelMap from '@/assets/erangel-map.png';
import erangelData from '../Erangel';
import Map from './Map';

export default {
  name: 'Erangel',
  components: {
    Map,
  },
  data() {
    return {
      erangelData,
      erangelMap,
    };
  },
};
</script>

<style scoped>

</style>
