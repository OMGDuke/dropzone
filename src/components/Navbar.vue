<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <h1>DROPZONE</h1>
      </a>
      <div class="navbar-burger burger"
        v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div  class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">
          Home
        </router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Maps
          </a>
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
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span>
                <span>
                  Tweet
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      showNav: false,
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
