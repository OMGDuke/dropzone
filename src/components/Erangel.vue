<template>
  <div>
    <Drop v-bind:mapImage="erangelMap" v-bind:mapData="erangelData"></Drop>
  </div>
</template>

<script>
import erangelMap from '@/assets/erangel-map.jpg';
import erangelData from '../mapData/ErangelData';
import Drop from './Drop';

export default {
  name: 'Erangel',
  components: {
    Drop,
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
