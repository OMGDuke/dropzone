<template>
  <section class="">

    <div class="section container">
      <h1 class="page-title title is-1 has-text-centered">DROPZONE</h1>
      <h2 class="subtitle is-5 has-text-centered">Choose your map</h2>

      <!-- Maps -->
      <div class="columns is-multiline has-text-centered">

        <template v-for="map in availableMaps">
          <div class="column is-one-third" :key="map.name">
            <router-link :to="{ path: map.link }" class="map__link">
              <figure class="image is-square">
                <img :src=map.image :alt="map.name">
              </figure>
            </router-link>
            <router-link :to="{ path: map.link }" class="button is-primary">
              <h2>{{map.name}}</h2>
            </router-link>
          </div>
        </template>

      </div>
    </div>
  </section>
</template>

<script>
import availableMaps from '../mapData/AvailableMaps';

export default {
  name: 'Home',
  data() {
    return {
      availableMaps,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "~bulma/bulma.sass";

  .page-title {
    color: $primary;
  }

  figure {
    margin-bottom: 10px;
  }

  .map {
    &__link {
      figure {
        border: 3px $primary solid;
      }
      &:hover figure {
        border: 3px $primary solid;
        box-shadow: 0 0 15px 0 $primary,
                inset 0 0 0 1px $primary,
                inset 0px 11px 8px -10px $primary,
                inset 0px -11px 8px -10px $primary;
      }
    }
  }
</style>
