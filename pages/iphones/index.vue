<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <NuxtLink
        v-for="iphone in iphones"
        :key="iphone"
        :to="`/iphones/${iphone}`"
        class="shadow-lg border rounded-lg text-center"
    >
      <h1>{{ iphone }}</h1>
      <div class="flex justify-center">
        <img width="200" :src="`/images/${iphone}.webp`" alt="" />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: "Nuxt 3 - Iphones",
});

const { data: iphones } = await useFetch('/api/iphone');

</script>`