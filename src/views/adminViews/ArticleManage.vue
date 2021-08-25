<!--
 * @Author: FX
 * @Date: 2021-08-13 16:21:59
 * @Description:文章管理 
 * @FilePath: \myblog\src\views\adminViews\ArticleManage.vue
-->
<!--  -->
<template>
  <div>
  <el-table
    :data="dataList.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
    
    border
    @selection-change="handleSelectionChange"
    >

    <el-table-column
      type="selection"
      width="55">
    </el-table-column>

    <el-table-column label="id" width="50">
      <template slot-scope="scope">
        
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="日期"
      width="220"
      >
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ new Date(scope.row.createTime).toLocaleString()}}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="标题"
      width="1020"
      show-overflow-tooltip
      resizable>
      <template slot-scope="scope">
        
        <span style="margin-left: 10px">{{ scope.row.title }}</span>
      </template>
    </el-table-column>

    <el-table-column
      align="right"
      fixed="right"
      width="150"
      >
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>      
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    

  </el-table>
  <div style="width: 100px; margin: 20px auto">
    <el-button @click="deleteSelected()">删除所选</el-button>
  </div>
  </div>
</template>

<script>

import interfaceUrl from '@/common/interfaceUrl'
import dateFormat from '@/common/dateFormat'
  export default {
    name: 'ArticleManage',

    data(){
      return {
        dataList: [],
        search: '',
        selectedRow: [],
      }
    },

    methods: {
      handleEdit(index, row){
        console.log(index);
        console.log(row);
      },
      handleDelete(index, row){
  
        let selected = [];
        selected.push(row);

        this.deleteDataList(selected);
      },
      handleSelectionChange(selection){
        this.selectedRow = selection;
     
      },
      deleteSelected(){
        this.deleteDataList(this.selectedRow)
      },
      
      deleteDataList(List){
        // 根据传进来的List数组, 请求后端删除对应的数据
        // 取得id
        let idList = [];
        for(let item of List){
          idList.push(item.id);
        }
        this.myAxios({
          url: "/api/article/delete",
          method: "POST",
          data: idList,
        }).then(res => {
            this.$message({
              message: '删除成功!',
              type: 'success',
              offset: "70"
            });
            this.init();
          console.log(res);
        }).catch(err => {
            this.$message().error("删除失败!");
            console.log(err);
        })
        

      },
      init(){
        // 创建时, 请求文章列表数据
        this.myAxios({
          url: interfaceUrl.getAllArticle,
          method: "GET",
        }).then(res => {
            this.dataList = res.data.data;
          })
          .catch(err => {
            console.log(err);
          })
      }
    },

    created() {
      // 创建时, 请求文章列表数据
      this.init();
    },
    
  }
</script>
<style scoped>
  
</style>