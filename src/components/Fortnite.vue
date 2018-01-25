<template>
  <div>
    <DropFortnite v-bind:mapImage="fortniteMap" v-bind:mapData="fortniteData"></DropFortnite>
  </div>
</template>

<script>
import fortniteMap from '@/assets/fortnite-map.jpg';
import fortniteData from '../Fortnite';
import DropFortnite from './DropFortnite';

export default {
  name: 'Fortnite',
  components: {
    DropFortnite,
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
