<!--
 * @Author: FX
 * @Date: 2021-08-09 10:37:35
 * @Description: 
 * @FilePath: \myblog\src\App.vue
-->
<template>
  <div id="app">
    <TopNavMenu></TopNavMenu>
    <!--  include的组件会被缓存, 路由切换时不再重复渲染 -->
      <keep-alive include="Home,MessageBoard,About,ArticleEditor,Daily,StudyNote">
        <router-view></router-view>
      </keep-alive>
  </div>
</template>
<script>
import TopNavMenu from './components/TopNavMenu.vue';
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import {updateLogin} from "./common/common" 
export default {
  name: "app",

  components: {
    TopNavMenu
  },

  data(){
    return {};
  },
  computed: {
    ...mapState({
      loginData: "loginData",
      isLogin: "isLogin"
    })
  },
  
  methods: {
    ...mapMutations(["updateLoginData", "updateIsLogin", "updateUserData"]),

  },

  created(){
    // 这段代码主要是在Vue实例更新后重新获取session中的数据, 判断是否已经登录
    let loginData = updateLogin();
    this.updateLoginData(loginData.loginData);
    this.updateIsLogin(loginData.isLogin);

  }
  
}
</script>

<style lang="less">

  html{
    --bs-bgwhite: #F8F9FA;
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #28a745;
    --bs-teal: #20c997;
    --bs-cyan: #17a2b8;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #28a745;
    --bs-info: #17a2b8;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #343a40;
    --bs-success_opacity_1: rgba(40, 167, 69, 0.1);
    --bs-success_opacity_2: rgba(40, 167, 69, 0.2);
    --bs-success_opacity_3: rgba(40, 167, 69, 0.3);
    --bs-success_opacity_4: rgba(40, 167, 69, 0.4);
    --bs-success_opacity_5: rgba(40, 167, 69, 0.5);
    --bs-success_opacity_6: rgba(40, 167, 69, 0.6);
    --bs-success_opacity_7: rgba(40, 167, 69, 0.7);
    --bs-success_opacity_8: rgba(40, 167, 69, 0.8);
    --bs-success_opacity_9: rgba(40, 167, 69, 0.9);
    --bs-primary_opacity_1: rgba(13, 110, 253, 0.1);
    --bs-primary_opacity_2: rgba(13, 110, 253, 0.2);
    --bs-primary_opacity_3: rgba(13, 110, 253, 0.3);
    --bs-primary_opacity_4: rgba(13, 110, 253, 0.4);
    --bs-primary_opacity_5: rgba(13, 110, 253, 0.5);
    --bs-primary_opacity_6: rgba(13, 110, 253, 0.6);
    --bs-primary_opacity_7: rgba(13, 110, 253, 0.7);
    --bs-primary_opacity_8: rgba(13, 110, 253, 0.8);
    --bs-primary_opacity_9: rgba(13, 110, 253, 0.9);
    --bs-danger_opacity_1: rgba(220, 53, 69, 0.1);
    --bs-danger_opacity_2: rgba(220, 53, 69, 0.2);
    --bs-danger_opacity_3: rgba(220, 53, 69, 0.3);
    --bs-danger_opacity_4: rgba(220, 53, 69, 0.4);
    --bs-danger_opacity_5: rgba(220, 53, 69, 0.5);
    --bs-danger_opacity_6: rgba(220, 53, 69, 0.6);
    --bs-danger_opacity_7: rgba(220, 53, 69, 0.7);
    --bs-danger_opacity_8: rgba(220, 53, 69, 0.8);
    --bs-danger_opacity_9: rgba(220, 53, 69, 0.9);
    --bs-info_opacity_1: rgba(23, 162, 184, 0.1);
    --bs-info_opacity_2: rgba(23, 162, 184, 0.2);
  }

  .display-flex{
    display: flex;
  }


</style>
