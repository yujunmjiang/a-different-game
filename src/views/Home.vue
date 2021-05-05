<template>
  <div class="home">
    <img alt="Project Logo" src="../assets/logo.png" width="220" height="230" style="margin: 5em 0">
    <!-- <HelloWorld msg="A Different Game"/> -->
    <h1>A Different Game</h1>
    <p>HOW COVID-19 HAS CHANGED THE VIDEO GAME INDUSTRY.</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @font-face {
  font-family: 'Press Start 2P', cursive;
  src: url('/assets/fonts/PressStart2P-Regular.tff') format('truetype');
} */

h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  font-weight: 600;
  color: black;
  margin: 40px 0 0;
}
p{
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  font-weight: 300;
  color: black;
  text-align: center;
  line-height: 1.5;
  margin-left: 25%;
  margin-right: 25%;
}
</style>

