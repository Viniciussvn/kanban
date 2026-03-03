<template>
  <div class="container">
    <div class="row">
      <KabanColumn :title="'A fazer'" :tasks="tasks_todo" :status="'todo'" />
      <KabanColumn :title="'Fazendo'" :tasks="tasks_doing" :status="'doing'" />
      <KabanColumn :title="'Feito'" :tasks="tasks_done" :status="'done'" />
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'
import KabanColumn from '../assets/KabanColumn.vue'

import { useKanbanStore } from '@/stores/store'

const store = useKanbanStore()

onBeforeMount(() => {
  store.fetchTasks()
})

const tasks_todo = computed(() => {
  return store.tasks.filter((t) => t.status === 'todo').sort((a, b) => a.order - b.order)
})

const tasks_doing = computed(() => {
  return store.tasks.filter((t) => t.status === 'doing').sort((a, b) => a.order - b.order)
})

const tasks_done = computed(() => {
  return store.tasks.filter((t) => t.status === 'done').sort((a, b) => a.order - b.order)
})
</script>

<style scoped></style>
