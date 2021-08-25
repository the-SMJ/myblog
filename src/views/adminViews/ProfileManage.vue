<!--
 * @Author: FX
 * @Date: 2021-08-13 20:53:18
 * @Description: 个人资料设置
 * @FilePath: \myblog\src\views\adminViews\ProfileManage.vue
-->

<!--  -->
<template>
  <div>
    <h1>资料设置</h1>
  </div>
</template>

<script>
  export default {
    name:'ProfileManage',

    data(){
      return{
        
      }
    },
    
    methods: {
      init(){
        this.myAxios({
          url: "",
          method: "GET",
        }).then(res => {

        }).catch(err =>{
          
        })
      }
    },
  }
</script>
<style scoped>
  
</style>
