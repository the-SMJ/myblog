<!--
 * @Author: FX
 * @Date: 2021-08-30 21:43:04
 * @Description: 学习笔记
 * @FilePath: \myblog\src\views\Daily.vue
-->

<!--  -->
<template>
  <div id="StudyNote">
    <div class="wrap">
      <div class="head-title">分类"🔥随笔"下的文章</div>
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

    name: 'StudyNote',


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
        url: interfaceUrl.getArticleByTagId,
        method: "GET",
        params: {
          tagId: 1,
        }
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

  @media screen and (min-width: 630px){ 
    .wrap{
      padding-top: 70px;
      background-color: #F8F9FA;
    }
    .head-title{
      font-size: 40px;
      text-align: center;
      margin: 30px 0;
    }
    .article-box-wrap{
      width: 925px;
      margin: 0 auto;
      
    }
    .article-box{
      margin-bottom: 30px;
    }
  }

  
  @media screen and (max-width: 630px){
    .wrap{
      padding-top: 20px;
      background-color: #F8F9FA;
    }

    .article-box{
      margin-bottom: 3vh;
    }
  }
</style>
