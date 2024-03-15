<template>
    <div>
        <HeaderComp />
        <div class="notfound">
            <div class="notfound__content">
                <h1 class="notfound__title">404</h1>
                <p class="notfound__text">We are sorry, but the page you requested was not found</p>
                <router-link class="notfound__button" to="/">
                    <div class="notfound__button-text">
                        <p>Back To Home</p>
                        <img src="../assets/images/arrow_left_1.svg" alt="row_left">
                    </div>
                </router-link>
            </div>
            <img class="notfound__img" src="../assets/images/404.jpg" alt="404">
        </div>
    </div>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue'
export default {
    components: { HeaderComp },
    name: 'NotFoundPage'
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

.notfound {
    padding-left: calc(50% - $widthContent / 2);
    display: flex;
    gap: 81px;
    align-items: center;

    &__title {
        color: $colorBrownDM;
        @include font_style(250px, "DM Serif Display");
        font-size: 250px;
        letter-spacing: 0%;
        text-align: left;
    }

    &__text {
        color: $colorBlackDM;
        @include font_style(35px, "DM Serif Display", $lineHeight: 150%);
        text-align: left;
        margin-top: 15px;
        margin-bottom: 23px;
    }

    &__img {
        border-end-start-radius: 353px;
    }

    &__button-text {
        width: 253px;
        padding: 26px 0;
        background-color: $colorBlackDM;
        border-radius: 18px;
        display: flex;
        gap: 10px;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;

        & p {
            color: rgb(255, 255, 255);
            font-family: Jost;
            font-size: 18px;
            font-weight: 600;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: center;
        }
    }
}
</style>