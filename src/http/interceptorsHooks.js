/**
 * @Author: tangzhicheng
 * @Date: 2021-03-23 17:19:01
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-02 11:52:17
 * @Description: file content
 */

import axiosInstance from './axisoConfig'
import store from '../store'
import { MessageBox } from 'element-ui'

/**
 * 设置头部token
 * @param {import('axios').AxiosRequestConfig} config axios配置
 * @returns {import('axios').AxiosRequestConfig}
 */
const setToken = (config) => {
  if (store.state.user.token) {
    config.headers.authorization = 'Bearer ' + store.state.user.token
  }

  return config
}

const requestErrorHandle = error => Promise.reject(error)

axiosInstance.interceptors.request.use(setToken, requestErrorHandle)

/**
 * 取出成功响应的数据内容
 * @param {import('axios').AxiosResponse} response 响应结果
 * @returns {any}
 */
const getResData = (response) => {
  return response.data
}

/**
 * http级错误响应处理
 * @param {import('axios').AxiosError} error
 */
const responseErrorHandle = (error) => {
  // 对响应错误做点什么
  const { status } = error.response
  // TODO:到时候还要判断一个没有权限的情况
  if (status && (status === 401 || status === 402)) { // 统一拦截401
    error.message = '账号登陆过期，请重新登陆'
    MessageBox.confirm(
      '账号登陆过期，您可以取消继续留在该页面，或者重新登录',
      '确定退出',
      {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }
    ).then(() => {
      // 退出登录，清除token和数据的操作
      location.reload()
    })
  }
  return Promise.reject(error)
}

axiosInstance.interceptors.response.use(getResData, responseErrorHandle)

export default axiosInstance
