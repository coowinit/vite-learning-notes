# notes 学习笔记目录

这个目录用于保存 Vite 学习过程中的系统笔记。

根目录的 `README.md` 更像是总览；`notes` 目录则适合写更细、更深入、可以持续扩展的专题内容。

---

## 推荐阅读顺序

建议按照下面顺序阅读和练习：

| 顺序 | 文件 | 主题 | 建议动作 |
|---|---|---|---|
| 1 | [`01-vite-basic.md`](01-vite-basic.md) | Vite 基础概念 | 理清 Vite、Node.js、npm、框架之间的关系 |
| 2 | [`02-project-structure.md`](02-project-structure.md) | 项目结构 | 打开一个示例项目，对照目录逐个理解 |
| 3 | [`03-npm-and-package-json.md`](03-npm-and-package-json.md) | npm 与 package.json | 修改 scripts，观察命令执行变化 |
| 4 | [`04-dev-build-preview.md`](04-dev-build-preview.md) | dev/build/preview | 分别运行三个命令并观察输出 |
| 5 | [`05-src-vs-public.md`](05-src-vs-public.md) | src 与 public | 运行 `04-src-vs-public-assets` 示例 |
| 6 | [`06-vite-config.md`](06-vite-config.md) | vite.config.js | 运行 `05-vite-config-and-env` 示例 |
| 7 | [`07-vite-vs-webpack.md`](07-vite-vs-webpack.md) | Vite 与 Webpack | 理解 Vite 出现的背景 |
| 8 | [`08-common-errors.md`](08-common-errors.md) | 常见错误 | 对照自己遇到的报错排查 |

---

## 和 examples 目录配合学习

建议每读完一篇笔记，就去 `examples` 中找对应项目运行一遍：

```bash
cd examples/01-vanilla-basic
npm install
npm run dev
```

常用验证命令：

```bash
npm run build
npm run preview
```

---

## 笔记维护建议

后续继续学习时，可以把新知识按主题拆到独立文件中。例如：

```text
09-env-variables.md
10-vite-plugin.md
11-vite-deploy.md
12-vite-react.md
13-vite-vue.md
14-vite-typescript.md
```

每篇笔记建议保持这个结构：

```md
# 标题

## 这个知识点解决什么问题？

## 最小示例

## 常见误区

## 可以继续研究的问题
```

---

## 当前阶段目标

v0.1.2 阶段的重点是：

> 把 Vite 从“听懂概念”推进到“能反复运行、修改、测试和验证”。
