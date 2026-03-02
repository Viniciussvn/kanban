<template>
        <div class="col-10">
            <h2>Kanban</h2>
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-primary" @click="openCreateModal()">
                Nova Tarefa
            </button>
        </div>
</template>

<script setup>
import { useGlobalStore } from '@/stores/global'
import { useKanbanStore } from '@/stores/store';

const global = useGlobalStore();
const store = useKanbanStore();

function openCreateModal() {
    store.task = {};
    global.openTaskModal('create')
}

</script>

<style scoped>





</style>