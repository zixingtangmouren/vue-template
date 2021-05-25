/**
 * @Author: tangzhicheng
 * @Date: 2021-03-23 20:02:16
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-31 09:47:29
 * @Description: file content
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "space-before-function-paren": 0,
    "camelcase": 0
  }
}
