<template>
    <div>
        <h3>{{ product.name }}</h3>
        <p>Цена: {{ product.price }}</p>
    </div>
</template>

<script>
export default {
    name: 'ProductList',
    props: ['product'],
};
</script>

<style lang="scss" scoped></style>