<template>
    <section class="project center">
        <h2 class="project__title">Follow Our Projects</h2>
        <p class="project__text">It&nbsp;is&nbsp;a&nbsp;long established fact that a&nbsp;reader will be&nbsp;distracted
            by&nbsp;the of&nbsp;readable content
            of&nbsp;page lookings at&nbsp;its layouts points.</p>
        <div class="project__item-block">
            <div class="project__item">
                <img src="../../assets/images/item_1.jpg" class="project__item project__item_img-1" alt="foto">
                <div class="project__item-content">
                    <div class="project__text-block">
                        <h2 class="project__item-title">Modern Kitchan</h2>
                        <p class="project__item-text">Decor&nbsp;/ Artchitecture</p>
                    </div>
                    <img src="../../assets/images/arrow_left_2.svg" alt="arrow">
                </div>
            </div>
            <div class="project__item">
                <img src="../../assets/images/item_2.jpg" class="project__item project__item_img-2" alt="foto">
                <div class="project__item-content">
                    <div class="project__text-block">
                        <h2 class="project__item-title">Modern Kitchan</h2>
                        <p class="project__item-text">Decor&nbsp;/ Artchitecture</p>
                    </div>
                    <img src="../../assets/images/arrow_left_2.svg" alt="arrow">
                </div>
            </div>
            <div class="project__item">
                <img src="../../assets/images/item_3.jpg" class="project__item project__item_img-3" alt="foto">
                <div class="project__item-content">
                    <div class="project__text-block">
                        <h2 class="project__item-title">Modern Kitchan</h2>
                        <p class="project__item-text">Decor&nbsp;/ Artchitecture</p>
                    </div>
                    <img src="../../assets/images/arrow_left_2.svg" alt="arrow">
                </div>
            </div>
            <div class="project__item">
                <img src="../../assets/images/item_4.jpg" class="project__item project__item_img-4" alt="foto">
                <div class="project__item-content">
                    <div class="project__text-block">
                        <h2 class="project__item-title">Modern Kitchan</h2>
                        <p class="project__item-text">Decor&nbsp;/ Artchitecture</p>
                    </div>
                    <img src="../../assets/images/arrow_left_2.svg" alt="arrow">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeProject',
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
.project {
    margin-top: 96px;
    margin-bottom: 96px;

    &__title {
        margin-bottom: 8px;
        @include font_style(50px, "DM Serif Display");
        color: $colorBlackDM;
        text-align: center;
        letter-spacing: 2%;
    }

    &__text {
        @include font_style(22px, $lineHeight: 150%);
        color: $colorGreyJost;
        text-align: center;
        letter-spacing: 1%;
        padding-left: calc(50% - 368.5px);
        padding-right: calc(50% - 368.5px);
    }

    &__item-block {
        margin-top: 93px;
        display: grid;
        column-gap: 100px;
        row-gap: 56px;
        grid-template-columns: repeat(2, 550px);
    }

    &__item_img-1 {
        border-top-right-radius: 75px;
    }

    &__item_img-2 {
        border-top-left-radius: 75px;
    }

    &__item_img-3 {
        border-bottom-right-radius: 75px;
    }

    &__item_img-4 {
        border-bottom-left-radius: 75px;
    }

    &__item-content {
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__item-title {
        @include font_style(25px, "DM Serif Display");
        color: $colorBlackDM;
        text-align: left;
        letter-spacing: 2%;
    }

    &__item-text {
        @include font_style(22px, $lineHeight: 150%);
        color: $colorGreyJost;
        text-align: left;
        letter-spacing: 1%;
    }
}
</style>