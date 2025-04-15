<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import AppLayout from '@/layouts/AppLayout.vue'
import {FilePen,Trash2,Save} from "lucide-vue-next"

interface Task {
  text: string
  editing: boolean
}

const newTask = ref('')
const tasks = ref<Task[]>([])

const addTask = () => {
  if (!newTask.value.trim()) return
  tasks.value.push({ text: newTask.value, editing: false })
  newTask.value = ''
}

const deleteTask = (index: number) => {
  tasks.value.splice(index, 1)
}

const toggleEdit = (index: number) => {
  const task = tasks.value[index]
  task.editing = !task.editing
}
</script>

<template>
  <AppLayout>
    <h1 class="font-medium">Home - Todo List</h1>
    <div class="w-full mt-3">
      <form @submit.prevent="addTask" class="flex gap-2">
        <Input
          v-model="newTask"
          type="text"
          placeholder="Enter a task"
        />
        <Button type="submit" :disabled="!newTask.trim()">
          Add
        </Button>
      </form>

      <ul class="mt-4 divide-y divide-gray-200">
        <li
          v-for="(task, index) in tasks"
          :key="index"
          class="flex items-center justify-between py-1"
        >
          <Input
            :disabled="!task.editing"
            v-model="task.text"
            class="flex-1 bg-transparent disabled:text-gray-950 disabled:border-none disabled:shadow-none disabled:opacity-100"
            :class="{ 'text-gray-400': !task.editing }"
          />
          <div class="flex gap-2 ml-3">
            <Button variant="ghost" size="icon" @click="toggleEdit(index)" class="text-gray-500 hover:underline">
              <Save v-if="task.editing" />
              <FilePen v-else />
            </Button>
            <Button variant="ghost" size="icon" @click="deleteTask(index)" class="text-rose-500 hover:text-rose-700">
              <Trash2 />
            </Button>
          </div>
        </li>
      </ul>
    </div>
  </AppLayout>
</template>
