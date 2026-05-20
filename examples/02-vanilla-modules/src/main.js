import './style.css'
import { title, createMessage } from './message.js'
import { add, multiply } from './math.js'

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="page">
    <section class="card">
      <h1>${title}</h1>
      <p>${createMessage('Vite')}</p>
      <ul>
        <li>add(2, 3) = ${add(2, 3)}</li>
        <li>multiply(4, 5) = ${multiply(4, 5)}</li>
      </ul>
      <p>这个示例用来理解 <code>import</code> 和 <code>export</code>。</p>
    </section>
  </main>
`
