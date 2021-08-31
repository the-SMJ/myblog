<!--
 * @Author: FX
 * @Date: 2021-08-31 13:44:29
 * @Description: 留言评论编辑组件
 * @FilePath: \myblog\src\components\InputBox.vue
-->

<template>
  <div id="InputBox">
    <el-form ref="form" :model="form" label-width="80px">

      <el-form-item label="昵称" label-width="60px">
        <div class="nickname-input">
          <el-input v-model="form.nickname" 
          
            placeholder="输入你的昵称" 
            size="mini"
            maxlength="20"
            show-word-limit
            
          ></el-input>
        </div>
        
        <div class="textarea-input">
          <el-input v-model="form.content" 
            placeholder="留言内容"
            type="textarea"
            clearable
          >
          </el-input>
        </div>
        <div class="submit-button">
          <el-button type="success" size="mini" @click="onSubmit">提交</el-button>
        </div>
      </el-form-item>      

      
    </el-form>
  </div>
</template>

<script>
import interfaceUrl from '@/common/interfaceUrl'
  export default {
    name: 'InputBox',

    data(){
      return {
        form: {
          nickname: '',
          content: '',
        },
      }
    },


    methods: {
      onSubmit(){
        
        console.log(this.form);
        let _self = this
        this.myAxios({
          url: interfaceUrl.commentPendding,
          method: "POST",
          data: _self.form,
        }).then(res => {
          let code = parseInt(res.data.code);
          if(code == 0){
            this.$message({
              message: '评论成功, 正在人工审核中...',
              type: "success",
              offset: "70"
            })
          }else if(code == -1){
            this.$message({
              message: '评论失败!看看控制台报错?',
              type: "error",
              offset: "70"
            })
          }

        }).catch(err => {
          console.log(err);
          this.$message({
            message: '评论失败!看看控制台报错?',
            type: "error",
            offset: "70"
          })          
        })
      }
    },



  }
</script>
<style scoped>
  #InputBox{
    border: 1px solid #e9ecef;
    border-radius: 4px;
    padding-right: 20px;
    
  }

  .nickname-input{
    width: 250px;
  }

  .submit-button{
    float: right;
  }

</style>

<style>

#InputBox .el-input__inner {
	width: 220px;
	border-top-width: 0px;
	border-left-width: 0px;
	border-right-width: 0px;
	border-bottom-width: 1px;
	/*outline: medium;*/
}
</style>