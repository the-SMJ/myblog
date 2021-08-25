/*
 * @Author: FX
 * @Date: 2021-08-10 15:18:51
 * @Description: 
 * @FilePath: \myblog\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    loginData: {},
    // 登录状态
    isLogin: false,
    // 用户数据
    userData:{}
  },
  mutations: {
    updateIsLogin(state, newVal){
      
      state.isLogin = newVal;
      
    },
    updateLoginData(state,newVal){
      state.loginData = newVal;
    },
    updateUserData(state, newVal){
      state.userData = newVal;
    }
  },
  actions: {
  },
  modules: {
  }
})
