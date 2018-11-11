# ace

> fed基于koa2搭建的活动管理系统

## 项目架构

```
.
├── LICENSE
├── README.md
├── .env  // 环境变量配置文件
├── app.js  // Koa入口文件
├── build // vue-cli 生成，用于webpack监听、构建
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config // vue-cli 生成&自己加的一些配置文件
│   ├── default.conf
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── dist // Vue build 后的文件夹
│   ├── index.html // 入口文件
│   └── static // 静态资源
├── index.html // vue-cli生成，用于容纳Vue组件的主html文件。
├── package.json // npm的依赖、项目信息文件
├── server // Koa后端，用于提供Api
│   ├── config // 配置文件夹
│   ├── controllers // controller-控制器
│   ├── models // model-模型
│   ├── routes // route-路由
│   └── schema // schema-数据库表结构
├── src // vue-cli 生成&自己添加的utils工具类
│   ├── App.vue // 主文件
│   ├── assets // 相关静态资源存放
│   ├── components // 单文件组件
│   ├── main.js // 引入Vue等资源、挂载Vue的入口js
│   └── utils // 工具文件夹-封装的可复用的方法、功能

```

看起来好像很复杂的样子，其实很大一部分文件夹的结构是`vue-cli`这个工具帮我们生成的。
```bash
vue init webpack ace
```
而我们需要额外添加的主要是Koa的入口文件以及一个`server`文件夹用于Koa提供API。   这样的话，在获取数据的方面就可以走Koa所提供的API，而Vue只需关心怎么把这些数据渲染到页面上就好了。

## 项目构建

``` bash
# 安装依赖
npm install

# 开发环境 热加载 localhost:8080
npm run dev

# 生产环境 压缩处理
npm run build

# 生产环境构建，分析日志提现
npm run build --report

# 单元测试
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

参考文档 [webpack guide](http://vuejs-templates.github.io/webpack/) 和 [docs for vue-loader](http://vuejs.github.io/vue-loader).
