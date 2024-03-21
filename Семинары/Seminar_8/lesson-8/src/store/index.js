import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    PRODUCTS: (state) => {
      return state.products;
    },
  },
  mutations: {
    SET_PRODUCTS: (state, payload) => {
      state.products = payload;
    },
  },
  actions: {
    GET_PRODUCTS: async (context, payload) => {
      await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${payload}`)
        .then((response) => response.json())
        .then((data) => context.commit('SET_PRODUCTS', data));
    },
  },
  modules: {},
});
