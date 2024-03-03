<template>
    <div>
        Сумма всех платежей {{ getFV }}
        <div v-for="item in items" :key="item.id">
            {{ item }}
            <div class="content">
                <div class="content__item">{{ item.date }}</div>
                <div class="content__item">{{ item.category }}</div>
                <div class="content__item">{{ item.value }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentsDisplay',
    props: {
        items: {
            type: Array,
            default() {
                return [];
            },
        },
    },

    data() {
        return {

        };
    },

    computed: {
        getFV() {
            return this.$store.getters.getFullPayment;
        }
    }
};
</script>

<style lang="scss" scoped>
.content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.content__item {
    padding: 8px 16px;
    border: 1px solid #ccc;
}
</style>
