<!-- Разработать интерфейс корзины товаров, в котором пользователь
может изменять количество товаров в корзине и видеть общую сумму
покупки. Каждый товар представлен в виде блока, содержащего поле
ввода для изменения количества товара и отображение его цены. При
изменении количества товаров в поле ввода, необходимо
автоматически пересчитывать стоимость каждого товара и обновлять
общую сумму покупки. -->



<template>
    <div>
        <div v-for="(item, index) in cartItems" :key="index">
            <input type="number" v-model="item.quantity" @change="updateTotal" />
            <p>Price: {{ item.price }}</p>
            <p>Subtotal: {{ item.quantity * item.price }}</p>
        </div>
        <div>
            Total: {{ total }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartComp',

    data() {
        return {
            cartItems: [
                { quantity: 2, price: 10 },
                { quantity: 2, price: 15 }
            ],
            total: 0
        };
    },
    methods: {
        updateTotal() {
            this.total = this.cartItems.reduce((acc, item) => {
                return acc + item.quantity * item.price;
            }, 0);
        }
    },
    mounted() {
        this.updateTotal();
    }
}
</script>

<style scoped>
* {
    margin: 0;
    box-sizing: border-box;
}

form,
.authTrue {
    margin: 0 auto;
    padding: 15px;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid grey;
    border-radius: 10px;
}

input,
button {
    width: 100%;
    height: 30px;
    font-size: 20px;
    border: 1px solid;
    border-radius: 6px;
}
</style>


