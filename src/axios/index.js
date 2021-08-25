/*
 * @Author: FX
 * @Date: 2021-08-10 18:33:06
 * @Description: 
 * @FilePath: \myblog\src\axios\index.js
 */
import axios from "axios";

const myAxios = new axios.create({})

// 刷新token
// async function refreshTokenRequest() {
//     let {data} = await interfaceUrl.refreshToken({
//         scope: 'read',
//         grant_type: 'refresh_token',
//         refresh_token: myStore.state.loginData.refresh_token
//     })
//     console.log(data)
// }

// 请求拦截器设置
myAxios.interceptors.request.use((config) => {
    // 在发送请求之前做什么
    // console.log(config);
    return config
}, (error) => {
    // 对错误请求做什么
    return Promise.reject(error)
});
// 响应拦截器设置
myAxios.interceptors.response.use((response) => {
    // console.log(response);
    // 对响应数据做些什么
    if (response.status == 401) {
        console.log("401!请重新登录账号！")
    } else if (response.status != 200) {
        console.log(response)
    }
    return response        
}, (error) => {
    // 对响应数据做些什么
    if (error.response.status == 401) {
        console.log("401!请重新登录账号！")
        // 重新获取token
        // refreshTokenRequest()
    } else {
        console.log('错误');
    }
    return error.response     
    // return Promise.reject(error)
});
export default myAxios