/*
 * @Author: FX
 * @Date: 2021-08-12 17:24:49
 * @Description: 
 * @FilePath: \myblog\src\common\common.js
 */

export function setUserVoucher(res){
  sessionStorage.setItem("uid", res.data.data[0].uid);
  console.log("---------"); console.log(res.data.data[0].uid);
}


export function updateLogin(){
  let data = {
    loginData: {},
    isLogin: null
  }

  // session中有uid这个东西, 说明登录过了
  if(sessionStorage.getItem("uid")){
    
    data.loginData.uid = sessionStorage.getItem("uid");
    data.isLogin = true;
    
  }else {
    // 未登录
    data.loginData.uid = "";
    data.isLogin = false;
  }

  return data;
}