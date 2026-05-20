# examples 示例项目目录

这个目录保存可以独立运行的 Vite 示例项目。

每个示例都是一个单独的小项目，都有自己的 `package.json`。你可以进入任意一个示例目录，单独安装依赖、启动、修改、构建和测试。

---

## 通用运行方式

进入某个示例目录：

```bash
cd examples/01-vanilla-basic
```

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

构建正式文件：

```bash
npm run build
```

预览构建结果：

```bash
npm run preview
```

---

## 示例列表

| 示例 | 主题 | 适合练习 |
|---|---|---|
| [`01-vanilla-basic`](01-vanilla-basic) | 最小原生 JS 页面 | Vite 基本运行流程 |
| [`02-vanilla-modules`](02-vanilla-modules) | import/export 模块拆分 | ES Modules |
| [`03-vanilla-counter-state`](03-vanilla-counter-state) | 计数器与状态 | 事件绑定、状态更新 |
| [`04-src-vs-public-assets`](04-src-vs-public-assets) | src 和 public 资源对比 | 图片资源引用方式 |
| [`05-vite-config-and-env`](05-vite-config-and-env) | Vite 配置与环境变量 | 端口、别名、环境变量 |
| [`06-vanilla-todo-localstorage`](06-vanilla-todo-localstorage) | Todo 小应用 | DOM 操作、本地存储 |
| [`07-react-basic`](07-react-basic) | Vite + React | React 项目结构 |
| [`08-vue-basic`](08-vue-basic) | Vite + Vue | Vue 项目结构 |

---

## 推荐学习顺序

建议从 01 到 08 依次运行。

前 6 个示例都使用原生 JavaScript，更适合理解 Vite 本身。

React 和 Vue 示例建议放在后面，因为它们会引入框架概念。

---

## Windows CMD 示例

例如运行第一个示例：

```bash
cd C:\Users\Administrator\Desktop\vite-learning-notes\examples\01-vanilla-basic
npm install
npm run dev
```

看到类似地址后，在浏览器打开：

```text
http://localhost:5173/
```

---

## 修改测试建议

每个示例都建议做这些测试：

1. 修改 `src/main.js` 或组件文件，观察浏览器是否自动更新。
2. 修改 `src/style.css`，观察 HMR 效果。
3. 执行 `npm run build`，观察是否生成 `dist`。
4. 执行 `npm run preview`，预览打包后的效果。
5. 尝试删除一个 import，再观察报错和恢复过程。

---

## 注意事项

- 不要把 `node_modules` 上传到 GitHub。
- 每个示例第一次运行前都需要执行 `npm install`。
- 如果某个示例运行失败，先确认当前目录里是否有 `package.json`。
- React 和 Vue 示例需要额外下载框架依赖，首次 `npm install` 可能比原生 JS 示例更久。
