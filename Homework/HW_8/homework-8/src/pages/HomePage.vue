<template>
    <div id="app">
        <HeaderComp></HeaderComp>
        <HomeBanner></HomeBanner>
        <HomeProject></HomeProject>
        <HomeInfo></HomeInfo>
        <HomeArticle></HomeArticle>
        <FooterComp></FooterComp>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import HomeProject from '@/components//HomePage/HomeProject.vue';
import HomeBanner from '@/components/HomePage/HomeBanner.vue';
import HomeInfo from '@/components/HomePage/HomeInfo.vue';
import HomeArticle from '@/components/HomePage/HomeArticle.vue';

export default {
    name: 'App',
    components: {
        HeaderComp,
        FooterComp,
        HomeProject,
        HomeBanner,
        HomeInfo,
        HomeArticle,
    }
}
</script>

<style lang="scss">
$widthContent: 1200px;

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

* {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

.center {
    padding-left: calc(50% - $widthContent / 2);
    padding-right: calc(50% - $widthContent / 2);
}
</style>