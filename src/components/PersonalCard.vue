<!--
 * @Author: FX
 * @Date: 2021-08-12 22:06:48
 * @Description: 个人资料卡片
 * @FilePath: \myblog\src\components\PersonalCard.vue
-->
<!--  -->
<template>
  <div id="PersonalCard">
    <div class="wrap">
      <div class="bg-img">
        <img src="../assets/img/PersonalCard.jpg" alt="">
      </div>

      <div class="avatar">
          <img :src="renderData.avatar" alt="">
      </div>
      <div class="signature">
        <span class="text">{{renderData.signature}}</span>
      </div>
      <div class="other-info">
        <div class="article-count">文章 {{articleNum}}</div>
        <div class="comment-count">评论 {{commentNum}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import interfaceUrl from '@/common/interfaceUrl'
  export default {
    name: 'PersonalCard',
    data() {
      return{
        renderData: this.$store.state.loginData,
        articleNum: null,
        commentNum: null,
      }
    },
    methods: {
      init(){
        this.myAxios({
          url: interfaceUrl.getUserById,
          method: "GET",
          params: {
            id: 1,
          }
        }).then(res => {
          this.renderData = res.data.data;
        }).catch(err => {
          console.log(err);
        })
        
        this.getArticleNum();
        this.getCommentNum();
      },

      getArticleNum(){
        this.myAxios({
          url: interfaceUrl.getArticleNumByUid,
          method: "GET",
          params: {
            uid: 1,
          }
        }).then(res => {
          this.articleNum = res.data.data;
        }).catch(err => {
          console.log(err);
        })        
      },
      getCommentNum(){
        this.myAxios({
          url: interfaceUrl.getAcceptCommentNum,
          method: "GET",
        }).then(res => {
          
          this.commentNum = res.data.data;
        }).catch(err => {
          console.log(err);
        })          
      }
    },
    created(){
      this.init();
    }

  }
</script>
<style scoped>
@import url('../assets/font/font.css');
  .wrap{
    font-family: LXGW;
    width: 257px;
    height: 240px;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    background-color: var(--bs-white);
    position: relative;
  }

  .bg-img{
    height: 50%;
    overflow: hidden;
  }
  .bg-img > img{
    height: 100%;
  }

  /* 头像 */
  .avatar{
    box-sizing:border-box;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: 50%; 
    top: 50%;
    transform: translate(-50%, -50%); 
  }
  .avatar > img{
    width: 100%;
    
  }

  .signature{
    font-size: 13px;
    font-weight: bold;
    width: 90%;
    height: 30px;
    margin: 40px auto 0;
    text-align: center;
   
  }

  .other-info{
    font-size: 14px;
    font-weight: bold;
    color:rgba(13, 109, 253, 0.685);
    display: flex;
    width: 90%;
    height: 50px;
    padding: 10px;
    margin: 0 auto;
    justify-content: space-around;
  }

  
</style>
