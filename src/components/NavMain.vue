<script setup lang="ts">
import type { LucideIcon } from 'lucide-vue-next'

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'

defineProps<{
  items: {
    title: string
    url: string | { name: string }
    icon: LucideIcon
    isActive?: boolean
  }[]
}>()
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem v-for="item in items" :key="item.title">
      <SidebarMenuButton as-child :is-active="item.isActive">
        <RouterLink :to="item.url">
          <component :is="item.icon" />
          <span>{{ item.title }}</span>
        </RouterLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
