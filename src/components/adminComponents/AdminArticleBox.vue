<!--
 * @Author: FX
 * @Date: 2021-08-25 17:37:32
 * @Description: 后台文章管理的文章组件
 * @FilePath: \myblog\src\components\adminComponents\AdminArticleBox.vue
-->

<!--  -->
<template>
  <div>

  </div>
</template>

<script>
  export default {
    name: 'AdminArticleBox',

    data(){
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎王小虎王小虎王小虎王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '张三',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '李四',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
        ],

        search: "",
      }
    },

    props: {

    }

  }
</script>
<style scoped>
  
</style>
