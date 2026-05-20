import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="page">
    <section class="card">
      <h1>01. 最小 Vite 页面</h1>
      <p>这是一个不使用 React/Vue 的原生 JavaScript 示例。</p>
      <p>你可以修改 <code>src/main.js</code> 或 <code>src/style.css</code>，保存后观察页面自动更新。</p>
      <button id="helloBtn">点击测试</button>
      <p id="result"></p>
    </section>
  </main>
`

document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#result').textContent = '按钮点击成功，Vite 正在运行。'
})
