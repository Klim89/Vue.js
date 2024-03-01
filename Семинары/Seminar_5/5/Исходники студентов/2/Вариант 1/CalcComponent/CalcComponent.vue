<template>
  <form>
    <h1>Mortgage Calculator</h1>
    <label for="loanAmount">Величина займа:</label>
    <input type="number" id="loanAmount" v-model="loanAmount">
    <br>
    <label for="interestRate">Процентная ставка:</label>
    <input type="number" id="interestRate" step="0.01" v-model="interestRate">
    <br>
    <label for="loanTerm">Срок кредита (количество месяцев):</label>
    <input type="number" id="loanTerm" v-model="loanTerm">

    <div>
      <h2>Каждый месяц:</h2>
      <p>{{ monthlyPayment }}</p>
    </div>

    <div>
      <h2>Всего к оплате:</h2>
      <p>{{ totalPayment }}</p>
    </div>
  </form>
</template>

<script>
export default {
  name: 'BasketComponent',
  data() {
    return {
      loanAmount: 0,
      interestRate: 0,
      loanTerm: 0,
    };
  },
  methods: {},
  computed: {
    monthlyPayment() {
      const rate = this.interestRate / 100 / 12;
      const term = this.loanTerm;
      const principal = this.loanAmount;
      const numerator = rate * Math.pow(1 + rate, term);
      const denominator = Math.pow(1 + rate, term) - 1;
      const payment = principal * (numerator / denominator);
      return payment.toFixed(2);
    },
    totalPayment() {
      const term = this.loanTerm;
      const payment = parseFloat(this.monthlyPayment);
      return term * payment;
    },
  }
}
</script>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
}

form, .authTrue {
  margin: 0 auto;
  padding: 15px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid grey;
  border-radius: 10px;
}

input, button {
  width: 100%;
  height: 30px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 6px;
}
</style>
