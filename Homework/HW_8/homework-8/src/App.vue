<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
