const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        //根据自己的文件路径配
        path.resolve(__dirname, "./src/assets/css/global.less")
      ]
    }
  },
  publicPath: './', // 设置打包文件相对路径
  productionSourceMap: true,
  assetsDir: 'static',
  devServer: {
    port: '8082',
    // host: '0.0.0.0',
    open: true, //配置自动启动浏览器
    proxy: {
      '/api': {
        target: "http://192.168.1.234:8080", //蓝二
        // target: "http://101.37.245.98",    // 服务器
        // target: "http://192.168.1.200:8080",    // 乔峰
        changeOrigin: true, //在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
}