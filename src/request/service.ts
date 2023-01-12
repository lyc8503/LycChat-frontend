import axios from "axios";
import {BASE_URL} from "../config";
import {message} from "antd";
import _ from "lodash";


interface ServiceConfig {
  showErrorOnPage?: boolean
  showErrorFunc?: Function
}

function getService(config: ServiceConfig = {showErrorOnPage: true, showErrorFunc: message.error}) {
  const service = axios.create({
    baseURL: BASE_URL
  })

  // 请求拦截器
  service.interceptors.request.use(config => {
    console.log(config)

    const token = window.localStorage.getItem('token')
    _.defaults(config.headers, {'token': token})

    return config
  }, error => {
    console.error("请求错误 " + error, error)
    return Promise.reject(error)
  })

  // 响应拦截器
  service.interceptors.response.use(response => {
    return response.data.data
  }, function (error) {
    console.error("请求返回非 2xx " + error, error)

    if (config.showErrorOnPage) {
      // antd 页面提示
      if (error.response.data === undefined || error.response.data.msg === undefined) {
        config.showErrorFunc?.("网络错误, 请稍后再试")
      } else {
        config.showErrorFunc?.(error.response.data.msg)
      }
    }

    return Promise.reject(error)
  })

  return service
}

const service = getService()
const backgroundService = getService({
  showErrorOnPage: false
})

// service 是默认情况的 service (在页面上显示错误), 可用 getService 传入自定义参数
export {
  service, backgroundService, getService
}
