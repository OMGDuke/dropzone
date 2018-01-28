<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
  @import "~bulma/bulma.sass";
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

  #app {
    font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    height: 100%;
    background: url('./assets/topography.svg'), lightgray;
    background-size: 340px, auto;
    background-position: fixed;
  }
</style>
