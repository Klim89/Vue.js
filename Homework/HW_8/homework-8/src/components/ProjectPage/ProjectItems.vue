<template>
    <div class="project__items">
        <div class="project__item" v-for="(project, index) in projects" :key="project.id">
            <img class="project__item-img" :src="require(`../../assets/images/project/${project.image}`)" alt="image">
            <img v-if="index === 0 || index === 5" class="project__item-star"
                src="../../assets/images/project/star_3.png" alt="star">
            <div class="project__item-block">
                <div class="project__item-text">
                    <h2 class="project__item-title">{{ project.title }}</h2>
                    <p class="project__item-subtitle">{{ project.text }}</p>
                </div>
                <router-link to="/project-details">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectItems',
    props: ['projects'],
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

.project__items {
    margin-top: 61px;
    margin-bottom: 61px;
    column-count: 2;
}

.project__item {
    position: relative;
    padding-bottom: 27px;
    display: inline-block;

    &:nth-child(4),
    &:last-child {
        padding-bottom: 0px;
    }

    &-block {
        padding-top: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
    }

    &-title {
        @include font_style(25px, "DM Serif Display");
        color: $colorBlackDM;
        letter-spacing: 2%;
        text-align: left;
    }

    &-subtitle {
        @include font_style(22px, $lineHeight: 150%);
        letter-spacing: 1%;
        text-align: left;
        color: $colorGreyJost;
    }

    &-star {
        position: absolute;
        width: 36px;
        height: 34px;
        left: 549px;
        top: 0px;
    }
}
</style>