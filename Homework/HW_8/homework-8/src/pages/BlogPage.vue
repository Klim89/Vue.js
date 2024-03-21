<template>
    <div id="app">
        <HeaderComp></HeaderComp>
        <BlogBanner></BlogBanner>
        <BlogPost></BlogPost>
        <BlogArticle></BlogArticle>
        <BlogPagination></BlogPagination>
        <FooterComp></FooterComp>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import BlogBanner from '@/components/BlogPage/BlogBanner.vue';
import BlogPost from '@/components/BlogPage/BlogPost.vue';
import BlogArticle from '@/components/BlogPage/BlogArticle.vue';
import BlogPagination from '@/components/BlogPage/BlogPagination.vue';

export default {
    name: 'App',
    components: {
        HeaderComp,
        FooterComp,
        BlogBanner,
        BlogPost,
        BlogArticle,
        BlogPagination,
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