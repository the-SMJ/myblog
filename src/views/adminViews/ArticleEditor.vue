<!--
 * @Author: FX
 * @Date: 2021-08-13 21:19:29
 * @Description: 添加文章的编辑器
 * @FilePath: \myblog\src\views\adminViews\ArticleEditor.vue
-->

<!--  -->
<template>
  <div id="ArticleEditor">
    <div class="wrap">
      <el-form ref="form" :model="form" label-width="80x">
        <el-form-item label="文章封面">
          <el-upload
            class="avatar-uploader"
            action="/api/article/fileUpload"
            :show-file-list="true"
            :on-success="handleAvatarSuccess"
            >
            <img v-if="form.avatar" :src="form.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          
        </el-form-item>
        
        <el-form-item label="文章标题">
          <el-input v-model="form.title" placeholder=""></el-input>
        </el-form-item>
        
        <el-form-item label="文章简介">
          <el-input v-model="form.introduction"></el-input>
        </el-form-item>
        
        <el-form-item label="文章标签">
          <el-select v-model="form.tagid" :placeholder="form.tagid">
            <el-option label="随笔日常" value="1"></el-option>
            <el-option label="学习笔记" value="2"></el-option>
          </el-select>
        </el-form-item>


        <!-- 编辑器 -->
        <el-form-item>
          <div class="wangEditor">
            <div ref="editor">

            </div>
          </div>
        </el-form-item>




        
        <el-form-item>
          <el-button type="primary" @click="onSubmit" >立即创建</el-button>
        </el-form-item>
        
      </el-form>
      
      
    </div>
    
  </div>
</template>

<script>
import UrlConfig from '@/common/interfaceUrl'
import E from "wangeditor"
  export default {
    name: 'ArticleEditor',
    data(){
      
      return {
        editor: null,
        form: {
          id: "",
          uid: 1,
          tagid: null,
          title: "",
          avatar: "",
          introduction: "",
          content: "",
          views: 0,
        },
        
      }
    },

    methods: {
      
      onSubmit(){
        console.log("------form: ");
        console.log(this.form);
        let _self = this;
        this.myAxios({
        
          url: "/api/article/articleUpload",
          method: "POST",
          data: _self.form,
          
        }).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      },

      initEditor(){
        let _self_ = this;
        this.editor = new E(this.$refs.editor);
        
        this.editor.config.onchange = (newHtml) => {
        this.form.content = newHtml
        }
        this.editor.config.zIndex = 100
        this.editor.config.uploadImgServer = '/api/article/fileUpload'
        this.editor.config.customUploadImg = function (resultFiles, insertImgFn) {
          // resultFiles 是 input 中选中的文件列表
          // insertImgFn 是获取图片 url 后，插入到编辑器的方法

          // 上传图片，返回结果，将图片插入到编辑器中

          _self_.uploadFile(resultFiles[0], callback => {
            // 调用uploadFile方法, 将图片传到服务器上
            // 这里提供一个回调函数给uploadFile方法
            callback
              .then(res => {

                // 将后端返回的图片url插入编辑器
                let imageUrl = UrlConfig.imageIp + res.data.data.url;
                console.log(UrlConfig.imageIp);
                console.log(res.data.data.url);
                insertImgFn(imageUrl);
                
              })
              .catch(err => {
                console.log(err);
              })
              
              
          })
          
        }
        this.editor.create();
      },
    
      uploadFile(file, callback){
        const formData = new FormData();
        formData.append("file", file); 

        callback(this.myAxios({
          url: "/api/article/fileUpload",
          method: "POST",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data;",
          }
        }))
        
      },


      // 头像上传成功回调函数
      handleAvatarSuccess(res, file) {
        console.log(res);
        console.log(file);
        URL.createObjectURL(file.raw);
        this.form.avatar = UrlConfig.imageIp + res.data.url;
      },
    },
    
    mounted() {
      this.initEditor();

    }, 
    
    beforeDestroy(){
      this.editor.destroy()
      this.editor = null
    }

  }
</script>
<style scoped>

  /* 文章封面上传 */
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px dashed #d9d9d9;
    border-radius: 4px;
    margin: 20px 0;
  }

  .avatar{
    width: 178px;
    height: 178px;
    display: block;
  }
  
</style>

<style lang="less">
  .element.style{
    z-index: 99999;
  }
</style>
