import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    cart: [],  
    // Массив товаров в корзине
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.cart.push(item); // Добавление товара в корзину
    },
    INCREMENT(state) {
      state.count++;
    },
    DECREMENT(state) {
      state.count--;
    },
  },
  getters: {
    cartItems: (state) => {
      return state.cart; // Геттер, возвращающий все товары в корзине
    },
    totalItems: (state) => {
      return state.cart.length; // Геттер, возвращающий общее количество товаров в корзине
    },
    totalPrice: (state) => {
      return state.cart.reduce((total, item) => total + item.price, 0); // Геттер, возвращающий общую стоимость товаров в корзине
    },
  },
  actions: {
    addItemToCart(context, item) {
      context.commit("ADD_ITEM", item); // Действие для добавления товара в корзину
    },
  },
});

export default store;
