<!--
 * @Author: FX
 * @Date: 2021-08-12 16:44:55
 * @Description: 
 * @FilePath: \myblog\src\views\Admin.vue
-->
<!--  -->
<template>
  <div id="damin">
    <div class="wrap">
      <AdminNavMenu></AdminNavMenu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AdminNavMenu from '@/components/AdminNavMenu'

  export default {
    name: 'damin',

    components: {
      AdminNavMenu,
    },
    
    data(){
      return {
        
      }
    }

  }
</script>
<style scoped>
  .wrap{
    padding-top: 70px;
  }
</style>
