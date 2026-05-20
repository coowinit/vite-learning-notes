# 04. dev、build、preview 的区别

Vite 常用三个命令：

```bash
npm run dev
npm run build
npm run preview
```

---

## npm run dev

开发阶段使用。

特点：

- 启动开发服务器
- 支持热更新
- 运行在 localhost
- 不适合直接上线

---

## npm run build

正式上线前使用。

作用：

- 压缩代码
- 优化资源
- 生成 `dist` 文件夹

`dist` 才是最终部署用的目录。

---

## npm run preview

本地预览 `dist` 构建结果。

运行前通常需要先执行：

```bash
npm run build
```

---

## 建议练习

进入任意示例项目：

```bash
cd examples/01-vanilla-basic
npm install
npm run dev
```

确认页面正常后，停止服务，再执行：

```bash
npm run build
npm run preview
```

观察项目中是否生成了 `dist` 目录。
