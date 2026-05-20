import './style.css'
import srcLogo from './assets/src-logo.svg'

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="page">
    <section class="card">
      <h1>04. src 与 public 资源对比</h1>
      <p>左侧图片来自 <code>src/assets</code>，通过 <code>import</code> 引入。</p>
      <p>右侧图片来自 <code>public</code>，通过 <code>/public-logo.svg</code> 引用。</p>
      <div class="logos">
        <figure>
          <img src="${srcLogo}" alt="src assets logo" />
          <figcaption>src/assets：import 引入</figcaption>
        </figure>
        <figure>
          <img src="/public-logo.svg" alt="public logo" />
          <figcaption>public：根路径引用</figcaption>
        </figure>
      </div>
    </section>
  </main>
`
