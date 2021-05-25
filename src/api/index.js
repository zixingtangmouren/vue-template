/**
 * @Author: tangzhicheng
 * @Date: 2021-03-23 18:52:48
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-31 09:40:52
 * @Description: file content
 */

import UserApi from './user'
import AddressApi from './address'

const apiStore = {
  UserApi,
  AddressApi
}

export default {
  /**
   *
   * @param {import("vue").VueConstructor} Vue
   */
  install(Vue) {
    Vue.prototype.$api = apiStore
  }
}
