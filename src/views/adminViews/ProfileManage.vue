<!--
 * @Author: FX
 * @Date: 2021-08-13 20:53:18
 * @Description: 个人资料设置
 * @FilePath: \myblog\src\views\adminViews\ProfileManage.vue
-->

<!--  -->
<template>
  <div class="ProfileManage">
    <el-form ref="form" 
      :rules="rules"
      :model="form" 
      label-width="80px"
      >
      <el-form-item label="头像">
        <el-upload
          class="avatar-uploader"
          action="/api/article/fileUpload"
          :on-success="handleAvatarSuccess"
          >
          <img v-if="form.avatar" :src="form.avatar" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        
      </el-form-item>
      <div class="input-username">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>        
      </div>
      <div>
        <el-form-item label="">
          <el-button type="primary" @click="changePass">修改密码</el-button>
        </el-form-item>
      </div>
      <div class="input-password" v-show="changePassFlag">
        <el-form-item label="新密码" prop="newPass">
          <el-input type="password" v-model="form.newPass" autocomplete="new-password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="form.checkPass" autocomplete="off"></el-input>
          
        </el-form-item>
      </div>
      


      <div class="input-signature">
        <el-form-item label="签名" style="width: 1000px" >
          <el-input v-model="form.signature"></el-input>
        </el-form-item>
      </div>
      <div class="button-submit">
        <el-button type="primary" @click="onSubmit('form')">提交</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import interfaceUrl from '@/common/interfaceUrl'
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import {updateLogin} from "@/common/common" 
  export default {
    name:'ProfileManage',

    data(){
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.checkPass !== '') {
            this.$refs.form.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.newPass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };          
      return{
        form: {
          uid: "",
          username: "",
          newPass: '',
          checkPass: '',
          signature: "",
          avatar: "",
        },
        rules: {
          newPass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },

        changePassFlag: false,

    
      }
    },
    
    methods: {
      ...mapMutations(["updateLoginData", "updateIsLogin", "updateUserData"]),

      init(){
        let uid = sessionStorage.getItem("uid")
        // 创建时, 请求用户数据
        this.myAxios({
          url: interfaceUrl.getUserById,
          method: "GET",
          params: {
            id: uid,
          }
        }).then(res => {
            this.form.username = res.data.data.username;
            this.form.avatar = res.data.data.avatar;
            this.form.uid = res.data.data.uid;
            this.form.signature = res.data.data.signature;
          })
          .catch(err => {
            console.log(err);
          })
      },

      changePass(){
        this.changePassFlag = !this.changePassFlag;
      },

      onSubmit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid || !this.changePassFlag) {
            console.log(this.form);
            let res = {};
            res.username = this.form.username;
            res.password = this.form.newPass;
            res.avatar = this.form.avatar;
            res.signature = this.form.signature
            res.uid = this.form.uid;
            
            this.myAxios({
              url: interfaceUrl.updateUser,
              method: "POST",
              data: res,
            })
              .then(res => {

                
                // 如果改了密码
                if(this.changePassFlag){
                  this.$message({
                    message: '修改成功! 请重新登录!',
                    type: "success",
                    offset: "70"
                  })
                  // 更新用户登录状态
                  // 删除session中的缓存
                  sessionStorage.clear();
                  // 然后更新登录状态
                  let loginData = updateLogin();
                  this.updateLoginData(loginData.loginData);
                  this.updateIsLogin(loginData.isLogin);

                  // 回到首页
                  this.$router.push("/home")
                }else{
                this.$message({
                  message: '修改成功!',
                  type: "success",
                  offset: "70"
                })
                }
              })
              .catch(err => {
                console.log(err);
              })       
          } else {
            console.log('error submit!!');
            return false;
          }
        });        

      },
      
      handleAvatarSuccess(res, file) {
        this.form.avatar = interfaceUrl.imageIp + res.data.url;
      },
    },
    computed: {
      ...mapState({
        loginData: "loginData",
        isLogin: "isLogin"
      })
    },
    created(){
      this.init();
    }

    

  }
</script>
<style scoped>
  .ProfileManage{
    margin-top: 20px;
  }
  .input-username, 
  .input-password,
  .input-signature{
    width: 400px;
    
  }
  .avatar{
    width: 178px;
    height: 178px;
    display: block;
  }


  
</style>
