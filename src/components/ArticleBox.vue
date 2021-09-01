<!--
 * @Author: FX
 * @Date: 2021-08-09 22:57:03
 * @Description: 文章盒子
 * @FilePath: \myblog\src\components\ArticleBox.vue
-->

<template>
  <div id="ArticleBox">
    <div class="wrap">
      <div class="blur-img">
        <img :src="renderData.avatar" alt="">
      </div>
      <div class="article-img">
        <img :src="renderData.avatar" alt="" @click="$router.push('/article-detail/' + renderData.id)">
      </div>
      <div class="article-info">
        <div class="article-info-head">
          <div class="article-time">
            <span>📅{{createTime}}</span>
          </div>
          <div class="views-tag">
            <span>
              👣{{renderData.views}}
            </span>
            <span>{{tagList[renderData.tagid-1]}}</span>
          </div>
        </div>
        <h1 class="article-title" @click="$router.push('/article-detail/' + renderData.id)">
          {{renderData.title}}
        </h1>
        <div class="article-introduction" @click="$router.push('/article-detail/' + renderData.id)">
          {{renderData.introduction}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dateFormat from '@/common/dateFormat'
  export default {
    name: 'ArticleBox',

    props: ['data'],
    data(){
      return {
        renderData: null,
        createTime: dateFormat("YY-mm-dd HH:MM", new Date(this.data.createTime)),
        tagList: [
          "📝随笔",
          "📖学习笔记",
        ]
      }

    },

    watch: {
      data: {
        immediate: true,
        handler(newVal) {
          this.renderData = newVal;
        },
        
      }
    },
    mounted() {
      this.renderData = this.data;
    },

  }
</script>





<style scoped lang="less">
@import url('../assets/font/font.css');
// 网页端
@media screen and(min-width:631px){

  .article-img:hover, 
  .article-title:hover, 
  .article-introduction:hover{
    cursor: pointer;
    color: rgba(235, 235, 235);
  }

  
  .article-title, 
  .article-introduction{
    transition: all 0.2s;
  }

  .wrap{
    font-family: LXGW;
    width: 925px;
    height: 250px;
    background-color: var(--bs-dark);
    
    border-radius: 8px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    display: flex;
  }
  .blur-img > img{
    position: absolute;
    top: 0;
    height: 14.5rem;
    -o-object-fit: cover;
    object-fit: cover;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    -webkit-filter: blur(1.875rem) brightness(0.8);
    filter: blur(1.875rem) brightness(0.8);
    
    opacity: 1;
    transition: opacity 0.5s;
    
  }
  .article-img{
    clip-path: polygon(0 0, 94% 0%, 100% 100%, 0% 100%);
    margin: 0;
    border-radius: 0;
    z-index: 2;
    width: 35%;
  }
  
  .article-img > img{
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    transition: .3s ease-out;
  }

  .article-img > img:hover{
    transform: scale(1.1) rotate(4deg);
  }
  

  .article-info{
    width: 65%;
    font-size: 14px;
    color: var(--bs-white);
    
    z-index: 3;
  }

  .article-info-head{
    display: flex;
    justify-content: space-between;
    height: 30px;
    margin: 45px 30px 10px 40px;
  }

  .article-title{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    margin: 10px 15px 10px 35px;
  }
  
  .article-introduction{
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    
    font-size: 18px;
    line-height: 30px;
    margin: 30px 40px;
    
  }
}


// 手机端
@media screen and(max-width: 630px) {
  .blur-img,
  .article-time{
    display: none;
  }
  .wrap{
    
    font-family: LXGW;
    display: flex;
    border: 1px solid #dfe7ee;
    border-radius: 1vw;
    height: 8.5rem;
    width: 94vw;
    
    background-color: var(--bs-white);
    color: var(--bs-dark);
    
  }
  .article-img{

    margin: auto 2vw;
    
  }
  .article-img > img{
    border-radius: 0.4rem;
    width: 80px;
    height: 80px;
    overflow: hidden;
    object-fit:cover
    
  }

  .views-tag{
    margin: 2.5vh 0vw 2vh 1vw;
    width: 65vw;
    display: flex;
    justify-content: space-between;
  }
  .article-title{
    width: 65vw;
    font-size: 1.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    margin: 2vh 1vw;
  }
  
  .article-introduction{
    width: 60vw;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;   
    margin: 2vh 1vw;
  }
}
</style>