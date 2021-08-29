<!--
 * @Author: FX
 * @Date: 2021-08-10 17:58:37
 * @Description: 
 * @FilePath: \myblog\src\components\LoginDialog.vue
-->
<!--  -->
<template>
  <div>
    <el-dialog title="登录" 
      custom-class="login-dialog"
      :visible.sync="dialogFormVisible"
      :destroy-on-close="TRUE_"
      width="500px"
      
    >
      <el-form :model="form">
        <el-form-item label="用户名">
          <el-input placeholder="输入账号" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" placeholder="输入密码" v-model="form.password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button round type="info" @click="close">取 消</el-button>
        <el-button round type="warning" @click="closeAndSubmit">确 定</el-button>
      </div>
    </el-dialog>    
  </div>
</template>

<script>
import interfaceUrl from '@/common/interfaceUrl'
import { setUserVoucher, updateLogin } from '../common/common'
import { mapState } from "vuex";
import { mapMutations } from "vuex";
  export default {
    name: 'LoginDialog',
    data(){
      let form = {
        username: "",
        password: "",
      }
      return {
        TRUE_: true,
        form,
        dialogFormVisible: false,
      }
    },
    computed: {
      ...mapState({
        loginData: "loginData",
        isLogin: "isLogin"
    }),
    },
    methods: {
      ...mapMutations(["updateLoginData", "updateIsLogin", "updateUserData"]),
      show(){
        this.initForm();
        this.dialogFormVisible = true;
      },
      close() {
        this.initForm();
        this.dialogFormVisible = false;
      },
      closeAndSubmit(){
        this.dialogFormVisible = false;
        this.myAxios({
          url: '/api/user/login',
          method: "GET",
          params: {
            username: this.form.username,
            password: this.form.password
          }

        }).then(res =>{
          if(res.data.code == 0){
            console.log("登录成功");
            console.log(res.data.data); //uid
            setUserVoucher(res)
            let loginData = updateLogin();
            this.updateLoginData(loginData.loginData);
            this.updateIsLogin(loginData.isLogin)
            
          }else{
            this.$message.error('用户名或密码错误(暂不开放注册)');

          }
          

        }).catch(error =>{
          
        })
      },

      initForm(){
        for(let i in this.form){
          this.form[i] = "";
        }
      },
    },

    computed: {

    }
  }
</script>
<style scoped>
  .login-dialog{
    font-size: 30px;
  }
</style>

<style>
  .el-popup-parent--hidden {
    padding-right: 10px !important;
  }
</style>