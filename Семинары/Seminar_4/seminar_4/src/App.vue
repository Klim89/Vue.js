<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello Vue" />
    <CatGallery></CatGallery>
    <h1>Сортировка товаров по цене</h1>
    <button @click="sortByPrice(true)">Сортировать по увеличению цены</button>
    <button @click="sortByPrice(false)">Сортировать по уменьшению цены</button>
    <div>
      <ProductList v-for="product in sortedProducts" :key="product.id" :product="product"></ProductList>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import CatGallery from './components/CatGallery.vue';
import ProductList from './components/ProductList.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    CatGallery,
    ProductList,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Товар 1',
          price: 100
        },
        {
          id: 2,
          name: 'Товар 2',
          price: 50
        },
        {
          id: 3,
          name: 'Товар 3',
          price: 200
        },
      ]
    };
  },
  computed: {
    sortedProducts() {
      return this.products.slice().sort((a, b) => a.price + b.price);
    }
  },
  methods: {
    sortByPrice(ascending) {
      if (ascending) {
        this.products.sort((a, b) => a.price - b.price);
      } else {
        this.products.sort((a, b) => b.price - a.price);
      }
    }
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
