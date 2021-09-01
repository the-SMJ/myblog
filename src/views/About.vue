<!--
 * @Author: FX
 * @Date: 2021-08-09 22:14:03
 * @Description: 留言板 
 * @FilePath: \myblog\src\views\About.vue
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
                 🤡关于
              </h1>
            </template>
            <template v-slot:content>
              <h3>关于本站</h3>
              <p style="font-size: 15px">随缘更新的个人网站, 如果哪天失联了, 一定是我没钱续费服务器了</p>
              <h3>关于我</h3>
              <p style="font-size: 15px">一个人形bug制造机罢了</p>
              <h3>联系方式</h3>
              <p style="font-size: 15px">353559055@qq.com</p>
              <p style="font-size: 15px">thesmj0@gmail.com</p>
              <p style="font-size: 15px">vx: theSMJ</p>
              
            </template>
          </BulletinBoard>
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
import interfaceUrl from '@/common/interfaceUrl'
import dateFormat from '@/common/dateFormat'
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



    computed: {

    },


    created(){
     
    }
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
  .bulletin-board p{
    padding: 10px;
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
    .bulletin-board p{
      padding: 4vw;
    }

 
 } 


</style>