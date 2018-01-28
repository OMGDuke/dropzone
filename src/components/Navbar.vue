<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img class="map__image image" :src="logoWhite" alt="">&nbsp;
        <h1>DROPZONE</h1>
      </router-link>
      <div class="navbar-burger burger"
        v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div  class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item"
          v-bind:class="{ 'is-active' : $route.path === '/' }">
          Home
        </router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <span class="navbar-link">
            Maps
          </span>
          <div class="navbar-dropdown is-boxed">
            <router-link class="navbar-item" to="/erangel"
              v-bind:class="{ 'is-active' : $route.path === '/erangel' }">
              Erangel
            </router-link>
            <router-link class="navbar-item" to="/miramar"
              v-bind:class="{ 'is-active' : $route.path === '/miramar' }">
              Miramar
            </router-link>
            <hr class="navbar-divider">
            <router-link class="navbar-item" to="/fortnite"
              v-bind:class="{ 'is-active' : $route.path === '/fortnite' }">
              Fortnite
            </router-link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <router-link to="/about" class="navbar-item"
          v-bind:class="{ 'is-active' : $route.path === '/about' }">
          About
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import logoWhite from '@/assets/logo-white.png';

export default {
  name: 'Navbar',
  data() {
    return {
      showNav: false,
      logoWhite,
    };
  },
};
</script>

<style lang="scss">
  @import "~bulma/bulma.sass";

  .page {
    &__heading {
      > a {
        color: $white;
        text-decoration: none;
        &:hover {
          color: $dark;
        }
      }
    }
  }
</style>
