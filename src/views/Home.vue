<!--
 * @Author: FX
 * @Date: 2021-08-09 16:01:34
 * @Description: 
 * @FilePath: \myblog\src\views\Home.vue
-->

<!--  -->
<template>
  <div id="Home">
    <div class="wrap">
      <div class="article-box-wrap">
      <ArticleBox class="article-box"></ArticleBox>
      <ArticleBox class="article-box"></ArticleBox>
      <ArticleBox class="article-box"></ArticleBox>
      <ArticleBox class="article-box"></ArticleBox>
      <ArticleBox class="article-box"></ArticleBox>

    </div>
    </div>
  </div>
</template>

<script>
import ArticleBox from '../components/ArticleBox.vue';
import TopNavMenu from '../components/TopNavMenu.vue';

  export default {

    name: 'Home',


    components: { 
      TopNavMenu, 
      ArticleBox
    },
    data(){
      return {};
    },
  }
</script>
<style scoped>
  .wrap{
    padding-top: 70px;
  }

  .article-box-wrap{
    width: 925px;
    margin: 0 auto;
  }
  .article-box{
    margin-bottom: 30px;
  }
</style>
