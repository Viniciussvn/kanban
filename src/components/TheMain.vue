<template>
  <div class="container">
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
import { computed } from 'vue';

import { useKanbanStore } from '@/stores/store'

const kanbanStore = useKanbanStore();

import KabanColumn from './KabanColumn.vue';

const tasks_todo = computed(() =>{
  kanbanStore.tasks.filter(t=> t.state === 'todo');
});

const tasks_doing = computed(() =>{
  kanbanStore.tasks.filter(t=> t.state === 'doing');
});

const tasks_done = computed(() =>{
  kanbanStore.tasks.filter(t=> t.state === 'done');
});

</script>
