/*
 * @Author: FX
 * @Date: 2021-08-09 10:37:35
 * @Description: 
 * @FilePath: \myblog\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 自己的
import Home from '@/views/Home'
const MessageBoard = () => import('@/views/MessageBoard')
const About = () => import('@/views/About')
const Admin = () => import('@/views/Admin')
const ArticleDetail = () => import('@/views/ArticleDetail')
const ArticleManage = () => import('@/views/adminViews/ArticleManage')
const ProfileManage = () => import('@/views/adminViews/ProfileManage')

Vue.use(VueRouter)



const routes = [
  {
    path: '',
    redirect: '/home',
    meta: {
      
    }
  },

  // 主页
  {
    path: '/home',
    component: Home,
    meta: {
      
    }
  },
  
  // 留言板
  {
    path: '/messageboard',
    component: MessageBoard,
    meta: {
      
    }
  },

  //随笔日常
  {
    path: "/daily",
    component: () => import('@/views/Daily'),
    meta: {
      
    }
  },
  // 学习笔记
  {
    path: "/study-note",
    component: () => import('@/views/StudyNote'),
    meta: {
      
    }
  },

  // 关于
  {
    path: '/about',
    component: About,
    meta: {
      keepAlive: true,
    }
  },
  // admin
  {
    path: '/admin',
    redirect: '/admin/article-manage',
    component: Admin,
    meta: {
      needLogin: true,
      
    },
    children: [
      {
        path: 'article-manage',
        component: ArticleManage,
        meta: {
          needLogin: true,         
        }
      },
      {
        path: 'profile-manage',
        component: ProfileManage,
        meta: {
          needLogin: true,
        }
      },
      {
        path: 'article-edit',
        component: () => import('@/views/adminViews/ArticleEditor'),
        meta: {
          needLogin: true,
        }
      },

      {
        path: 'comment-pending',
        component: () => import('@/views/adminViews/CommentPending'),
        meta: {
          needLogin: true,
        },
      },
      {
        path: 'comment-manage',
        component: () => import('@/views/adminViews/CommentManage'),
        meta: {
          needLogin: true,
        },
      }

    ]
      
    
    
  },
  
  //文章详情
  {
    path: '/article-detail/:articleId',
    props: true,
    component: ArticleDetail,
  }

]


const router = new VueRouter({
  mode: 'history',
  routes
})

router.afterEach(() => {
  window.scrollTo(0, 0);
});

router.beforeEach((to, from, next) => {
  if(to.meta.needLogin){
    let state = sessionStorage.getItem("uid");
    if(state){
      next();
    }else{
      alert("你还没登陆呢")
      next("/home")
    }
  }
  next();
})


export default router
