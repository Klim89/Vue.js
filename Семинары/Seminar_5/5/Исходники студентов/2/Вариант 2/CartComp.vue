<template>
    <div class="cart">
        <h2>Simple Cart Component</h2>
        <div v-for="(product, index) in products" :key="index" class="element">
            <div>
                <h4>{{ product.name }}</h4>
                <p>Цена: {{ product.price }}</p>
                <label for="quantity">Количество</label>
                <input id="quantity" type="number" min="1" v-model="product.quantity">
                <p>Сумма: {{ subtotal(index) }}</p>
            </div>
        </div>
        <div>
            <h3>Общий итог: {{ total }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartComp',

    data() {
        return {
            products: [
                { name: 'Товар 1', price: 100, quantity: 1 },
                { name: 'Товар 2', price: 200, quantity: 1 },
                { name: 'Товар 3', price: 300, quantity: 1 }
            ]
        };
    },

    computed: {
        total() {
            return this.products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
        }
    },
    methods: {
        subtotal(index) {
            const product = this.products[index];
            return product.price * product.quantity;
        }
    },
    
};
</script>

<style scoped>
.cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 100px;
}

.element {
    border: 1px solid black;
    width: 200px;
    padding: 10px;
}
</style>
