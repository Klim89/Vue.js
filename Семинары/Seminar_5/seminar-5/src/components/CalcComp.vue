<!-- https://www.cbr-xml-daily.ru/daily_json.js -->

<!-- Кредитный калькулятор -->

<template>
    <div id="app">
        <h1>Mortgage Calculator</h1>
        <form action="#">
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
                <p>{{ monthlyPayment }} ({{ (monthlyPayment / dollar).toFixed(2) }} $)</p>
            </div>

            <div>
                <h2>Всего к оплате:</h2>
                <p>{{ totalPayment }} ({{ (totalPayment / dollar).toFixed(2) }} $)</p>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CalcComp',

    data() {
        return {
            loanAmount: 0,
            interestRate: 0,
            loanTerm: 0,
            dollar: 0,
        };
    },
    computed: {
        monthlyPayment: function () {
            const rate = this.interestRate / 100 / 12;
            const term = this.loanTerm;
            const principal = this.loanAmount;
            const numerator = rate * Math.pow(1 + rate, term);
            const denominator = Math.pow(1 + rate, term) - 1;
            const payment = principal * (numerator / denominator);
            return payment.toFixed(2);
        },
        totalPayment: function () {
            const term = this.loanTerm;
            const payment = parseFloat(this.monthlyPayment);
            return term * payment;
        }
    },

    methods: {
    },
    mounted() {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => response.json())
            .then(data => {
                this.dollar = data.Valute.USD.Value;
            })
    }
};
</script>

<style scoped>
* {
    margin: 0;
    box-sizing: border-box;
}

form {
    margin: 0 auto;
    padding: 15px;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid grey;
    border-radius: 10px;
}

input {
    width: 100%;
    height: 30px;
    font-size: 20px;
    border: 1px solid;
    border-radius: 6px;
}
</style>
