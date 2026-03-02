<template>
  <div class="container">
    <div class="row">
      <KabanColumn
        :title="'A fazer'"
        :tasks="store.tasks"
        :status="'todo'"
      />
      <KabanColumn
        :title="'Fazendo'"
        :tasks="store.tasks"
        :status="'doing'"
      />
      <KabanColumn
        :title="'Feito'"
        :tasks="store.tasks"
        :status="'done'"
      />
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import KabanColumn from '../assets/KabanColumn.vue';

import { useKanbanStore } from '@/stores/store';

const store = useKanbanStore();

onBeforeMount(() => {
  store.fetchTasks();
});

</script>