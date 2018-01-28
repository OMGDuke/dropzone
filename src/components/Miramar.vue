<template>
  <div>
    <Drop v-bind:mapImage="miramarMap" v-bind:mapData="miramarData"></Drop>
  </div>
</template>

<script>
import miramarMap from '@/assets/miramar-map.jpg';
import miramarData from '../mapData/MiramarData';
import Drop from './Drop';

export default {
  name: 'Miramar',
  components: {
    Drop,
  },
  data() {
    return {
      miramarData,
      miramarMap,
    };
  },
};
</script>

<style scoped>

</style>
