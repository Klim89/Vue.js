<template>
    <section class="info-block center">
        <div class="info-block__container">
            <div class="info-block__item">
                <h2 class="info-block__item-title">12</h2>
                <p class="info-block__item-text">Years Of&nbsp;Experiance</p>
            </div>
            <div class="info-block__item">
                <h2 class="info-block__item-title">85</h2>
                <p class="info-block__item-text">Success Project</p>
            </div>
            <div class="info-block__item">
                <h2 class="info-block__item-title">15</h2>
                <p class="info-block__item-text">Active Project</p>
            </div>
            <div class="info-block__item">
                <h2 class="info-block__item-title">95</h2>
                <p class="info-block__item-text">Happy CUstomers</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeInfo',
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

.info-block {
    padding-top: 151px;
    padding-bottom: 151px;
    background-color: rgb(244, 240, 236);

    &__container {
        padding-left: 59px;
        padding-right: 59px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: row;
    }

    &__item {
        text-align: center;
        display: flex;
        justify-content: center;
        gap: 16px;
        flex-direction: column;
        padding-right: 60px;
        border-right: 1px solid $colorBrownDM;
        height: 130px;

        &:last-child {
            border-right: none;
        }
    }

    &__item-title {
        color: $colorBrownDM;
        @include font_style(85px, "DM Serif Display");
        letter-spacing: 2%;
        text-align: center;
    }

    &__item-text {
        @include font_style(22px, $lineHeight: 150%);
        color: $colorGreyJost;
        text-align: left;
        letter-spacing: 1%;
    }
}
</style>