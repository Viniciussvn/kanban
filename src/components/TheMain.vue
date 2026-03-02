<template>
  <div class="container">
    <h1 >teste</h1>
    <div class="row">
      <KabanColumn
        :title="'A fazer'"
        :tasks="tasks_todo"
      />
      <KabanColumn
        :title="'Fazendo'"
        :tasks="tasks_doing"
      />
      <KabanColumn
        :title="'Feito'"
        :tasks="tasks_done"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue';
import KabanColumn from '../assets/KabanColumn.vue';

import { useKanbanStore } from '@/stores/store';

const store = useKanbanStore();

onBeforeMount(() => {
  store.fetchTasks();
});

const tasks_todo = computed(() =>{
  return store.tasks.filter(t=> t.status === 'todo');
});

const tasks_doing = computed(() =>{
  return store.tasks.filter(t=> t.status === 'doing');
});

const tasks_done = computed(() =>{
  return store.tasks.filter(t=> t.status === 'done');
});

</script>


<style scoped>

</style>