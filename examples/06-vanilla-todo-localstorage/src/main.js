import './style.css'
import { loadTodos, saveTodos } from './storage.js'

let todos = loadTodos()

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="page">
    <section class="card">
      <h1>06. Todo + localStorage</h1>
      <form id="todoForm" class="form">
        <input id="todoInput" placeholder="输入一个任务" autocomplete="off" />
        <button>添加</button>
      </form>
      <ul id="todoList" class="todo-list"></ul>
      <p class="tips">刷新页面后，任务仍然会保留在浏览器 localStorage 中。</p>
    </section>
  </main>
`

const form = document.querySelector('#todoForm')
const input = document.querySelector('#todoInput')
const list = document.querySelector('#todoList')

function render() {
  list.innerHTML = todos.map((todo, index) => `
    <li>
      <label>
        <input type="checkbox" data-index="${index}" ${todo.done ? 'checked' : ''} />
        <span class="${todo.done ? 'done' : ''}">${todo.text}</span>
      </label>
      <button class="secondary" data-delete="${index}">删除</button>
    </li>
  `).join('')

  saveTodos(todos)
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const text = input.value.trim()
  if (!text) return

  todos.push({ text, done: false })
  input.value = ''
  render()
})

list.addEventListener('click', (event) => {
  const deleteIndex = event.target.dataset.delete
  if (deleteIndex !== undefined) {
    todos.splice(Number(deleteIndex), 1)
    render()
    return
  }

  const checkboxIndex = event.target.dataset.index
  if (checkboxIndex !== undefined) {
    const todo = todos[Number(checkboxIndex)]
    todo.done = !todo.done
    render()
  }
})

render()
