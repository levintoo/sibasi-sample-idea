<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header class="flex h-14 shrink-0 items-center gap-2">
        <div class="flex flex-1 items-center gap-2 px-3">
          <SidebarTrigger />
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 px-4">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
