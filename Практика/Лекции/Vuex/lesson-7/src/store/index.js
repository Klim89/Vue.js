import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentList: [],
  },
  mutations: {
    SET_PAYMENT(state, payments) {
      state.paymentList = payments;
    },
    ADD_PAYMENT(state, pay) {
      state.paymentList.push(pay);
    },
  },
  actions: {
    fetchData({ commit }) {
      setTimeout(() => {
        const paymentList = [
          {
            date: "28.03.2020",
            category: "Food",
            value: 169,
          },
          {
            date: "24.03.2020",
            category: "Transport",
            value: 360,
          },
          {
            date: "24.03.2020",
            category: "Food",
            value: 532,
          },
        ];
        commit("SET_PAYMENT", paymentList);
      }, 1000);
    },
  },
  getters: {
    getPayment: (state) => state.paymentList,
    getFullPayment: (state) => {
      return state.paymentList.reduce((a, b) => a + b.value, 0);
    },
  },
});
