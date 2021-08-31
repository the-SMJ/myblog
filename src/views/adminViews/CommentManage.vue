<!--
 * @Author: FX
 * @Date: 2021-08-31 17:00:18
 * @Description: 留言审核
 * @FilePath: \myblog\src\views\adminViews\CommentManage.vue
-->

<template>
  <div id="CommentManage">
    <el-table
      :data="dataList"
      style="width: 100%"
      border
      resizable
      :default-sort = "{prop: 'createTime', order: 'descending'}"
      @selection-change="handleSelectionChange"
    >
      
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        prop="id"
        label="id"
        width="55"
        align="center">
      </el-table-column>

      <el-table-column
        label="发布时间"
        sortable
        width="200"
        prop="createTime"
        align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ new Date(scope.row.createTime).toLocaleString()}}</span>
        </template>        
      </el-table-column>    
      <el-table-column
        prop="nickname"
        label="昵称"
        width="200"
        align="center">
      </el-table-column>        
      <el-table-column
        prop="content"
        label="留言内容"
        width="900"
        header-align="center">
      </el-table-column>

      <el-table-column
        
        align="right"
        fixed="right"
        width="80"        
        >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>        
      </el-table-column>        
    </el-table>
    <div class="pageination">
        <el-pagination
          background
          layout="total,sizes, prev, pager, next,jumper"
          :total="total"
          :page-size="pageSize"
          :page-sizes="[5, 10, 20]"
          @size-change="handleSizeChange"
          :current-page="pageNum"
          @current-change="handleCurrentChange"
          >
        </el-pagination>        
    </div>
    <div class="deleteSelected">
      <el-button type="danger" @click="deleteSelected()">删除所选</el-button>
    </div>

  </div>
</template>

<script>
import interfaceUrl from '@/common/interfaceUrl'
  export default {
    name: 'CommentManage',

    data(){
      return {
        dataList: [],
        search: '',
        selectedRow: [],
        total: null,
        pageNum: 1, // 初始时为第一页
        pageSize: 5, //默认每页5条
      }
    },

    methods: {

      getData(pageNum, pageSize){
        // 创建时, 请求文章列表数据
        this.myAxios({
          url: interfaceUrl.getAcceptComment,
          method: "GET",
          params: {
            pageNum: pageNum,
            pageSize: pageSize, // 一页请求5条数据
          }
        }).then(res => {

            if(res.data.code == 0){
              this.dataList = res.data.data.data;
              this.total = res.data.data.total;
            }else{
              this.$message({
                message: '获取审核留言列表失败',
                type: "error",
                offset: "70"
              })              
            }

          })
          .catch(err => {

            this.$message({
              message: '获取审核留言列表失败',
              type: "error",
              offset: "70"
            })             
            console.log(err);

          })
      },
      // 页码发生变化时触发
      handleCurrentChange(val){
        // 设置当前页码
        this.pageNum = val;
        // 重新请求数据
        this.getData(this.pageNum, this.pageSize)
      },
      // 每页条数发生变化时触发
      handleSizeChange(val){
        // 根据选定的值设置每页条数
        this.pageSize = val;
        // 重新请求数据
        this.getData(this.pageNum, this.pageSize)
      },

      // select选中时触发
      handleSelectionChange(selection){
        this.selectedRow = selection;
        console.log(this.selectedRow);
      },
      // 点击"删除"按钮触发
      handleDelete(index, row){
        let selected = [];
        selected.push(row);
        this.deleteDataList(selected);
      },
      deleteSelected(){
        console.log("deleteSelected");
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
          url: interfaceUrl.deleteAcceptCommentByIdArray,
          method: "POST",
          data: idList,
        }).then(res => {
            if(res.data.code == 0){
              this.$message({
                message: '删除成功!',
                type: 'success',
                offset: "70"
              });
              // 重新获取数据
              this.getData(this.pageNum, this.pageSize);            
            }else{
              this.$message({
                showClose: true,
                message: '删除失败',
                type: 'error',
                offset: '70',
              });
              console.log(res);
            }
            console.log(res);
        }).catch(err => {
            this.$message({
              showClose: true,
              message: '删除失败',
              type: 'error',
              offset: '70',
            });
            console.log(err);
        })
        

      },  

    },

    created(){
      this.getData(this.pageNum, this.pageSize);
    }


  }
</script>
<style scoped>
  #CommentManage{
    position: relative; 
  }
  .pageination{
    width: 300px;
    margin: 10px auto;
  }
  .deleteSelected{
    
    position: absolute;
    right: 10px;
    bottom: -10px;
  }
</style>
