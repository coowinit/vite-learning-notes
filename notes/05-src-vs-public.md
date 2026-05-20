# 05. src 与 public 的区别

Vite 项目中，`src` 和 `public` 都可以放资源，但它们的处理方式不同。

---

## src

`src` 中的文件会被 Vite 处理。

常见写法：

```js
import logo from './assets/logo.svg'
```

适合放：

- 参与打包的 JS
- CSS
- 组件
- 需要被处理的图片

---

## public

`public` 中的文件通常会被原样复制。

常见写法：

```html
<img src="/logo.svg">
```

适合放：

- favicon
- 固定不变的静态资源
- 不需要经过打包处理的文件

---

## 对比

| 目录 | 是否被 Vite 处理 | 引用方式 |
|---|---|---|
| src | 是 | `import` |
| public | 通常原样复制 | `/文件名` |

---

## 建议练习

运行：

```bash
cd examples/04-src-vs-public-assets
npm install
npm run dev
```

观察页面中两个 SVG 的引用方式有什么不同。
