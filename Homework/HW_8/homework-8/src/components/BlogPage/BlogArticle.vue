<template>
    <section class="blog center">
        <h2 class="blog__title blog__title_blog-page">Articles &amp;&nbsp;News</h2>
        <ArticleComp :count="6"></ArticleComp>
    </section>
</template>

<script>
import ArticleComp from './../ArticleComp.vue'

export default {
    name: 'BlogArticle',
    components: {
        ArticleComp
    },

    data() {
        return {
            articles: [
                {
                    id: 0,
                    image: "item_5.jpg",
                    imgText: "Kitchan Design",
                    itemTitle: "Let’s Get Solution For Building Construction Work",
                    itemData: "26 December,2022",
                },
                {
                    id: 1,
                    image: "item_6.jpg",
                    imgText: "Living Design",
                    itemTitle: "Low Cost Latest Invented Interior Designing Ideas.",
                    itemData: "22 December,2022",
                },
                {
                    id: 2,
                    image: "item_7.jpg",
                    imgText: "Interior Design",
                    itemTitle: "Best For Any Office & Business Interior Solution",
                    itemData: "25 December,2022",
                },
                {
                    id: 3,
                    image: "item_8.jpg",
                    imgText: "Kitchan Design",
                    itemTitle: "Let’s Get Solution For Building Construction Work",
                    itemData: "26 December,2022",
                },
                {
                    id: 4,
                    image: "item_9.jpg",
                    imgText: "Living Design",
                    itemTitle: "Low Cost Latest Invented Interior Designing Ideas.",
                    itemData: "22 December,2022",
                },
                {
                    id: 5,
                    image: "item_10.jpg",
                    imgText: "Interior Design",
                    itemTitle: "Best For Any Office & Business Interior Solution",
                    itemData: "25 December,2022",
                },
            ],
        };
    },
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

.blog {
    margin-top: 96px;
    margin-bottom: 96px;

    &__title {
        margin-bottom: 12px;
        @include font_style(50px, "DM Serif Display");
        color: $colorBlackDM;
        letter-spacing: 2%;
        text-align: center;

        &_blog-page {
            margin-bottom: 30px;
            margin-top: 150px;
            text-align: left;
        }
    }

    &__text {
        padding-left: calc(widthContent - 405.5px);
        padding-right: calc(widthContent - 405.5px);
        margin-bottom: 52px;
        @include font_style(22px, $lineHeight: 150%);
        color: $colorGreyJost;
        letter-spacing: 1%;
        text-align: center;
    }

    &__item-block {
        display: grid;
        grid-template-columns: repeat(3, 382px);
        gap: 27px;
    }

    &__item {
        border: 1px solid rgb(231, 231, 231);
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        border-radius: 62px;
        padding: 21px;

        &:hover {
            background: rgb(244, 240, 236);
        }
    }

    &__item-image {
        position: relative;

        & img {
            border-top-left-radius: 62px;
            border-top-right-radius: 62px;
            margin-bottom: 21px;
        }
    }

    &__img-text {
        position: absolute;
        left: 20px;
        top: 228px;
        border-radius: 8px 8px 8px 0px;
        background: rgb(255, 255, 255);
        padding: 4px 10px 8px 11px;
        @include font_style(16px, $lineHeight: 150%);
        color: $colorGreyJost;
        letter-spacing: 1%;
        text-align: left;
        text-transform: capitalize;
    }

    &__item-title {
        margin-bottom: 30px;
        color: #292f36;
        @include font_style(25px, "DM Serif Display");
        color: $colorBlackDM;
        letter-spacing: 2%;
        text-align: left;
    }

    &__text-down {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & svg circle:hover {
            fill: white;
        }
    }

    &__item-text {
        @include font_style(16px, $lineHeight: 150%);
        color: $colorGreyJost;
        letter-spacing: 1%;
        text-align: left;
        text-transform: capitalize;
    }
}</style>