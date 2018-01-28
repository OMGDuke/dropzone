<template>
  <div>
    <Drop v-bind:mapImage="fortniteMap" v-bind:mapData="fortniteData"></Drop>
  </div>
</template>

<script>
import fortniteMap from '@/assets/fortnite-map.jpg';
import fortniteData from '../FortniteData';
import Drop from './Drop';

export default {
  name: 'Fortnite',
  components: {
    Drop,
  },
  data() {
    return {
      fortniteData,
      fortniteMap,
    };
  },
};
</script>

<style scoped>

</style>
