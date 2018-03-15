/**
 * 功能说明：封装请求
 */
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 20000                  // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})
service.interceptors.response.use(
  respond => {
    let res = respond.data
    if (typeof res.data === 'object') {
      return Promise.resolve(res.data)
    }
    try {
      let data = JSON.parse(res.data)
      return Promise.resolve(data)
    } catch (e) {
      console.log(e)
    }
  },
  error => {
    console.log(error)
    // 这里添加提示信息
    return Promise.reject(error)
  }
)
export default service