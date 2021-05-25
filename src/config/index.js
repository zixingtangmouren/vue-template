/**
 * @Author: tangzhicheng
 * @Date: 2021-03-23 16:50:38
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-24 00:22:04
 * @Description: file content
 */

const CONFIG = {
  // 代理
  proxy: {
    [process.env.VUE_APP_BASE_API]: {
      target: 'http://127.0.0.1:7001', // 测试
      // target: 'http://192.168.50.88:8086/',
      changeOrigin: true,
      secure: false,
      ws: true,
      pathRewrite: {
        ['^' + process.env.VUE_APP_BASE_API]: ''
      }
    }
  }
}

module.exports = CONFIG
