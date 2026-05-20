import './style.css'
import { createCounter } from './counter.js'

const counter = createCounter(0)

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="page">
    <section class="card">
      <h1>03. 计数器与状态</h1>
      <p>这个示例用来理解事件绑定和状态更新。</p>
      <div class="counter" id="count">0</div>
      <div class="actions">
        <button id="minus">-1</button>
        <button id="plus">+1</button>
        <button class="secondary" id="reset">重置</button>
      </div>
    </section>
  </main>
`

const countEl = document.querySelector('#count')

function render() {
  countEl.textContent = counter.value
}

document.querySelector('#plus').addEventListener('click', () => {
  counter.increment()
  render()
})

document.querySelector('#minus').addEventListener('click', () => {
  counter.decrement()
  render()
})

document.querySelector('#reset').addEventListener('click', () => {
  counter.reset()
  render()
})
