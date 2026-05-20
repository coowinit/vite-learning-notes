# 02. Vite 项目结构

一个 Vite 项目的根目录通常会包含这些文件：

```text
project-name
├── index.html
├── package.json
├── package-lock.json
├── node_modules
├── public
├── src
│   ├── main.js
│   └── style.css
└── .gitignore
```

---

## 最重要的三个入口

### package.json

项目命令和依赖配置。

没有它，`npm run dev` 就不知道要执行什么。

### index.html

页面入口。

Vite 项目里的 `index.html` 通常会加载：

```html
<script type="module" src="/src/main.js"></script>
```

### src/main.js

JavaScript 入口。

从这里开始引入 CSS、模块、图片、组件等内容。

---

## 哪些文件可以删除？

### node_modules

可以删除，但删除后要重新执行：

```bash
npm install
```

### public

如果没有任何代码引用里面的文件，可以删除。

### package-lock.json

可以删除，但一般建议保留。

### .gitignore

建议保留，尤其是上传 GitHub 时。

---

## 建议练习

运行：

```bash
cd examples/01-vanilla-basic
npm install
npm run dev
```

然后观察这些文件：

```text
package.json
index.html
src/main.js
src/style.css
```
