<!--
 * @Author: FX
 * @Date: 2021-08-09 16:01:34
 * @Description: 
 * @FilePath: \myblog\src\views\Home.vue
-->

<!--  -->
<template>
  <div id="Home">
    <div class="wrap">
      <div class="article-box-wrap"
        v-for="(item, index) in dataList" :key="index">
        <ArticleBox class="article-box" :data="item"></ArticleBox>
      </div>
      <div class="pageination">
        <el-pagination
          background=""
          layout="sizes, prev, pager, next"
          :total="total"
          :page-size="pageSize"
          :page-sizes="[5, 10, 20]"
          @size-change="handleSizeChange"
          :current-page="pageNum"
          @current-change="handleCurrentChange"
          >
        </el-pagination>          
      </div>      
    </div>
  </div>
</template>

<script>
import ArticleBox from '../components/ArticleBox.vue';
import TopNavMenu from '../components/TopNavMenu.vue';
import interfaceUrl from '@/common/interfaceUrl';
import ArticleDetail from '@/views/ArticleDetail'
  export default {

    name: 'Home',


    components: { 
      TopNavMenu, 
      ArticleBox,
      
    },
    data(){
      return {
        dataList: null,
        total: null,
        pageNum: 1, // 初始时为第一页
        pageSize: 5, //默认每页5条          
      };
    },

    methods: {
      getData(pageNum, pageSize){
        this.myAxios({
          url: interfaceUrl.getAllArticle,
          method: "GET",
          params: {
            pageNum: pageNum,
            pageSize: pageSize
          }
        }).then(res => {
          this.dataList = res.data.data.data
          this.total = res.data.data.total
          
        }).catch(err => {
          console.log(err);
        })

      },
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
    },
    created(){
      this.getData(this.pageNum, this.pageSize);
    }
    
  }
</script>
<style scoped>

  @media screen and (min-width: 630px){ 
    .wrap{
      padding-top: 70px;
      background-color: #F8F9FA;
    }

    .article-box-wrap{
      width: 925px;
      margin: 0 auto;
      
    }
    .article-box{
      margin-bottom: 30px;
    }
    .pageination{
      width: 22%;
      margin: 20px auto;
      padding-bottom: 50px;
    }
  }

  
  @media screen and (max-width: 630px){
    .wrap{
      padding-top: 20px;
      background-color: #F8F9FA;
    }
    .article-box{
      margin-bottom: 3vh;
    }
    .pageination{
      width: 80%;
      margin: 2vh auto;
      padding-bottom: 10vh;
    }    
  }
</style>
