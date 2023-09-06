<template>
  <div>
    <nav class="bg-purple-900 shadow-lg p-3 text-white text-lg flex justify-between">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/iphones">Iphones</NuxtLink>
      <NuxtLink to="/profile">Profile</NuxtLink>
    </nav>

    <slot />
  </div>
</template>
