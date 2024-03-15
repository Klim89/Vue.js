<template>
    <div class="market">
      <img src="../assets/market/zelda-cdi-salesman.gif" alt="" />
      <div class="pages">
    <button @click="newProducts" class="pages__button">1</button>
    <button @click="newProducts" class="pages__button">2</button>
    <button @click="newProducts" class="pages__button">3</button>
  </div>
      <div class="wraper" v-if="PRODUCTS">
    <ProductCard  v-for="product,index in PRODUCTS.slice(0,9)" :product="product" :key="index"  />
  </div>
  
  </div>
  </template>
  
  <script>
import ProductCard from '@/components/ProductCard.vue';

  export default {
    name: 'MarketView',
    components: {
      ProductCard
    },
    data(){
      return{
        page:1
      }
    },
    methods:{
      newProducts(e){
        this.$store.dispatch('GET_PRODUCTS',e.target.textContent)
      },
      
    },
    mounted(){

      this.$store.dispatch('GET_PRODUCTS',this.page);
    },
    computed:{

    PRODUCTS(){
      return this.$store.getters.PRODUCTS
    }
    }
  }
  </script>
  <style lang="scss" scoped>
  .market{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-inline: auto;
  }
  .wraper{
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    width: 720px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 45px;
  }
  .pages{
  margin-top: 25px;
  display: flex;
  gap: 15px;
    &__button{
      &:hover{
        background-color: darkslategrey;
        color: white;
      }
      cursor: pointer;
     border-radius: 50%;
     width: 25px;
     height: 25px;
    }
  }
  </style>