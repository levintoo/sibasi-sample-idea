<script setup lang="ts">
import NavMain from '@/components/NavMain.vue'
import { Sidebar, SidebarHeader, type SidebarProps, SidebarRail } from '@/components/ui/sidebar'
import { Home, PanelsTopLeft, SquareChartGantt } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

const props = defineProps<SidebarProps>()
const route = useRoute()

const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: { name: 'dashboard' },
      icon: SquareChartGantt,
      isActive: route.name === 'dashboard',
    },
    {
      title: 'Home',
      url: { name: 'home' },
      icon: Home,
      isActive: route.name === 'home',
    },
    {
      title: 'Cards',
      url: { name: 'cards' },
      icon: PanelsTopLeft,
      isActive: route.name === 'cards',
    },
  ],
}
</script>

<template>
  <Sidebar class="border-r-0" v-bind="props">
    <SidebarHeader>
      <NavMain :items="data.navMain" />
    </SidebarHeader>
    <SidebarRail />
  </Sidebar>
</template>
