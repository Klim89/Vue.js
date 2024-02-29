<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style lang="scss">
$widthContent: 1200px;

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.center {
  padding-left: calc(50% - $widthContent / 2);
  padding-right: calc(50% - $widthContent / 2);
}
</style>
