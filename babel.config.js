/**
 * @Author: tangzhicheng
 * @Date: 2021-03-23 16:45:50
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-23 18:39:57
 * @Description: file content
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
