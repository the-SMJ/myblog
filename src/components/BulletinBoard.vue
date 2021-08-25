<!--
 * @Author: FX
 * @Date: 2021-08-12 20:40:13
 * @Description: 公共栏 
 * @FilePath: \myblog\src\components\BulletinBoard.vue
-->
<!--  -->
<template>
  <div id="BulletinBoard">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <hr class="line">
      <div class="content">
        <slot name="content"></slot>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'BulletinBoard',
  }
</script>


<style lang="less" scoped>
@media screen and(max-width:630px){
  #BulletinBoard{
    border: 1px solid #e9ecef;
    background-color: var(--bs-white);
    min-height: 5rem;
    border-radius: 8px;
    color: var(--bs-dark);
    padding: 2rem;
    word-break: break-all;
    
  }
  .line{
    margin: 15px 0;
  }

  .content{
    font-size: 15px;
  }
}

  
</style>

// 网页端
<style scoped>
  @media screen and (min-width: 631px){
    #BulletinBoard{
      border: 1px solid #e9ecef;
      background-color: var(--bs-white);
      min-height: 5rem;
      border-radius: 8px;
      color: var(--bs-dark);
      padding: 2rem;
      word-break: break-all;
      width: 650px;
    }
    
    /* 分割线 */
    .line{
      margin: 25px 0;
    }

    .content{
      font-size: 15px;
    }
  }
</style>