<!--
 * @Author: FX
 * @Date: 2021-08-29 23:39:15
 * @Description: 文章详情页面
 * @FilePath: \myblog\src\views\ArticleDetail.vue
-->
<template>
  <div id="ArticleDetail">
    <div class="wrap display-flex">
      <div class="main-wrap">
        <div class="title">
          <span>{{renderData.title}}</span>
        </div>
                        
        
        <div class="time-tag-views display-flex">
          <div class="time">
            <span>⏱️{{timeFormat}}</span>
          </div>
          <div class="tag">
            <span>{{tagList[renderData.tagid-1]}}</span>
          </div>
          <div class="views">
            <span>👣{{renderData.views}}</span>
          </div>
        </div>
        <hr>
        
        <div class="content" v-html="renderData.content">
          
        </div>

      </div>
      <div class="aside-wrap">
        <PersonalCard></PersonalCard>
      </div>

    </div>
    <hr class="line">
    <h1 class="END">
      END
    </h1>
  </div>
</template>

<script>
import dateFormat from '@/common/dateFormat'
import interfaceUrl from '@/common/interfaceUrl'
import PersonalCard from '@/components/PersonalCard'
  export default {
    name: "ArticleDetail",
    props: {
      articleId: {
        type: [String, Number, Object],
        required: true
      }
    },

    components: {
      PersonalCard,
    },
    data(){
      return {
        renderData: {},
        tagList: [
          "🔥随笔",
          "📖学习笔记",
        ],
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
          this.addViews();
          console.log(this.renderData);
        }).catch(err => {
          console.log(err);
        })
      },

      addViews(){
        this.myAxios({
          url: interfaceUrl.addArticleViews,
          method: "GET",
          params: {
            id: this.articleId,
          }
        }).then(res => {
          
        }).catch(err => {
          console.log(err);
        })
      }
    },

    computed: {
      timeFormat(){
        return dateFormat("YY年mm月dd日", new Date(this.renderData.createTime))
      }
    },
    mounted() {
      this.init();
    },
      
    
  }
</script>
<style scoped>
/* 电脑端 */
@media screen and (min-width: 631px) {
  .wrap{
    padding-top: 100px;
    width: 1150px;
    margin: 0 auto;
    justify-content: space-between;
  }
  .main-wrap{
    width: 70%;
    border: 1px solid #dfe7ee;
    padding: 10px 22px;
    border-radius: 4px;
  }
  .aside-wrap{
    padding: 0 10px;
  }
  .title{
    font-size: 32px;
    font-weight: 700;
    /* text-align: center; */
    margin: 0 0 15px 0;
  }
  .time-tag-views{
    font-size: 13px;
    font-weight: 600;
    margin: 0 0 20px 10px;
    
  }
  .tag{
    margin: 0 20px;
  }

  .content{
    width: 805px;
    padding: 10px 0;
  }
  .line{
    margin: 20px 0 0 0;
  }
  .END{
    text-align: center;
    margin: 10px 0 20px 0;
  }
}

</style>

<style lang="less" scoped>
// 手机端
@media screen and(max-width: 630px) {
  .aside-wrap{
    display: none;
  }
  
  .wrap{
    padding-top: 2vh;
    
    color: var(--bs-dark);
  }
  .main-wrap{
    border: 1px solid #e9ecef;
    border-radius: 1vw;
    width: 96vw;
    padding: 1vh;
    margin: 0 auto;
    
    
  }
  .title{
    font-size: 1.2rem;
    font-weight: 600;
    padding: 1.1vh 0;
  }

  .time-tag-views{
    padding: 1vh 0;
    font-size: 0.7rem;
  }

  .tag{
    margin: 0 4vw;
    
  }
}
  
</style>
