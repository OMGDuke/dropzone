<template>
  <section class="">
          <!-- Header -->
      <section class="hero is-primary is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              DROPZONE
            </h1>
            <h2 class="subtitle">
              Random Drop Locations
            </h2>
          </div>
        </div>
      </section>


    <div class="section container">

      <!-- Maps -->
      <div class="columns has-text-centered">

        <!-- Erangel -->
        <div class="erangel column">
          <router-link to="/erangel" class="map__link">
            <figure class="image is-square">
              <img class="map__erangel" src="../assets/erangel-map.png" alt="">
            </figure>
          </router-link>
         <router-link to="/erangel" class="button is-primary">
            <h2>Erangel</h2>
          </router-link>
        </div>

        <!-- Miramar -->
        <div class="miramar column">
          <router-link to="/miramar" class="map__link">
            <figure class="image is-square">
              <img src="../assets/miramar-map.jpg" alt="">
            </figure>
          </router-link>
          <router-link to="/miramar" class="button is-primary">
            <h2>Miramar</h2>
          </router-link>
        </div>
      </div>
    </div>
  </section>
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
  @import "~bulma/bulma.sass";
  figure {
    margin-bottom: 10px;
  }

  .map {
    &__link {
      &:hover figure {
        box-shadow: 0 0 15px 0 $primary,
                inset 0 0 0 1px $primary,
                inset 0px 11px 8px -10px $primary,
                inset 0px -11px 8px -10px $primary;
      }
    }
  }
</style>
