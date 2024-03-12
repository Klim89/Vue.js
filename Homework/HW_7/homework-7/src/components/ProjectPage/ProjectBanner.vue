<template>
    <div>
        <section class="banner-blog center">
            <div class="banner-blog__intro">
                <h1 class="banner-blog__title">Our&nbsp;Project</h1>
                <p class="banner-blog__text">Home&nbsp;/ Project</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ProjectBanner',
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

.banner-blog {
    background-image: url("../../assets/images/banner_project.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    height: 356px;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    &__intro {
        text-align: center;
        background: rgb(255, 255, 255);
        padding: 41px 78px 41px 78px;
        border-radius: 37px 37px 0px 0px;
    }

    &__title {
        @include font_style(50px, "DM Serif Display");
        color: $colorBlackDM;
        letter-spacing: 0%;
        text-align: left;
    }

    &__text {
        @include font_style(22px, $lineHeight: 150%);
        color: $colorGreyJost;
        letter-spacing: 1%;
    }
}
</style>