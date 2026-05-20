# 01. Vite 基础概念

Vite 是现代前端项目中的开发服务器和构建工具。

它不是运行环境，不是包管理器，也不是 React 或 Vue 这种前端框架。

---

## Vite 的定位

可以这样理解：

```text
Node.js 提供运行环境
npm 负责安装依赖和执行脚本
Vite 负责启动开发服务器和打包项目
HTML/CSS/JavaScript 是你真正写的网页代码
React/Vue 是可选的前端框架
```

---

## Vite 主要做什么？

开发阶段：

```bash
npm run dev
```

Vite 会启动本地开发服务器，例如：

```text
http://localhost:5173/
```

构建阶段：

```bash
npm run build
```

Vite 会生成 `dist` 目录，用于部署上线。

预览阶段：

```bash
npm run preview
```

Vite 会在本地预览 `dist` 构建结果。

---

## 初学者最容易混淆的地方

### Vite 不是 Node.js

Node.js 是让电脑可以运行前端工具的环境。

### Vite 不是 npm

npm 是包管理器，负责安装依赖和运行命令。

### Vite 不是 React/Vue

React 和 Vue 是写页面的框架；Vite 是帮助项目开发和打包的工具。

---

## 建议练习

运行示例：

```bash
cd examples/01-vanilla-basic
npm install
npm run dev
```

然后修改 `src/main.js` 和 `src/style.css`，观察浏览器是否自动更新。
