<template>
  <div id="app">
    <AuthComp></AuthComp>
    <CartComp></CartComp>
    <CalcComp></CalcComp>
  </div>
</template>
<script>
import AuthComp from './components/AuthComp.vue';
import CalcComp from './components/CalcComp.vue';
import CartComp from './components/CartComp.vue';


export default {
  name: 'App',
  components: {
    AuthComp,
    CartComp,
    CalcComp
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
