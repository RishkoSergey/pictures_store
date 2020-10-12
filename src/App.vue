<template>
  <div id="app">
    <Header/>
    <Products />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Products from './components/Products.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Products,
    Footer
  },
  computed: mapMutations(['getInfo']),
  mounted() {
    this.getInfo();
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Merriweather');
#app {
  font-family: 'Merriweather', sans-serif;
  color: #343030;
  background-color: #f6f3f3;
  min-height: 100vh;
  width: 100%;
}
.container {
  width: 1216px;
  margin: 0 auto;
  height: 100%;
}
</style>
