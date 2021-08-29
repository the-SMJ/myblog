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
      <div class="article-box-wrap"
      v-for="(item, index) in dataList" :key="index">
        <ArticleBox class="article-box" :data="item"></ArticleBox>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleBox from '../components/ArticleBox.vue';
import TopNavMenu from '../components/TopNavMenu.vue';
import interfaceUrl from '@/common/interfaceUrl';
import ArticleDetail from '@/views/ArticleDetail'
  export default {

    name: 'Home',


    components: { 
      TopNavMenu, 
      ArticleBox,
      
    },
    data(){
      return {
        dataList: [],
      };
    },
    created(){
      this.myAxios({
        url: interfaceUrl.getAllArticle,
        method: "GET",
      }).then(res => {
        this.dataList = res.data.data
        console.log(this.dataList);

      }).catch(err => {
        console.log(err);
      })
    }
    
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
