# 更新日志


## v0.1.2 - 补充 notes 与可运行 examples

本版本重点完善 `notes` 与 `examples` 两个目录，让仓库从“知识整理”进一步变成“可以反复运行和测试的学习项目”。

### 新增内容

- 更新 `notes/README.md`，增加学习笔记导航、阅读顺序和练习建议。
- 新增 8 篇基础学习笔记，覆盖 Vite 基础、项目结构、npm、开发/构建流程、src/public、配置、Webpack 对比和常见错误。
- 更新 `examples/README.md`，增加示例项目总览、运行方式、学习顺序和排错说明。
- 新增 8 个可独立运行的 Vite 示例项目：
  - `01-vanilla-basic`：最小原生 JavaScript 页面。
  - `02-vanilla-modules`：import/export 模块拆分。
  - `03-vanilla-counter-state`：事件绑定与状态变化。
  - `04-src-vs-public-assets`：对比 `src/assets` 与 `public`。
  - `05-vite-config-and-env`：学习 `vite.config.js`、端口、别名和环境变量。
  - `06-vanilla-todo-localstorage`：本地存储 Todo 小案例。
  - `07-react-basic`：Vite + React 最小示例。
  - `08-vue-basic`：Vite + Vue 最小示例。

### 调整内容

- README 当前版本更新为 `v0.1.2`。
- README 增加“示例项目运行入口”章节。
- 推荐仓库目录结构更新为实际 v0.1.2 结构。

### 使用方式

进入任意示例项目目录后执行：

```bash
npm install
npm run dev
```

构建测试：

```bash
npm run build
npm run preview
```


## v0.1.1 - 增加学习截图与目录结构说明

本版本在 `v0.1.0` 的基础上继续扩展，重点把学习过程中的关键截图整理进仓库，并在 README 对应知识点中正确引用。

### 新增内容

- 新增 `docs/images/screenshots/` 目录，用于保存学习过程截图。
- 在 README 中加入 Node.js 与 npm 版本检查截图。
- 在 README 中加入 Vite 本地开发服务器成功运行截图。
- 在 README 中加入 `src` 默认目录结构截图。
- 在 README 中加入 Vite 项目根目录截图。
- 补充了截图对应的解释，方便以后回顾学习过程。
- 优化 README 目录结构，使其更适合作为长期学习仓库的入口文档。

### 调整内容

- 调整“最小 Vite 项目搭建”章节，使命令、截图和说明对应更清晰。
- 调整“Vite 项目目录结构”章节，补充实际截图说明。
- 调整“src 中的默认文件可以删除吗？”章节，结合截图说明哪些文件可以删除。
- 调整“推荐仓库目录结构”，增加 `docs/images/screenshots` 路径。

## v0.1.0 - Vite 基础认知与最小项目搭建

第一个版本，主要整理从零开始理解 Vite 的基础知识。

### 包含内容

- Vite 是什么
- Vite 和 Node.js、npm、React、Vue 的关系
- 为什么会出现 Vite
- Vite 与 Webpack 的区别
- 如何创建一个最小 Vite 项目
- 项目目录结构说明
- `package.json`、`index.html`、`src/main.js` 的作用
- `npm run dev`、`npm run build`、`npm run preview` 的区别
- `src` 和 `public` 的区别
- `node_modules`、`package-lock.json`、`.gitignore` 是否可以删除
- 后续学习路线
