<template>
  <main class="user-layout bg-gray-100">
    <article class="sidebar">
      <p>Dashboard</p>
      <p>Settings</p>
    </article>

    <section>
      <slot/>
    </section>
  </main>
</template>

<style>
.user-layout {
  display: flex;
}

.sidebar {
  display: flex;
  flex-direction: column;
}
</style>