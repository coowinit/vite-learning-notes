<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <main class="page">
    <section class="card">
      <h1>08. Vite + Vue</h1>
      <p>这是一个最小 Vue 示例。</p>
      <p>当前计数：<strong>{{ count }}</strong></p>
      <button @click="count++">+1</button>
    </section>
  </main>
</template>
