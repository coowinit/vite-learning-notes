# 06. vite.config.js

`vite.config.js` 是 Vite 的配置文件。

小项目可以没有复杂配置，但项目变大后经常会用到它。

---

## 修改端口

示例：

```js
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000
  }
})
```

这样开发地址可能变成：

```text
http://localhost:3000/
```

---

## 配置路径别名

示例：

```js
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

之后可以这样写：

```js
import { message } from '@/utils/message.js'
```

---

## 环境变量

Vite 客户端代码中可以读取以 `VITE_` 开头的环境变量：

```js
import.meta.env.VITE_APP_TITLE
```

---

## 建议练习

运行：

```bash
cd examples/05-vite-config-and-env
npm install
npm run dev
```

观察端口、路径别名和环境变量的效果。
