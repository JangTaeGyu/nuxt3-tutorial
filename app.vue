<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
const page = ref('home');

function view(pageName) {
  page.value = pageName;
}
</script>
