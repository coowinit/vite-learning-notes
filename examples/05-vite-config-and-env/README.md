# 05. Vite Config and Env

这个示例演示：

- `vite.config.js`
- 开发服务器端口配置
- 路径别名 `@`
- 环境变量 `import.meta.env`

## 运行

```bash
npm install
npm run dev
```

这个示例默认端口是：

```text
http://localhost:3000/
```

## 练习

- 修改 `vite.config.js` 中的端口。
- 修改 `.env` 中的 `VITE_APP_TITLE`。
- 把 `@/utils/message.js` 改回相对路径，观察两种写法的区别。
