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
  </el-tabs>
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
      handleClick(item){
        console.log(item.index);
        let index = item.index;
        if(index == "0"){
          this.$router.push("/admin/article-manage")
          
        }else if(index == "1"){
          this.$router.push("/admin/profile-manage")

        }else if(index == "2"){
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
