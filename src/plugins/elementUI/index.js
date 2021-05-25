/**
 * @Author: tangzhicheng
 * @Date: 2021-03-23 18:41:02
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-25 18:49:35
 * @Description: file content
 */

import { Button, MessageBox, Message, Loading, Form, FormItem, Input } from 'element-ui'

/**
 * 聚合注入ElementUI的组件
 * @param {import('vue').VueConstructor} Vue
 */
const install = function (Vue) {
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(Input)

  Vue.component(Button.name, Button)
  Vue.component(MessageBox.name, MessageBox)
  Vue.component(Message.name, Message)
  Vue.use(Loading.directive)

  Vue.prototype.$loading = Loading.service

  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$message = Message
  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
}

export default {
  install
}
