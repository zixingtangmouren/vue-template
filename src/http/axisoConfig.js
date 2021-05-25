/**
 * @Author: tangzhicheng
 * @Date: 2021-03-23 16:55:15
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-23 17:18:55
 * @Description: axios实例基本配置
 */

import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 30000,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  responseType: 'json',
  validateStatus: function (status) {
    return status >= 200 && status < 300 // 默认的
  }
})

export default axiosInstance
