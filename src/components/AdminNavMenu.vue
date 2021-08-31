<!--
 * @Author: FX
 * @Date: 2021-08-13 15:49:26
 * @Description: 后台管理导航栏
 * @FilePath: \myblog\src\components\AdminNavMenu.vue
-->

<!--  -->
<template>
<div>
  <el-tabs  class="el-menu-demo" mode="horizontal" @tab-click="handleClick">
    <el-tab-pane label="文章管理" name="0"></el-tab-pane>
    <el-tab-pane label="资料设置" name="1"></el-tab-pane>
    <el-tab-pane label="添加文章" name="2"></el-tab-pane>
    <el-tab-pane label="留言审核" name="3"></el-tab-pane>
    <el-tab-pane label="留言管理" name="4"></el-tab-pane>

  </el-tabs>
</div>
</template>

<script>
  export default {
    name: 'AdminNavMenu',
    
    data(){
      return{
      }
    },

    methods: {
      handleClick(item){
        let index = item.index;
        if(index == "0"){
          this.$router.push("/admin/article-manage")

        }else if(index == "1"){
          this.$router.push("/admin/profile-manage")

        }else if(index == "2"){
          this.$router.push('/admin/article-edit')

        }else if(index == "3"){
          this.$router.push('/admin/comment-pending')

        }else if(index == "4"){
          this.$router.push('/admin/comment-manage')
          
        }
      }
    },
    
    mounted() {
      
    },
    


  }
</script>
<style scoped>

  
</style>
