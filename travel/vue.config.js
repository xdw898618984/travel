
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    //别名
    chainWebpack: (config) => {
        //修改文件引入自定义路径
        config.resolve.alias
            .set('@', resolve('src'))
            .set('styles', resolve('src/assets/styles'))
    },
    devServer: {
        proxy: {
            '/api': {
                target: "http://localhost:8080/",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/mock',
                }
            }
        }
    }


}