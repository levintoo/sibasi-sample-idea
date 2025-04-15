<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'

const cards = [
  {
    title: 'Dream Big',
    quote:
      'The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt',
  },
  {
    title: 'Keep Going',
    quote: 'It does not matter how slowly you go as long as you do not stop. – Confucius',
  },
  {
    title: 'Stay Positive',
    quote:
      'Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman',
  },
]
</script>

<template>
  <AppLayout>
    <h1 class="font-medium">Responsive Cards</h1>
    <div class="mt-3 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="{ quote, title } in cards"
        :key="quote"
        class="p-4 rounded-lg border border-gray-200 bg-white"
      >
        <h2 class="text-sm text-gray-800 font-semibold">Card {{ title }}</h2>
        <p class="text-sm text-gray-600 mt-1">
          {{ quote }}
        </p>
      </div>
    </div>
  </AppLayout>
</template>
