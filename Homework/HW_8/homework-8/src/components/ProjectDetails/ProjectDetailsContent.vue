<template>
    <div class="project-details__content center">
        <h2 class="project-details__title">Minimal Look Bedrooms</h2>
        <p class="project-details__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae
            turpis
            dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida
            dignissim.
            Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum
            commodo.
            <br><br>
            In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis
            quis
            nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis
            elit, in
            viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
        </p>
        <ProjectDetailsCarousel></ProjectDetailsCarousel>
    </div>
</template>

<script>
import ProjectDetailsCarousel from './ProjectDetailsCarousel.vue'
export default {
    components: { ProjectDetailsCarousel },
    name: 'ProjectDetailsContent'
}
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

.project-details {
    &__content {
        margin-top: 200px;
        margin-bottom: 200px;
    }

    &__title {
        text-align: left;
        @include font_style(50px, "DM Serif Display");
        color: $colorBlackDM;
        letter-spacing: 2%;
        text-align: left;
        padding-left: calc(($widthContent - 670px) / 2);
        padding-right: calc(($widthContent - 670px) / 2)
    }

    &__text {
        margin-top: 11px;
        margin-bottom: 100px;
        color: $colorGreyJost;
        text-align: justify;
        @include font_style(22px, $lineHeight: 150%);
        letter-spacing: 1%;
        padding-left: calc(($widthContent - 670px) / 2);
        padding-right: calc(($widthContent - 670px) / 2)
    }
}
</style>