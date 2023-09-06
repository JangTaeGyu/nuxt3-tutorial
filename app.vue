<template>
  <a @click="view('home')">Home</a>
  <a @click="view('counter')">Counter</a>

  <div>
    <LazyHomeWelcome v-if="page === 'home'" />
    <LazyCounter v-else-if="page === 'counter'" />
  </div>
</template>

<script setup>
const page = ref('home');

function view(pageName) {
  page.value = pageName;
}
</script>