<template>
    <header class="header center">
        <div class="header__logo">
            <a href="index.html"><img src="../assets/images/logo.jpg" alt="logo"></a>
            <p class="header__text-logo">Interno</p>
        </div>
        <div class="header__menu">
            <a class="header__link" href="#">Home</a>
            <a class="header__link" href="#">Project</a>
            <a class="header__link" href="#">Blog</a>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComp',
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

.header {
    margin-bottom: 57px;
    margin-top: 53px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    &__logo {
        @include font_style(40px, "DM Serif Display");
        color: $colorBlackDM;
        text-align: left;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    &__logo img {
        width: 34px;
        height: 34px;
    }

    &__menu {
        @include font_style(20px);
        text-align: center;
        display: flex;
        gap: 48px;
    }

    &__link {
        color: $colorBlackDM;
    }
}
</style>