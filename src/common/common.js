/*
 * @Author: FX
 * @Date: 2021-08-12 17:24:49
 * @Description: 
 * @FilePath: \myblog\src\common\common.js
 */

export function setUserVoucher(res){
  console.log("setUserVoucher");
  console.log(res);
  sessionStorage.setItem("uid", res.data.data.uid);
  sessionStorage.setItem("username", res.data.data.username);
  sessionStorage.setItem("avatar", res.data.data.avatar);
  sessionStorage.setItem("signature", res.data.data.signature);
  
}


export function updateLogin(){
  let data = {
    loginData: {},
    isLogin: null
  }

  // session中有uid这个东西, 说明登录了
  if(sessionStorage.getItem("uid")){
    
    data.loginData.uid = sessionStorage.getItem("uid");
    data.loginData.username = sessionStorage.getItem("username");
    data.loginData.avatar = sessionStorage.getItem("avatar");
    data.loginData.signature = sessionStorage.getItem("signature");
    data.isLogin = true;
    
  }else {
    // 未登录
    data.loginData.uid = "";
    data.isLogin = false;
  }

  return data;
}