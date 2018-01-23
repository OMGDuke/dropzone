<template>
  <div class="hello">
    <h1>Dropzone</h1>
    <div class="erangel">
      <a href="/erangel"><div class="map map__erangel"></div></a>
      <a class="link" href="/erangel">
        <h2>Erangel</h2>
      </a>
    </div>
    <div class="miramar">
      <div class="map map__miramar" src="../assets/miramar-map.jpg" alt=""></div>
      <h2><del>Miramar</del></h2>
      <h3>Coming soon</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  div {
    color: white;
  }

  .link {
    display: block;
    background-color: white;
    width: 200px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    text-decoration: none;
    color: rgb(21, 25, 32);
  }

  .map {
    width: 25vw;
    height: 25vw;
    background-size: cover;
    &__erangel {
      background: url("../assets/erangel-map.png");
    }
    &__miramar {
      background: url("../assets/miramar-map.jpg");
      background: rgba(39,62,84,0.82);
    }
  }
</style>
