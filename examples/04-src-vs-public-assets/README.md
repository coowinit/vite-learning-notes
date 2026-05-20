# 04. src vs public assets

这个示例用来对比 `src/assets` 和 `public` 的资源引用方式。

## 重点

```js
import srcLogo from './assets/src-logo.svg'
```

和：

```html
<img src="/public-logo.svg">
```

## 练习

- 删除 `public/public-logo.svg`，观察页面变化。
- 修改 `src/assets/src-logo.svg`，观察构建后的文件名变化。
