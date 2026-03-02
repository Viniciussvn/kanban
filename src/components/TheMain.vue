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
import { ref } from 'vue';

import KabanColumn from './KabanColumn.vue';

const tasks_todo = ref([
  { id: 1, title: 'task a fazer 1'},
  { id: 2, title: 'task a fazer 2'},
  { id: 3, title: 'task a fazer 3'},
  { id: 4, title: 'task a fazer 4'},
]);

const tasks_doing= ref([
  { id: 5, title: 'task fazendo 1'},
  { id: 6, title: 'task fazendo 2'},
  { id: 7, title: 'task fazendo 3'},
  { id: 8, title: 'task fazendo 4'},
]);

const tasks_done= ref([
  { id: 9, title: 'task feita 1'},
  { id: 10, title: 'task feita 2'},
  { id: 11, title: 'task feita 3'},
  { id: 12, title: 'task feita 4'},
]);

</script>
