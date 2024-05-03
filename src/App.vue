<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
  <nav class="top-nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/links">Links</RouterLink>
    <RouterLink to="/getting-started">Getting Started</RouterLink>
  </nav>
  <RouterView />
  </header>
</template>

<style scoped>
.top-nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 1rem 0;
  text-align: center;
}

.top-nav a {
  margin: 0 1rem;
}

header {
  margin-top: 3rem;
  margin-bottom: 3rem;
  line-height: 1.5;
}

RouterView {
  max-width: 100vw;
  max-height: 100vh;
  padding-top: 3rem;
}


nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 100%) {
  header {
    display: flex;
    place-items: center;
  }
}
</style>