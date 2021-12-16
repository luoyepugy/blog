对Antd文档管理做了一下抽离简化Antd文档管理主题

# antd 的文档系统有什么优点
- 首先基于antd团队成员开发的博客服务 https://github.com/benjycui/bisheng
- 其次漂亮的界面 用来管理文档很合适
- 最主要的优点是。。他会把markdown里面的特定代码转换成页面包括react

# 我自己在博客上面的应用

- https://wuguanghai45.github.io/docs/react/introduce-cn
- 项目目录 https://github.com/wuguanghai45/blog/tree/master/demos

# 配置文件
```
vi site/bisheng.config.js
```

# 主题的一些配置

## antd的文档界面一些配置
- 编译的配置文件是在 site/bisheng.config.js
- 路由的一些配置是在 site/theme/index.js
- 中文菜单配置 site/theme/zh-CN.js
- 英文菜单配置 site/theme/en-US.js

使用方式
```
npm start
```


# 写文档方式

## 创建文档
- 在components文件目录下创建组件文件夹(注意不能带大写) helloworld

```
cd components
mkdir helloworld
```

- 创建文件index.zh-CN.md(这里的zh-CN表示中文文档， 如果换成en-US的话表示英文文档)

```
echo "" > index.zh-CN.md
```

- 写入内容
```
---
title: HelloWorld
subtitle: hello
---

Hello world
```
## 创建文档demo

- 在helloworld 文件里面创建文件夹demo并创建文件alert.md

```
mkdir demo
cd demo
echo "" > alert.md
```

- 向alert.md写入内容

[内容样例](https://raw.githubusercontent.com/wuguanghai45/antdBishengTheme/master/alertHelloWorld.md)


## 改完后需要重新启动

```
npm start
```

# TODO
- 目前只是粗略的更改了一下
- 更多操作可以跟进https://github.com/ant-design/ant-design/tree/master/components 目录下的各种md文件
- 更多的操作探索
- 更具体的使用文档
- 能否进一步抽离


# 感谢Antd的开源
