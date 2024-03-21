<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">AboutUs</router-link>
      <router-link to="/market">Market</router-link>
      <router-link to="/contacts">Contacts</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>

</script>
<style lang="scss">
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:deep {
  @font-face {
    font-family: 'pixels';
    src: url(./assets/PixeloidMono.ttf);
  }
}

nav {
  width: 100%;
  display: flex;


  gap: 30px;
  background-color: lightgreen;
  justify-content: space-evenly;

  a {
    font-size: 30px;
    padding: 20px;

    &:hover {

      border-radius: 5px;
      background-color: bisque;
    }

    color: green;
    text-decoration: none;
    font-family: 'Trebuchet MS',
    'Lucida Sans Unicode',
    'Lucida Grande',
    'Lucida Sans',
    Arial,
    sans-serif;
  }
}
</style>
