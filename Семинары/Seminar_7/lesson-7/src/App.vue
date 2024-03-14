<template>
  <div id="app">
    <AddCount></AddCount>
    <SeminarComp></SeminarComp>
    <CartComp></CartComp>
    <JsonPlaceholder></JsonPlaceholder>
  </div>
</template>

<script>
import AddCount from './components/AddCount.vue';
import SeminarComp from "@/components/SeminarComp.vue";
import CartComp from "@/components/CartComp.vue";
import JsonPlaceholder from '@/components/JsonPlaceholder.vue';
export default {
  name: 'App',
  components: {
    AddCount,
    SeminarComp,
    CartComp,
    JsonPlaceholder
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
