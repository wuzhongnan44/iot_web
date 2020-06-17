# 位移形变监测系统v3.0

### 安装
```
npm i @fxft/vue-select-tree -S --registry=http://npm.fxft.online:7001/

npm install
```
vue-select-tree使用文档：http://npm.fxft.online:7002/package/@fxft/vue-select-tree

### 开发启动
```
npm run serve   //基于微服务-启动
serve:singlerun //独立运行
```

### 生产打包
```
npm run build   //基于微服务-打包
build:singlerun //独立打包
```

### 生产打包发布
```coffeescript
mvn clean compile http-deploy:uploadVue
```
g
### 本地开发步骤
***
- 注释`vue.config.js`的`configureWebpack.externals`选项
- 注释`main.js`的`single-spa`配置，开启`vue`实例
- 注意点：发布的时候把这些注释去除

### 独立运行
***
使用 cross-env 设置环境变量，在入口js文件中访问环境变量 process.env.VUE_APP_SINGLERUN 的值决定是否new 一个vue根实例
```coffeescript
npm install cross-env -D
```

### 配置跨域访问
```coffeescript
devServer: {
   headers: {"Access-Control-Allow-Origin": "*"}
}
```
由于子项目的资源需要在入口项目中访问，所以需要在子项目中配置跨域访问

### 加载一个全局css设置文件
***
在每个组件里加载一个设置文件，而无需每次都将其显式导入，是一个常见的需求。比如为所有组件全局使用 scss 变量。为了达成此目的：
```
npm install sass-resources-loader --save-dev
```
然后增加下面的 webpack 规则：
```$xslt
// vue.config.js
module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: './path/to/resources.scss',

          // Or array of paths
          resources: ['./path/to/vars.scss', './path/to/mixins.scss']
        })
        .end()
    })
  }
}

//或者
{
  loader: 'sass-resources-loader',
  options: {
    resources: path.resolve(__dirname, '../src/style/_variables.scss')
  }
}
```

### 资源的访问路径
***
由于子项目的资源是在入口项目(入口项目和子项目在不同的域)中访问，所以需要将子项目的 publicPath 设置为完整的路径（即：包括协议和域名），这样才能保证子项目的资源能够正确加载。output.publicPath

### 各个应用间进行通信
使用浏览器自定义事件来实现各个应用间的通讯
***
```coffeescript
// customers
window.dispatchEvent(new CustomEvent('logout'));

// other-project
 window.addEventListener('logout',handler);
```

### 隔离css样式
***
使用webpack，postcss在构建阶段为业务的所有 CSS 都加上自己的作用域,在vue.config.js中配置
```coffeescript
css: {
      loaderOptions: {
         postcss: {
            plugins: [require('postcss-plugin-namespace')('.ascs-system', {ignore: ['*']})]
         }
      }
   }
```

### 基于主动安全项目的共用库引入
***
- 使用`git submodule`方式引入
- submodule库地址: ssh://gogs@git.fxft.net:2222/frontend/ascs-module.git

#### 子模块使用方法（git submodule)
***
#### 子模块的添加
***
其中，url为子模块的路径，path为该子模块存储的目录路径。

执行成功后，git status会看到项目中修改了.gitmodules，并增加了一个新文件（为刚刚添加的路径）
```
git submodule add <url> <path>
```

#### 子模块的使用
***
克隆项目后，默认子模块目录下无任何内容。需要在项目根目录执行如下命令完成子模块的下载：
```coffeescript
git submodule init
git submodule update
```
或
```coffeescript
git submodule update --init --recursive
```
执行后，子模块目录下就有了源码

#### 子模块的更新
***
子模块的维护者提交了更新后，使用子模块的项目必须手动更新才能包含最新的提交。

在项目中，进入到子模块目录下，执行 git pull更新，查看git log查看相应提交。

完成后返回到项目目录，可以看到子模块有待提交的更新，使用git add，提交即可。

#### 子模块的删除
***
有时子模块的项目维护地址发生了变化，或者需要替换子模块，就需要删除原有的子模块。

删除子模块较复杂，步骤如下：（手动删除、找到对应的文件代码）
1. rm -rf 子模块目录 删除子模块目录及源码
2. vi .gitmodules 删除项目目录下.gitmodules文件中子模块相关条目
3. vi .git/config 删除配置项中子模块相关条目
4. rm .git/module/* 删除模块下的子模块目录，每个子模块对应一个目录，注意只删除对应的子模块目录即可

执行完成后，再执行添加子模块命令即可，如果仍然报错，执行如下：（删除后，重新添加新的子模块）

git rm --cached 子模块名称

完成删除后，提交到仓库即可。

