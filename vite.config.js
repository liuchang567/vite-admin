const path = require('path')

module.exports = {
  port: 8899,
  open: true,
  alias: {
    // 路径映射必须以/开头和结尾
    "/@/": path.resolve(__dirname, './src')
  },
  plugins: [],
  proxy: {}
}