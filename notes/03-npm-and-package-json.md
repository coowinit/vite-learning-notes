# 03. npm 与 package.json

`package.json` 是 npm 项目的配置中心。

---

## scripts 的作用

常见配置：

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

当运行：

```bash
npm run dev
```

npm 会去 `package.json` 里找到：

```json
"dev": "vite"
```

然后执行 `vite`。

---

## dependencies 和 devDependencies

### dependencies

项目运行时需要的依赖，例如：

```json
"react": "latest"
```

### devDependencies

开发和构建时需要的依赖，例如：

```json
"vite": "latest"
```

---

## 常见问题

### 报错：找不到 package.json

说明你没有进入项目根目录。

排查：

```bash
dir
```

如果当前目录没有 `package.json`，就不要运行 `npm run dev`。

---

## 建议练习

打开任意示例项目的 `package.json`，查看：

```json
"scripts"
```

尝试新增：

```json
"hello": "echo Hello Vite"
```

然后运行：

```bash
npm run hello
```
