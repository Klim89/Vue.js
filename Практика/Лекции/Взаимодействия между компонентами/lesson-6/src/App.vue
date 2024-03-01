<template>
  <div id="app">
    <!-- <AddCount></AddCount> -->
    <PaymentsDisplay :items="paymentList"></PaymentsDisplay>
    <AddList @addNewPay="addNewPay"></AddList>
  </div>
</template>

<script>
// import AddCount from './components/AddCount.vue';
import AddList from './components/AddList.vue';
import PaymentsDisplay from './components/PaymentsDisplay.vue';



export default {
  name: 'App',
  components: {
    // AddCount,
    PaymentsDisplay,
    AddList
  },
  data() {
    return {
      paymentList: [],
    };
  },
  
  methods: {
    fetchData() {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169,
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360,
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532,
        },
      ]
    },
    addNewPay(data) {
      this.paymentList.push(data);
    }
  },
  created() {
    this.paymentList = this.fetchData();
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
