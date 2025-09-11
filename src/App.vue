<template>
  <header style="display:flex; gap:12px; align-items:center; padding:12px; border-bottom:1px solid #eee">
    <h1 style="margin:0; font-size:18px;">TS + Vue 3 Demo</h1>
    <nav style="display:flex; gap:8px;">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
      <RouterLink to="/users">Users</RouterLink>
      <RouterLink to="/todos">Todos</RouterLink>
    </nav>
  </header>

  <main style="padding:16px;">
    <RouterView/>
  </main>
</template>

<style>
a.router-link-active {
  font-weight: 700;
}
</style>
