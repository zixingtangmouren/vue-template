/**
 * @Author: tangzhicheng
 * @Date: 2021-03-23 16:53:37
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-24 00:12:57
 * @Description: file content
 */

import axiosInstance from './interceptorsHooks'
import store from '../store'
import { appMutations } from '../store/modules/app'
import { Message } from 'element-ui'

const SUCCESS_CODE = 0

/**
 * 业务级请求成功处理
 * @param {*} res
 * @param {boolean} catchError
 * @param {boolean} getData
 * @returns {Promise}
 */
const successHandle = (res, catchError, getData) => {
  return new Promise((resolve) => {
    if (res.code === SUCCESS_CODE) {
      resolve(getData ? res.data : res)
    } else {
      if (catchError) {
        Message.error(res.msg)
      } else {
        resolve(res)
      }
    }
  })
}

/**
 * 自定义处理一个意外的错误
 * @param {import('axios').AxiosError} err
 * @param {boolean} load
 * @param {boolean} catchUnxpected
 * @returns {Promise}
 */
const errorHandle = (err, catchUnxpected) => {
  return new Promise((resolve, reject) => {
    if (catchUnxpected) {
      Message.error(err.message || '请求失败！')
    } else {
      reject(err)
    }
  })
}

/**
 * 请求工具函数
 * @param {import('../types/httpPlugin').RequestOptions} options
 */
export const requets = async (options) => {
  const { method, url, data, config, load = true, catchError = true, catchUnxpected = true, getData = false } = options
  let requestPromise

  if (method === 'GET' || method === 'DELETE') {
    const option = config || {}
    requestPromise = axiosInstance[method.toLocaleLowerCase()](url, { ...option, params: data })
  } else if (method === 'POST' || method === 'PUT') {
    requestPromise = axiosInstance[method.toLocaleLowerCase()](url, data, config)
  }

  if (load) {
    store.commit(appMutations.STRAT_REQUEST)
  }

  try {
    const res = await requestPromise
    // .then((res) => successHandle(res, catchError, getData))
    // .catch((err) => errorHandle(err, catchUnxpected))
    return successHandle(res, catchError, getData)
  } catch (error) {
    return errorHandle(error, catchUnxpected)
  } finally {
    if (load) {
      store.commit(appMutations.END_REQUEST)
    }
  }
}

export default {
  /**
   * 注入http请求工具
   * @param {import('vue').VueConstructor} Vue
   */
  install (Vue) {
    if (!Vue.prototype.$request) {
      Vue.prototype.$request = requets
    } else {
      throw new Error('Vue原型上已存在该属性！')
    }
  }
}
