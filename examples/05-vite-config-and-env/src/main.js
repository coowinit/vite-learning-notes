import './style.css'
import { getConfigMessage } from '@/utils/message.js'

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="page">
    <section class="card">
      <h1>05. ${import.meta.env.VITE_APP_TITLE}</h1>
      <p>${getConfigMessage()}</p>
      <p>作者环境变量：<code>${import.meta.env.VITE_APP_AUTHOR}</code></p>
      <p>当前示例的开发端口在 <code>vite.config.js</code> 中被设置为 <code>3000</code>。</p>
    </section>
  </main>
`
