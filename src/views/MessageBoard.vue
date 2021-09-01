<!--
 * @Author: FX
 * @Date: 2021-08-09 22:14:03
 * @Description: 留言板 
 * @FilePath: \myblog\src\views\MessageBoard.vue
-->
<!--  -->
<template>
  <div id="MessageBoard">
    <div class="wrap">
      <div class="main-wrap">
        <!-- 公告栏 -->
        <div class="board-wrap">
          <BulletinBoard class="bulletin-board">
            <template v-slot:title>
              <h1>
                🏡留言板
              </h1>
            </template>
            <template v-slot:content>
              <p style="font-size: 20px">有啥想对我说的，来吧！！！</p>
            </template>
          </BulletinBoard>
        </div>

        <!-- 留言板块 -->
        <div class="comment-wrap">
          <div class="title">
            <span>💬页面评论</span>
          </div>
          <hr class="line">

          <!-- 留言列表 -->
          <div class="comment-list">
            <ul class="list">
              <li class="list-item" 
                v-for="(item, index) in dataList" 
                :key="index"
              
                >
                <div class="list-item-wrap">
                  <div class="nickname">
                    {{item.nickname}}
                  </div>
                  <div class="create-time">
                    {{timeFormat(item.createTime)}}
                  </div>
                  <div class="content">
                    {{item.content}}
                  </div>
                  
                </div>
              </li>
            </ul>
          </div>
          <div class="pageination">
              <el-pagination
                
                layout="total, prev, pager, next"
                :total="total"
                small
                :page-size="pageSize"
                :page-sizes="[5, 10, 20]"
                @size-change="handleSizeChange"
                :current-page="pageNum"
                @current-change="handleCurrentChange"
                >
              </el-pagination>        
          </div>          
          <!-- 输入框 -->
          <InputBox></InputBox>
        </div>
        
      </div>
      <div class="aside-wrap">
        <PersonalCard></PersonalCard>
      </div>      

    </div>
    


  </div>
</template>

<script>
import BulletinBoard from '../components/BulletinBoard.vue'
import PersonalCard from '../components/PersonalCard.vue'
import InputBox from '@/components/InputBox'
import interfaceUrl from '@/common/interfaceUrl'
import dateFormat from '@/common/dateFormat'
  export default {
    components: {
     BulletinBoard,
     PersonalCard,
     InputBox,
    },
    name: 'MessageBoard',
    data(){
      return {
        dataList: [],
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
              console.log(this.dataList);
            }else{
              this.$message({
                message: '获取留言列表失败',
                type: "error",
                offset: "70"
              })              
            }

          })
          .catch(err => {

            this.$message({
              message: '获取留言列表失败',
              type: "error",
              offset: "70"
            })             
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

      timeFormat(createTime){
        return dateFormat("YY年mm月dd日", new Date(createTime))
      }   
    },

    computed: {

    },


    created(){
      this.getData(this.pageNum, this.pageSize)
    }
  }
</script>
<style lang="less" scoped>

  #MessageBoard{
    background-color: var(--bs-bgwhite);
    
  }
  
</style>

// 电脑端
<style scoped lang="less">

@media screen and (min-width: 631px){
    .wrap{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 62%;
    min-width: 1000px;
    margin: 0 auto;
    padding-top: 100px;
  }
  
  .aside-wrap{
    width: 257px;
  }

  .comment-wrap{
    border: 1px solid #e9ecef;
    background-color: var(--bs-white);
    min-height: 5rem;
    border-radius: 8px;
    color: var(--bs-dark);
    padding: 2rem;
    margin-top: 30px;
    width: 650px;     
  }


  .title{
    font-size: 15px;
  }

  .line{
    margin: 20px 0;
  }  

  .list-item-wrap{
    border: 1px solid #e9ecef;
    border-radius: 4px;
    margin: 10px auto;
    padding: 20px;
    font-size: 18px;
  }
  .nickname{
    font-weight: 700;
  }
  
  .create-time{
    font-size: 12px;
    margin-top: 2px;
    margin-left: 10px;
    color: #b3b3b3;
  }
  .content{
    margin-top: 30px;
    white-space: pre-line;
    margin-left: 20px;
  }
  .pageination{
    width: 180px;
    margin: 10px auto;
  }
}


</style>


<style lang="less" scoped>
// 手机
 @media screen and (max-width: 630px) {
    .aside-wrap{
      display: none;
    }

    .wrap{
      padding-top: 2vw; 

    }

    .comment-wrap{
      border: 1px solid #e9ecef;
      background-color: var(--bs-white);
      color: var(--bs-dark);     
      margin-top: 2vh; 
      padding: 1rem;
    }

    .title{
      font-size: 0.8rem;
    }

    .line{
      margin: 2.4vh 0;
    }
    .list-item-wrap{
      border: 1px solid #e9ecef;
      border-radius: 1vw;
      margin: 2vh auto;
      padding: 2vw;
      font-size: 1rem;
    }
    .nickname{
      font-weight: 700;
    }
    
    .create-time{
      font-size: 0.6rem;
      margin-top: 0.6vh;
      margin-left: 2vw;
      color: #b3b3b3;
    }
    .content{
      margin-top: 2vh;
      white-space: pre-line;
      margin-left: 4vw;
    }
    .pageination{
      width: 60%;
      margin: 10px auto;
    }    
 } 


</style>