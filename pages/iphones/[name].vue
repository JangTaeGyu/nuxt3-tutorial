<template>
  <div>
    <Head>
      <Title>Nuxt 3 - {{ name }}</Title>
    </Head>
    <div class="flex justify-center w-full mt-20">
      <div class="grid grid-cols-2">
        <div>
          <img :src="`/images/${route.params.name}.webp`" />
        </div>
        <div class="text-center">
          <h1 class="text-3xl">Iphone {{ name }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const name = computed(() => {
  return route.params.name.replaceAll('-', ' ');
});

// useHead({
//   title: `Nuxt3 - ${name.value}`,
// });
</script>