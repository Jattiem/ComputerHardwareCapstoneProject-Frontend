<template>
  <router-view/>
  <Footer></Footer>
</template>

<script>
import Footer from './components/Footer.vue';
export default {
  components: {
    Footer
}
}
</script>

<style>
   #app {   
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
</style>