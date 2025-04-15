<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    class="w-full sm:max-w-md border border-slate-200 bg-white/70 p-1.5 backdrop-blur-[1px] rounded-[calc(0.75rem+0.375rem)]"
  >
    <div
      class="w-full sm:max-w-md border border-slate-200 bg-white rounded-xl shadow-2xl shadow-slate-400/20"
    >
      <div
        data-slot="card"
        :class="cn('bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6', props.class)"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
