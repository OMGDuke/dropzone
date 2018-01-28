<template>
  <div class="about content container has-text-centered">
    <img class="logo" :src="logoPrimary" alt="">
    <h1>DROPZONE</h1>
    <h2>About</h2>
    <p>
      Dropzone is a random drop picker for PUBG and Fortnite. Simply pick the map you're
      playing on you'll see a drop location. If you're not happy with the choice,
      click the <strong>Pick Again</strong> Button.
    </p>

    <h3>Creator</h3>
    <p>
      Dropzone was created by <a href="http://www.twitter.com/omgduke"><strong>OMGDuke</strong></a>.
      If you have any critiques or suggestions please contact me on <a href="http://www.twitter.com/omgduke"><strong>twitter</strong></a> or via <a href="mailto:alex@omgduke.com?subject=Dropzone"><strong>email</strong></a>.
    </p>
  </div>
</template>

<script>
import logoPrimary from '@/assets/logo-primary.png';

export default {
  name: 'About',
  data() {
    return {
      logoPrimary,
    };
  },
};
</script>

<style lang="scss" scoped>
  .about {
    margin-top: 20px;
  }

  .logo {
    max-width: 300px;
  }
</style>
