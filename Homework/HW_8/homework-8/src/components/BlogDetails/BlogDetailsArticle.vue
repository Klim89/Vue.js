<template>
    <section class="blog__details-block center">
        <div class="blog-details__container">
            <div class="blog-details">
                <div class="article" v-for="article in filterArticle" :key="article.id">
                    <h2 class="article__title">{{ article.title }}</h2>
                    <img class="article__img" :src="require('../../assets/images/' + article.img)" :alt="foto">
                    <div class="article__info">
                        <p class="article__info-data">26 December,2022</p>
                        <nav class="article__info-link">
                            <a href="#" class="article__info-bredcrumbs">Interior</a>
                            <a href="#" class="article__info-bredcrumbs">Home</a>
                            <a href="#" class="article__info-bredcrumbs">Decore</a>
                        </nav>
                    </div>
                    <p class="article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
                        in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
                        the
                        majority have suffered alteration in some form, by injecthumour, or randomised words which don't
                        look
                        even slightly believable.</p>
                    <br>
                    <p class="article__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                        the
                        Internet tend to repeat predefined chunks as necessary.</p>
                    <div class="info-blok">
                        <p class="info-blok__quotation-marks">&#8221;</p>
                        <p class="info-blok__text">The details are not the details. They make the design.</p>
                    </div>
                    <h2 class="article__title">Design sprints are great</h2>
                    <p class="article__text"> Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere
                        in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
                        the
                        majority have suffered. </p>
                    <div class="article__list">
                        <div class="article__list-num">
                            <p class="article__list-num-text">1</p>
                            <p class="article__list-item">Contrary to popular belief.There are many ariations of passages of
                                Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                        <div class="article__list-num">
                            <p class="article__list-num-text">2</p>
                            <p class="article__list-item">Contrary to popular belief.There are many ariations of passages of
                                Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                        <div class="article__list-num">
                            <p class="article__list-num-text">3</p>
                            <p class="article__list-item">Contrary to popular belief.There are many ariations of passages of
                                Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                    </div>
                    <img class="article__img" src="../../assets/images/block-details_2.jpg" alt="foto">
                    <p class="article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
                        in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
                        the
                        majority have suffered.</p>
                </div>
            </div>
            <div class="tags">
                <div class="tags__buttons-block">
                    <h2 class="tags__title">Tags</h2>
                    <div class="tags__buttons">
                        <div class="tags__button">
                            <button v-for="(tag, index) in buttonsBlock" @click="filterClick(tag)"
                                class="tags__buttons-item" :key="index">{{ tag
                                }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BlogDetailsArticle',

    data() {
        return {
            findElement: "",
            blogArticle: [
                {
                    id: 0,
                    title: "Let’s Get Solution for Building Construction Work",
                    img: "block-details_1.jpg",
                    tag: "Kitchen",
                },
                {
                    id: 1,
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    img: "block-details_2.jpg",
                    tag: "Bedroom",
                },
                {
                    id: 2,
                    title: "Best For Any Office & Business Interior Solution",
                    img: "block-details_1.jpg",
                    tag: "Building",
                },
                {
                    id: 3,
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    img: "block-details_2.jpg",
                    tag: "Architecture",
                },
                {
                    id: 4,
                    title: "Let’s Get Solution for Building Construction Work",
                    img: "block-details_1.jpg",
                    tag: "Kitchen Planning",
                },
            ],
            buttonsBlock: [
                "Kitchen",
                "Bedroom",
                "Building",
                "Architecture",
                "Kitchen Planning",
                "Bedroom",
            ],
        };
    },

    methods: {
        filterClick(item) {
            this.findElement = item;
        },
    },
    computed: {
        filterArticle() {
            if (this.findElement) {
                return this.blogArticle.filter((el) =>
                    el.tag.includes(this.findElement)
                );
            } else {
                return this.blogArticle;
            }
        },
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

.blog-details__container {
    margin-top: 200px;
    display: flex;
    gap: 52px;
}

.blog-details {
    width: 800px;
}

.article {
    margin-bottom: 96px;

    &__title {
        @include font_style(50px, "DM Serif Display");
        color: $colorBlackDM;
        letter-spacing: 2%;
        text-align: left;
        margin-bottom: 20px;
    }

    &__img {
        margin-top: 21px;
        margin-bottom: 35px;
        border-radius: 50px;
    }

    &__info {
        @include font_style(16px, $lineHeight: 150%);
        color: $colorGreyJost;
        letter-spacing: 1%;
        text-align: left;
        text-transform: capitalize;
        margin-top: 11px;
        margin-bottom: 46px;
        display: flex;
        gap: 409px;

        &-bredcrumbs {
            display: inline-block;
            @include font_style(16px, $lineHeight: 150%);
            color: $colorGreyJost;
            text-align: left;
            text-transform: capitalize;

            &:not(:last-child)::after {
                content: "/";
                padding-left: 5px;
            }
        }
    }

    &__text {
        @include font_style(22px, $lineHeight: 150%);
        color: $colorGreyJost;
        letter-spacing: 1%;
        text-align: left;
    }

    &__list {
        margin-top: 24px;
        margin-bottom: 23px;
        display: flex;
        width: 732.39px;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
        list-style-position: 10px 0;

        &-num {
            display: flex;
            align-items: flex-start;
            gap: 14px;

            &-text {
                color: $colorBrownDM;
                @include font_style(20px, "DM Serif Display");
                line-height: 125%;
                letter-spacing: 0.4px;
            }
        }

        &-item {
            @include font_style(22px, $lineHeight: 150%);
            color: $colorGreyJost;
            letter-spacing: 1%;
            text-align: left;
        }
    }
}

.tags {
    &__buttons-block {
        width: 345px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    &__title {
        @include font_style(25px, "DM Serif Display");
        color: $colorBlackDM;
        letter-spacing: 2%;
        text-align: left;
    }

    &__buttons {
        &-item {
            cursor: pointer;
            background: rgb(244, 240, 236);
            padding: 9px 30px 9px 30px;
            border-radius: 10px;
            border: none;
            @include font_style(18px);
            color: $colorGreyJost;
            letter-spacing: 2%;
            text-align: center;

            &:hover {
                background: rgb(41, 47, 54);
                color: rgb(255, 255, 255);
            }

            &:not(:last-child, :nth-last-child(2)) {
                margin-bottom: 11px;
            }

            &:not(:nth-child(2n)) {
                margin-right: 10px;
            }
        }
    }
}

.info-blok {
    margin-bottom: 27px;
    margin-top: 35px;
    padding: 53px 227px;
    background: rgb(244, 240, 236);
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &__quotation-marks {
        width: 106px;
        height: 133px;
        flex-shrink: 0;
        color: $colorBrownDM;
        @include font_style(200px, "DM Serif Display", $fontStyle: italic);
        letter-spacing: 2%;
        text-align: center;
    }

    &__text {
        color: $colorBrownDM;
        @include font_style(25px, "DM Serif Display", $fontStyle: italic);
        letter-spacing: 2%;
        text-align: center;
    }
}
</style>