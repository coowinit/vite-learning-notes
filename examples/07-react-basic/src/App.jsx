import { useState } from 'react'
import './style.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="page">
      <section className="card">
        <h1>07. Vite + React</h1>
        <p>这是一个最小 React 示例。</p>
        <p>当前计数：<strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </section>
    </main>
  )
}
