<!--
 * @Author: FX
 * @Date: 2021-08-13 15:49:26
 * @Description: 后台管理导航栏
 * @FilePath: \myblog\src\components\AdminNavMenu.vue
-->

<!--  -->
<template>
<div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">文章管理</el-menu-item>
    <el-menu-item index="2">资料设置</el-menu-item>
    <el-menu-item index="3">添加文章</el-menu-item>
  </el-menu>
</div>
</template>

<script>
  export default {
    name: 'AdminNavMenu',
    
    data(){

      return{
        //存储当前所在的路由
        activeIndex: "1",


      }
    },

    methods: {
      handleSelect(index){
        console.log(index);
        if(index == "1"){
          this.$router.push("/admin/article-manage")
          
        }else if(index == "2"){
          this.$router.push("/admin/profile-manage")

        }else if(index == "3"){
          this.$router.push('/admin/article-edit')
        }
      }
    },
    
    mounted() {
      
    },
    


  }
</script>
<style scoped>

  
</style>
