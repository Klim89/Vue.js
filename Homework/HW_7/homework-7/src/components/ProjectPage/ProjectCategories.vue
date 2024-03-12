<template>
    <div class="project__categories">
        <div class="project__categories-block">
            <div v-for="category in categoriesList" :key="category.id" :class="{ active: category.active }"
                class="project__categories-button" @click="activatedCategory(category)">{{ category.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCategories',

    data() {
        return {
            categoriesList: [
                { id: 1, name: 'Bathroom', active: false },
                { id: 2, name: 'Bed Room', active: true },
                { id: 3, name: 'Kitchen', active: false },
                { id: 4, name: 'Living Area', active: false }
            ]
        }
    },

    methods: {
        activatedCategory(data) {
            this.categoriesList.forEach(element => {
                element.active = false
            })
            this.categoriesList[data.id - 1].active = true
            this.$emit('activatedCategories', data)
            return this.categoriesList[data.id - 1].active
        }
    }
}
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

@mixin centerflex() {
    display: flex;
    justify-content: center;
    align-items: center;
}

.project__categories {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-block {
        border-radius: 18px;
        width: 880px;
        border: 1px solid $colorBrownDM;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 63px;
    }

    &-button {
        cursor: pointer;
        padding: 26px 66px;
        margin-left: -66px;
        margin-right: -66px;
        @include font_style(18px, $fontWeight: 600);
        color: $colorGreyJost;
        letter-spacing: 2%;
        text-align: center;

        &:hover {
            color: rgb(255, 255, 255);
            border-radius: 18px;
            background: $colorBrownDM;
        }
    }

    .active {
        color: rgb(255, 255, 255);
        border-radius: 18px;
        background: $colorBrownDM;
    }
}
</style>