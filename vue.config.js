const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const isProd = () => {
   return process.env.NODE_ENV === 'production';
};

const genPlugins = () => {
   const plugins = [];
   plugins.push(
      new webpack.ProvidePlugin({
         $: 'jquery',
         jQuery: 'jquery',
         'window.jQuery': 'jquery'
      })
   );
   if (isProd()) {
      plugins.push(
         new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
               '\\.(' +
               ['js', 'css'].join('|') +
               ')$'
            ),
            threshold: 10240,
            minRatio: 0.8,
            cache: true
         })
      );

      plugins.push(
         new TerserPlugin({
            terserOptions: {
               warnings: false,
               compress: {
                  drop_console: true,
                  drop_debugger: false,
                  pure_funcs: ['console.log'] //移除console
               },
               output: {
                  comments: false
               }
            },
            sourceMap: false,
            parallel: true
         })
      );
   }

   return plugins;
};

//返回绝对路径
function resolve(dir) {
   //__dirname:当前文件所在的目录
   return path.join(__dirname, dir);
}

module.exports = {
   productionSourceMap: false,
   css: {
      sourceMap: true
   },

   publicPath: '/', // 静态文件路径
   outputDir: 'dist',
   assetsDir: 'assets', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
   lintOnSave: false,
   devServer: {
      hot: true, //热加载
      open: true, //自动打开浏览器
      host: '0.0.0.0',
      port: 8012,
      headers: {"Access-Control-Allow-Origin": "*"},
      proxy: {
         '/webgw': {
            target: 'http://localhost:9102', // 设置你调用的接口域名和端口号
            secure: false,
            changeOrigin: true,     // 跨域
            pathRewrite: {
               '/webgw': ''
            }
         },
      }
   },
   filenameHashing: true, // 关闭hash
   productionSourceMap: false, //关闭map
   chainWebpack: config => {
      //使用webpack引入sass全局变量
      const oneOfsMap = config.module.rule('scss').oneOfs.store;
      oneOfsMap.forEach(item => {
         item
            .use('sass-resources-loader')
            .loader('sass-resources-loader')
            .options({
               resources: './src/assets/css/elementUI/color_1fc2dc/var.scss'
            })
            .end()
      })
   },
   configureWebpack: {
      resolve: {
         extensions: ['.js', '.vue', '.json', '.less', '.css'],
         alias: {
            'src': resolve('src'),
            'assets': resolve('src/assets'),
            'css': resolve('src/assets/css'),
            'images': resolve('src/assets/images'),
            'views': resolve('src/views'),
            'components': resolve('src/components'),
            'api': resolve('src/api'),
            'mixins': resolve('src/mixins'),
            'store': resolve('src/store'),
            'service': resolve('src/service'),
            'validate': resolve('src/service/validate')
         }
      },
      plugins: genPlugins()
   }
};
