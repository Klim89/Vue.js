<template>
  <div id="app">
    <div class="homepage">
      <HeaderComp></HeaderComp>
      <HomeBanner></HomeBanner>
      <HomeProject></HomeProject>
      <HomeInfo></HomeInfo>
      <HomeArticle></HomeArticle>
      <FooterComp></FooterComp>
    </div>
    <div class="blog-page">
      <HeaderComp></HeaderComp>
      <BlogBanner></BlogBanner>
      <BlogPost></BlogPost>
      <BlogArticle></BlogArticle>
      <BlogPagination></BlogPagination>
      <FooterComp></FooterComp>
    </div>
    <div class="blog-details">
      <HeaderComp></HeaderComp>
      <BlogDetailsBanner></BlogDetailsBanner>
      <BlogDetailsArticle></BlogDetailsArticle>
      <FooterComp></FooterComp>
    </div>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
import HomeProject from './components//HomePage/HomeProject.vue';
import HomeBanner from './components/HomePage/HomeBanner.vue';
import HomeInfo from './components/HomePage/HomeInfo.vue';
import HomeArticle from './components/HomePage/HomeArticle.vue';
import BlogBanner from './components/BlogPage/BlogBanner.vue';
import BlogPost from './components/BlogPage/BlogPost.vue';
import BlogArticle from './components/BlogPage/BlogArticle.vue';
import BlogPagination from './components/BlogPage/BlogPagination.vue';
import BlogDetailsBanner from './components/BlogDetails/BlogDetailsBanner.vue';
import BlogDetailsArticle from './components/BlogDetails/BlogDetailsArticle.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
    HomeProject,
    HomeBanner,
    HomeInfo,
    HomeArticle,
    BlogBanner,
    BlogPost,
    BlogArticle,
    BlogPagination,
    BlogDetailsBanner,
    BlogDetailsArticle
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
