<template>
    <div class="product">
        <div class="img-wraper">
            <img :src="'./products/' + 0 + '.png'" style="width: 100px;">
        </div>
        <p class="product__name">{{ product.title }}</p>
        <p class="product__description">{{ product.body }}</p>
        <p class="product__price">{{ (3.14 * new Date().getTime() / 10 ** 12).toFixed(2) }} <img
                src="@/assets/market/rupie.png" style="width: 16px;"></p>
    </div>
</template>
<script>

export default {
    name: 'ProductDetails',
    data() {
        return {
            product: {}

        }
    },
    components: {

    },
    methods: {
        async getPost() {
            await fetch(`
            https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`).then(responce => responce.json()).then(data => this.product = data)
            console.log(this.product)
        }
    },
    mounted() {
        this.getPost()
    }
}

</script>
<style lang="scss" scoped>
.product {
    &:hover {
        cursor: pointer;

        .img-wraper {
            img {
                transform: scale(1.1);
                transition: 1s ease transform;

            }
        }
    }

    width: 100%;
    padding: 5px;
    font-family: 'pixels';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background-color: gray;

    .img-wraper {

        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {

            height: auto;
        }
    }

    &__name {
        margin-top: 30px;
        width: 600px;
        font-size: 20px;
        text-align: center;
    }

    &__description {
        width: 800px;
        font-style: oblique;
        text-align: center;
        color: lightgrey;
    }

    &__price {
        display: flex;
        align-items: center;
    }
}
</style>
