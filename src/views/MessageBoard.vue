<!--
 * @Author: FX
 * @Date: 2021-08-09 22:14:03
 * @Description: 留言板 
 * @FilePath: \myblog\src\views\MessageBoard.vue
-->
<!--  -->
<template>
  <div id="MessageBoard">
    <div class="wrap">
      <div class="main-wrap">
        <!-- 公告栏 -->
        <div class="board-wrap">
          <BulletinBoard class="bulletin-board">
            <template v-slot:title>
              <h1>
                🏡留言板
              </h1>
            </template>
            <template v-slot:content>
              <p style="font-size: 20px">有啥想对我说的，来吧！！！</p>
            </template>
          </BulletinBoard>
        </div>

        <!-- 留言板块 -->
        <div class="comment-wrap">
          <div class="title">
            <span>💬页面评论</span>
          </div>
          <hr class="line">
          <InputBox></InputBox>
        </div>
        
      </div>
      <div class="aside-wrap">
        
        <PersonalCard></PersonalCard>
        
      </div>      

    </div>
    


  </div>
</template>

<script>
import BulletinBoard from '../components/BulletinBoard.vue'
import PersonalCard from '../components/PersonalCard.vue'
import InputBox from '@/components/InputBox'
  export default {
    components: {
     BulletinBoard,
     PersonalCard,
     InputBox,
    },
    name: 'MessageBoard',
    data(){
      return {

      }
    },
  }
</script>
<style lang="less" scoped>

  #MessageBoard{
    background-color: var(--bs-bgwhite);
    
  }
  
</style>

// 电脑端
<style scoped lang="less">

@media screen and (min-width: 631px){
    .wrap{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 62%;
    min-width: 1000px;
    margin: 0 auto;
    padding-top: 100px;
  }
  
  .aside-wrap{
    width: 257px;
  }

  .comment-wrap{
    border: 1px solid #e9ecef;
    background-color: var(--bs-white);
    min-height: 5rem;
    border-radius: 8px;
    color: var(--bs-dark);
    padding: 2rem;
    margin-top: 30px;
    width: 650px;     
  }


  .title{
    font-size: 15px;
  }

  .line{
    margin: 20px 0;
  }  
}


</style>


<style lang="less" scoped>
// 手机
 @media screen and (max-width: 630px) {
    .aside-wrap{
      display: none;
    }

    .wrap{
      padding-top: 2vw; 

    }

    .comment-wrap{
      border: 1px solid #e9ecef;
      background-color: var(--bs-white);
      color: var(--bs-dark);     
      margin-top: 2vh; 
      padding: 1rem;
    }

    .title{
      font-size: 0.8rem;
    }

    .line{
      margin: 2.4vh 0;
    }
 } 


</style>