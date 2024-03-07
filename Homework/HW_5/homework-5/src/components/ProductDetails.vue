<template>
    <div class="product center">
        <div v-for="product in products" :key="product.id" class="product__details">
            <h1 class="product__title">{{ product.name }}</h1>
            <p class="product__price">Price: {{ formattedPrice(product) }}</p>
            <p v-if="product.available" class="product__availability">Available</p>
            <p v-else class="product__availability">Out of stock</p>
            <hr>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            products: [
                { id: 1, name: 'Product 1', price: 99.99, available: true },
                { id: 2, name: 'Product 2', price: 419.99, available: false },
                { id: 3, name: 'Product 3', price: 149.99, available: true },
                { id: 4, name: 'Product 4', price: 349.99, available: true },
                { id: 5, name: 'Product 5', price: 49.99, available: false },
                { id: 6, name: 'Product 6', price: 19.99, available: true },
                { id: 7, name: 'Product 7', price: 111.99, available: false },
            ]
        };
    },
    computed: {
        formattedPrice() {
            return function (product) {
                return '$' + product.price.toFixed(2);
            };
        }
    }
};
</script>
  

<style lang="scss" scoped>
$widthContent: 1200px;
$widthSite: 1920px;
$colorGreyJost: rgb(77, 80, 83);
$colorBlackDM: rgb(41, 47, 54);
$colorBrownDM: rgb(205, 162, 116);

@mixin font_style($fontSize, $fontFamily: "Jost", $lineHeight: 125%, $fontWeight: 400, $fontStyle: normal) {
    font-family: $fontFamily;
    font-size: $fontSize;
    font-style: $fontStyle;
    font-weight: $fontWeight;
    line-height: $lineHeight;
}

.product {
    margin-bottom: 40px;

    &__title {
        @include font_style(28px, "DM Serif Display");
        color: $colorBlackDM;
        letter-spacing: 0%;
        text-align: left;
    }

    &__details {
        max-width: 600px;
        margin: 0 auto;
        margin-top: 10px;
    }

    &__price {
        @include font_style(22px, $lineHeight: 150%);
        letter-spacing: 1%;
        text-align: left;
        color: $colorGreyJost;
    }

    &__availability {
        @include font_style(18px, $lineHeight: 150%);
        letter-spacing: 1%;
        text-align: left;
        color: $colorGreyJost;
        font-style: italic;
    }
}
</style>


