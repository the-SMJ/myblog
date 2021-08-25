<!--
 * @Author: FX
 * @Date: 2021-08-09 16:13:40
 * @Description: 
 * @FilePath: \myblog\src\components\TopNavMenu.vue
-->
<!--  -->
<template>
  <div id="TopNavMenu">
    
    <div class="wrap">
      <div class="main">
        <div class="main-left">
          <!-- logo -->
          <div class="main-left-logo" @click="$router.push('/home')">
            <span class="text">THESMJ</span>
          </div>
          <!-- 随笔和日常 -->
          <div class="main-left-essay-daily">
            <span class="text">✨随笔&日常</span><i class="el-icon-arrow-down"></i>
            <div class="main-left-essay-daily-dropdown">
              <ul class="dropdown">
                <li @click="$router.push('/home')"><span>🔥随笔</span></li>
                <li @click="$router.push('/home')"><span>🌈学习笔记</span></li>
              </ul>
            </div>
          </div>
          <!-- 留言板 -->
          <div class="main-left-message">
              <span class="text"
                @click="$router.push('/messageboard')"
              >
              🏡留言板
              </span>
          </div>
          <div class="main-left-about">
            <span class="text"
              @click="$router.push('/about')"
            >
              🤡关于
            </span>
        </div>
        </div>
        <!-- Width小于630时显示这个 -->
        <div class="main-left-M">
          <div class="aside-menu" @click="changeDrawer"><i class="el-icon-more-outline"></i></div>
          
          <el-drawer
            title="相逢的人会再相逢"
            :visible.sync="drawer"
            direction="ltr"
            size='55%'
            ref="drawerBox"
            >
            <ul class="main-left-M-list">
              <li @click="toDaily"><span>✨随笔&日常</span></li>
              <li @click="toMessageBoard"><span>🏡留言板</span></li>
              <li @click="toAbout"><span>🤡关于</span></li>

            </ul>



          </el-drawer>
        </div>
        <div class="top-text text">test</div>
        <div class="top-text-M text">THESMJ</div>
        <div class="main-right">
          <div class="login text" 
            v-if="!$store.state.isLogin"
            @click="login"
          >
            <span>登录</span>
          </div>
          <div class="admin text"
             v-else
             @click="$router.push('/admin')"
          >
            <span>管理页面</span>
          </div>
          <div class="search-box">
            <i class="el-icon-search"
              @click="onSearch"
            ></i>
          </div>
        </div>
        
      </div>
      <LoginDialog ref="loginDialog"></LoginDialog>
    </div>
    
  </div>
  
</template>


<script>
  import LoginDialog from '@/components/LoginDialog'
  export default {
    name: 'TopNavMenu',
    components: {
      LoginDialog,
    },
    data(){
      let clientWidth = document.documentElement.clientWidth;
      
      return{
          
          drawer: false,
      };
    },

    computed: {
      
    },

    methods: {
      changeDrawer(){
        this.drawer = true;
      },

      hideDrawer(){
        this.$refs.drawerBox.closeDrawer();
      },
      toDaily(){
        
        this.$router.push('/home');
        this.hideDrawer();
      },

      toMessageBoard(){
        this.$router.push('/messageboard');
        this.hideDrawer();
      },
      
      toAbout(){
        this.$router.push('/about');
        this.hideDrawer();
      },
      
      login() {
        this.$refs.loginDialog.show();
      },
      onSearch(){
        this.$message({
          message: '搜索功能还在开发...(  在做了在做了, 已经建好文件夹了_(:3」∠)_     )',
          
          offset: "70"
        })
      }
    
    },
    
  }
</script>
<style scoped>
@import url('../assets/font/font.css');
  /* 公共样式 */
  .text{
    cursor: pointer;
    display: inline-block;
    line-height: 50px;
    color:#333;
    font-weight: bold;
    transition: 0.3s all;
  }
  .text:hover{
    color: rgb(124, 124, 124);
  }
  
  .wrap{
    background-color: rgba(255, 255, 255, 0.9);
    font-family: LXGW;
    box-shadow: 0 0.5rem 0.5rem rgb(18 38 63 / 6%);
    
  }
  
  .main{
    transition: 0.3s all;
    font-size: 16px;
    width: 100%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    position: relative;
    
  }

  /* 中间文字 */
  .top-text{
    color: #666;
    font-size: 20px;
    margin: 0 auto;
    line-height: 50px;
  }
  

  .login{
    font-size: 18px;
    margin-right: 20px;
    
  }
  .admin{
    font-size: 18px;
    color: rgb(74, 165, 226);
    margin-right: 20px;
  }
  
  .search-box{
    font-size: 22px;
    line-height: 50px;
    cursor: pointer;
  }
  


</style>

// 手机端
<style lang="less" scoped>
  @media screen and (max-width: 630px){
    .main-left *{
      display: none;
    }
    .top-text, .login{
      display: none;
    }
    
    .top-text-M{
      font-size: 20px;
      margin: 0 auto;
    }
    /* 宽度小于630时的侧边栏样式 */
    .aside-menu{
      cursor: pointer;
      line-height: 50px;
      font-size: 22px;
      color: #333; 
    }

    .main-left-M-list{
      line-height: 60px;
      
    }
    .main-left-M-list > li{
      margin: 1px 0;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
      cursor: pointer;
    }
    .main-left-M-list > li>span{
      margin: 0 0 0 20px;
    }    
    
    /* 右侧搜索和其他 */
    .main-right{
      
      color: #333;
      position: absolute;
      right: 10px;
    }
  }
</style>

// 网页端
<style lang="less" scoped>
  @media screen and (min-width: 631px){
    .main-left-M, .top-text-M{
      display: none;
    }
    

    #TopNavMenu{
      position: fixed;
      z-index: 9999;
      width: 100%;
    }
    .main-left{
      display: flex;
    }
    
    .main-left-logo *{
      font-size: 22px;
      font-weight: bold;
      margin: 0 25px;
    }
  /* 随笔日常 */
    .main-left-essay-daily {
      color: #333;
      margin: 0 28px 0 12px;
      font-size: 16px;
      cursor: pointer;
    }
  /* 留言板 */
    .main-left-message{
      color: #333;
      margin: 0 12px;
    }
  /* 关于 */
    .main-left-about{
      margin: 0 0 0 35px;
    }
          /* 随笔日常下拉菜单的样式 */
    .main-left-essay-daily:hover .text,i{
      color: rgb(124, 124, 124);
    }
    .main-left-essay-daily:hover .main-left-essay-daily-dropdown {
      height: 80px;
      background-color: #fff;
      border: 1px solid rgba(0,0,0,.15); 
    }
    .main-left-essay-daily-dropdown{
      transition: 0.3s all;
      border-radius: 4px;
      height: 0;
      overflow: hidden;
      position: relative;
      top: -5px;
      

    }
    .dropdown > li{
      transition: 0.3s all;
      line-height: 37px;
      margin: 2px 0;
    }
    .dropdown > li > span{
      margin: 0 0 0 10px;
    }
    .dropdown > li:hover{
      background-color: #eeeeee;
    }

    /* 右侧搜索和其他 */
    .main-right{
      display: flex;
      color: #333;
      position: absolute;
      right: 50px;
    }
  }
</style>

<style lang="less">
#el-drawer__title{
  font-weight: bold;
  font-size: 16px;
}

  
</style>