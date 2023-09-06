<template>
  <div>Hello World</div>
  <button @click="increment">Increment</button>
  <p>{{ count }}</p>
  <button @click="decrement">Decrement</button>
</template>

<script setup>
const count = ref(0);

function increment() {
  count.value++;
}

function decrement() {
  if (count.value > 0) count.value--;
}

</script>
