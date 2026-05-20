# 08. 常见错误排查

这个文件记录学习 Vite 时最常见的问题。

---

## 1. Could not read package.json

报错类似：

```text
npm error enoent Could not read package.json
```

原因：当前目录没有 `package.json`。

解决：先进入项目根目录。

```bash
cd C:\Users\Administrator\Desktop\vite-demo
npm run dev
```

排查：

```bash
dir
```

如果看不到 `package.json`，说明目录不对。

---

## 2. npm run dev 不是内部或外部命令？

通常是 Node.js/npm 没安装好，或者命令输入错误。

先检查：

```bash
node -v
npm -v
```

---

## 3. 页面打不开 localhost

检查命令行里 Vite 服务是否还在运行。

如果关闭了 CMD 窗口，需要重新执行：

```bash
npm run dev
```

---

## 4. 删除文件后页面报错

常见原因：文件虽然删了，但代码里仍然在引用。

例如删除了 `counter.js`，但 `main.js` 里还有：

```js
import { setupCounter } from './counter.js'
```

解决：删除对应 import 代码，或者恢复文件。

---

## 5. 修改代码后页面没变化

检查：

1. 是否保存了文件？
2. 是否修改的是当前项目中的文件？
3. Vite 服务是否还在运行？
4. 浏览器地址是否是当前项目的 localhost 地址？

---

## 6. npm install 很慢

可能是网络问题。

可以换网络，或者使用更稳定的镜像源。

初学阶段不建议过早折腾复杂配置，先确认项目结构和命令理解正确。
