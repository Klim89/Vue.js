<template>
    <section class="banner center">
        <div class="banner__block">
            <div class="banner__content">
                <h1 class="banner__title">Let Your Home Be&nbsp;Unique</h1>
                <p class="banner__text">There are many variations of&nbsp;the passages of
                    lorem Ipsum fromavailable, majority.</p>
                <a href="#" class="banner__button">
                    <div class="banner__text-button">
                        <p>Get Started</p>
                        <img src="../../assets/images/arrow_left_1.svg" alt="arrow">
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeBanner',
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

@mixin centerflex() {
    display: flex;
    justify-content: center;
    align-items: center;
}

.banner {
    &__block {
        height: 758px;
        background-image: url("../../assets/images/banner.jpg");
        background-repeat: no-repeat;
        border-radius: 75px;
    }

    &__content {
        padding: 208px 715px 0px 52px;
    }

    &__title {
        margin-bottom: 18px;
        @include font_style(65px, "DM Serif Display");
        color: $colorBlackDM;
    }

    &__text {
        margin-bottom: 21px;
        @include font_style(22px, $lineHeight: 150%);
        color: $colorGreyJost;
    }

    &__text-button {
        width: 220px;
        padding: 26px 0;
        background-color: $colorBlackDM;
        border-radius: 18px;
        @include centerflex();
        gap: 10px;
        flex-direction: row;
        flex-wrap: nowrap;

        & p {
            color: #fff;
            @include font_style(18px, $fontWeight: 600);
            letter-spacing: 0.36px;
        }
    }
}
</style>