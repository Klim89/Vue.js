<template>
    <section class="blog center">
        <div class="pagination">
            <div class="pagination__container">
                <a href="#" class="pagination__number">
                    <p class="pagination__text">01</p>
                </a>
                <a href="#" class="pagination__number">
                    <p class="pagination__text">02</p>
                </a>
                <a href="#" class="pagination__number">
                    <p class="pagination__text">03</p>
                </a>
                <a href="#" class="pagination__svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BlogPagination',
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

.pagination {
    margin-top: 51px;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;

    &__container {
        display: flex;
        gap: 20px;
    }

    &__number {
        @include centerflex();
        flex-wrap: nowrap;
        box-sizing: border-box;
        border: 1px solid rgb(205, 162, 116);
        width: 52px;
        height: 52px;
        border-radius: 52px;

        &:hover {
            background: rgb(244, 240, 236);
            border: none;
            width: 54px;
            height: 54px;
        }
    }

    &__text {
        @include font_style(16px, $lineHeight: 150%, $fontWeight: 500);
        color: $colorGreyJost;
        color: #292f36;
        font-weight: 500;
        letter-spacing: 0%;
        text-align: left;
        text-transform: capitalize;
    }

    &__svg {
        @include centerflex();
    }

    & svg circle:hover {
        fill: rgb(244, 240, 236);
    }
}
</style>