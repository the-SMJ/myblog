<!--
 * @Author: FX
 * @Date: 2021-08-29 23:39:15
 * @Description: 文章详情页面
 * @FilePath: \myblog\src\views\ArticleDetail.vue
-->
<template>
  <div id="ArticleDetail">
    <div class="wrap">
    <h1>{{renderData.title}}</h1> 
      <h1>文章详情</h1> 
      <h1>文章详情</h1> 
      <h1>文章详情</h1> 
      <h1>文章详情</h1> 
      <h1>文章详情</h1> 
      <h1>{{articleId}}</h1> 
    </div>

  </div>
</template>

<script>
import interfaceUrl from '@/common/interfaceUrl'
  export default {
    name: "ArticleDetail",
    props: {
      articleId: {
        type: [String, Number, Object],
        required: true
      }
    },
    data(){
      return {
        renderData: {},
      }
    },

    methods: {
      
      init(){
        this.myAxios({
          url: interfaceUrl.getArticleById,
          method: "GET",
          params: {
            id: this.articleId,
          }
        }).then(res => {
          this.renderData = res.data.data;
          console.log(this.renderData);
        }).catch(err => {
          console.log(err);
        })
      }
    },
    created() {
      this.init();
    },
      
    
  }
</script>
<style scoped>
  .wrap{
    padding-top: 100px;
  }
</style>
