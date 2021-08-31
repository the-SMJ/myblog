/*
 * @Author: FX
 * @Date: 2021-08-11 19:08:17
 * @Description: 
 * @FilePath: \myblog\src\common\interfaceUrl.js
 */



let interfaceUrl = {
  ip: 'http://localhost:9090',

  //nginx图片服务器的地址
  imageIp: 'http://1.15.135.190',

  // 获取所有文章
  getAllArticle: "/api/article/all",

  //根据文章id获取文章详细内容
  
  getArticleById: "/api/article/getArticleById",

  //根据文章标签id获取文章
  getArticleByTagId: "/api/article/getArticleByTagId",

  // 根据登录的id获取用户信息
  getUserById: "/api/user/getUserById",
  //更新用户信息
  updateUser: "/api/user/updateUser",
  
  // 用户查看文章后, 增加views

  addArticleViews: "/api/article/addArticleViews",
  
  // 提交评论审核接口
  commentPendding: "/api/comment/addPendingComment",
  // 评论审核通过接口
  
  // 获取待审核评论
  getPendingComment: "/api/comment/getPendingComment",
  
  // 删除待审核评论
  deletePendingCommentByIdArray: "/api/comment/deletePendingCommentByIdArray",
  acceptPendingCommentByIdArray: "/api/comment/acceptPendingCommentByIdArray",

  // 获取已通过的可以展示的评论
  getAcceptComment: "/api/comment/getAcceptComment",
  deleteAcceptCommentByIdArray: "/api/comment/deleteAcceptCommentByIdArray"
}

export default interfaceUrl
