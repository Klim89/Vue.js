<template>
    <section class="banner-blog banner-blog_details center">
    </section>
</template>

<script>
export default {
    name: 'BlogDetailsBanner',
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

.banner-blog_details {
background-image: url("../../assets/images/blog-details-banner.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  height: 356px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
</style>