/**
 * @Author: tangzhicheng
 * @Date: 2021-03-23 16:47:16
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-24 00:20:38
 * @Description: file content
 */
const path = require('path')
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 项目配置
const projectConfig = require('./src/config/index')
// const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

const devServerPort = 80
const name = 'big-screen-template'

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/moc',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: devServerPort,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    progress: false,
    // 配置proxy代理
    proxy: projectConfig.proxy
  },
  // 全局样式注入
  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'scss',
  //     patterns: [
  //       path.resolve(__dirname, 'src/styles/_variables.scss'),
  //       path.resolve(__dirname, 'src/styles/_mixins.scss')
  //     ]
  //   }
  // },
  chainWebpack (config) {
    config.set('name', name)
    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .optimization.splitChunks({
              chunks: 'all',
              // 其他三方模块
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial'
                },
                // 公共组件模块
                commons: {
                  name: 'chunk-commons',
                  test: path.resolve(__dirname, 'src/components'),
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
    // if (process.env.NODE_ENV === 'production') {
    //   config.plugin('compressionPlugin')
    //     .use(new CompressionWebpackPlugin({
    //       filename: '[path].gz[query]',
    //       algorithm: 'gzip',
    //       test: productionGzipExtensions,
    //       threshold: 10240,
    //       minRatio: 0.8,
    //       deleteOriginalAssets: true
    //     }));
    // }
  },
  configureWebpack (config) {
    if (process.env.NODE_ENV === 'production') {
      // 消除生产环境的console.log
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  }
}
