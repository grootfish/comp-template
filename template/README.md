# {{ name }}

> {{ description }}

## 🗂 目录结构

```bash
.
├── README.md                    # README文件
├── babel.config.js              # babel 配置文件
├── examples                     # 开发环境示例文件夹
├── lib                          # 组件输出目录
├── node_modules                 # npm 包
├── package-lock.json
├── package.json
├── src                          # 组件开发目录
├── public
└── vue.config.js                # 扩展配置文件
```

## 💻项目命令

```bash
    "dev": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "lib": "vue-cli-service build --target lib --name index --dest lib src/index.js",
    "preversion": "npm run lint",
    "version": "npm run lib && git add -A",
    "postversion": "npm publish && git push && git push --tags"
```

- `npm run serve` 组件开发启动热加载
- `npm run lint`  组件eslint检测
- `npm run lib`   编译压缩并输出组件
- `npm version`   在更新 version 的时候添加了`hooks`

## 🏛开发步骤

  1. 安装依赖 `npm install`
  2.  `npm run dev` 启动项目
  3. 编写组件
     - `/src/index.vue`目录编写组件主逻辑
     - `/style/index.less`目录编写组件样式
  4. 预览组件效果
     - `/examples/App.vue`目录默认已引入组件，调整`props`调试组件
  5. 开发完成
     - `npm version patch/minor/major` 打包组件，更新版本号
     - `git push` 更新远程仓库
