<template>
    <div class="cont">
        <h2>Simple Mortgage Calculator Component</h2>
        <label for="amount">Сумма</label>
        <input type="number" id="amount" v-model="amount">
        <label for="percent">Процентная ставка</label>
        <input type="number" id="percent" v-model="percentRate">
        <label for="term">Срок (в месяцах)</label>
        <input type="number" id="term" v-model="term">
        <button @click="calculateLoanPayments">Рассчитать график</button>
        <div v-if="payments.length > 0">
            <h3>График платежей</h3>
            <p>Всего платежей: {{ totalAmount.toFixed(2) }}</p>
            <p>Переплата: {{ overpay.toFixed(2) }}</p>
        </div>

        <table class="table">
            <tr v-if="payments.length > 0">
                <th>№</th>
                <th>Платеж</th>
                <th>Основной долг</th>
                <th>Проценты</th>
                <th>Остаток</th>
            </tr>
            <tr v-for="(payment, index) in payments" :key="index">
                <td>{{ payment.idx }}</td>
                <td>{{ payment.payment }}</td>
                <td>{{ payment.principal }}</td>
                <td>{{ payment.interest }}</td>
                <td>{{ payment.remaining }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'MortgageComp',

    data() {
        return {
            amount: '',
            percentRate: '',
            term: '',
            payments: [],
            totalAmount: 0,
            overpay: 0
        };
    },

    methods: {
        calculateLoanPayments() {
            const amount = parseFloat(this.amount);
            const percentRate = parseFloat(this.percentRate);
            const months = parseInt(this.term);

            let idx = 1;
            const monthlyInterestRate = percentRate / 100 / 12;
            const monthlyPayment = amount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -months));

            let remainingAmount = amount;

            for (let i = 0; i < months; i++) {
                const interestPayment = remainingAmount * monthlyInterestRate;
                const principalPayment = monthlyPayment - interestPayment;
                remainingAmount -= principalPayment;
                this.totalAmount += monthlyPayment;
                this.payments.push({
                    idx: idx++,
                    payment: monthlyPayment.toFixed(2),
                    principal: principalPayment.toFixed(2),
                    interest: interestPayment.toFixed(2),
                    remaining: remainingAmount.toFixed(2)
                });
            }

            this.overpay = this.totalAmount - this.amount;
        },

    }
}
</script>

<style scoped>
label,
button {
    margin-top: 10px;
}

.cont {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

table {
    border: 1px solid black;
    border-collapse: collapse;
}

td,
th {
    border: 1px solid black;
    padding: 5px;
}
</style>
