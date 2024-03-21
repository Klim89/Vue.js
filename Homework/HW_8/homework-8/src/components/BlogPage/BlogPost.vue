<template>
    <section class="post center">
        <h2 class="post__name">Latest Post</h2>
        <div class="post__container">
            <img src="../../assets/images/post-img.jpg" class="post__img" alt="foto">
            <div class="post__content">
                <h3 class="post__title">Low Cost Latest Invented Interior<br>Designing Ideas</h3>
                <p class="post__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu&nbsp;sem vitae turpis
                    dignissim maximus. posuere&nbsp;in. Contrary to&nbsp;popular belief.</p>
                <p class="post__text">Lorem Ipsum is&nbsp;not simply random text. It&nbsp;has roots in&nbsp;a&nbsp;piece
                    of
                    classica.</p>
                <div class="post__footer">
                    <p class="post__date">26&nbsp;December, 2022</p>
                    <router-link to="/blog-details">
                        <img src="../../assets/images/arrow_left_2.svg" alt="arrow">
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BlogPost',
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

.post {
    &__name {
        margin-top: 200px;
        margin-bottom: 27px;
        @include font_style(50px, "DM Serif Display");
        color: $colorBlackDM;
        letter-spacing: 2%;
        text-align: left;
    }

    &__container {
        box-sizing: border-box;
        border: 1px solid rgb(231, 231, 231);
        border-radius: 62px;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        display: flex;
        gap: 65px;
        padding: 22px;
        padding-right: 56px;
        align-items: center;
    }

    &__img {
        border-radius: 50px;
    }

    &__title {
        margin-bottom: 22px;
        @include font_style(25px, "DM Serif Display");
        color: $colorBlackDM;
        letter-spacing: 2%;
        text-align: left;
    }

    &__text {
        margin-bottom: 41px;
        @include font_style(22px, $lineHeight: 150%);
        color: $colorGreyJost;
        letter-spacing: 1%;
        text-align: left;
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
    }

    &__date {
        @include font_style(16px, $lineHeight: 150%);
        color: $colorGreyJost;
        letter-spacing: 1%;
        text-align: left;
        text-transform: capitalize;
    }
}
</style>