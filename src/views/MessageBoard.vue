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
              <p> Say something?</p>
              <p> Say something?</p>
              <p> Say something?</p>
            </template>
          </BulletinBoard>
        </div>

        <!-- 留言板块 -->
        <div class="comment-wrap">
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
          <h1>留言板块</h1>
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

  export default {
    components: {
     BulletinBoard,
     PersonalCard,
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
    padding-top: 70px;
  }
  
  .aside-wrap{
    width: 257px;
  }
}


</style>

//  手机端
<style lang="less" scoped>
 @media screen and (max-width: 630px) {
   .aside-wrap{
     display: none;
   }

   .wrap{
    padding-top: 2vw; 

   }
 } 
</style>