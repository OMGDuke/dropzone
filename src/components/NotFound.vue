<template>
  <div class="has-text-centered not-found">
    <img class="not-found__image" :src="notFoundCircle" alt="">
    <h2 class="subtitle is-2">404: You're outside the circle!</h2>
    <router-link to="/">Let's get you back in the game...</router-link>
  </div>
</template>

<script>
import notFoundCircle from '@/assets/404.jpg';

export default {
  name: 'NotFound',
  data() {
    return {
      notFoundCircle,
    };
  },
};
</script>

<style lang="scss" scoped>
  .not-found {
    &__image {
      margin-top: 50px;
    }
  }
</style>
