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

const global = useGlobalStore();

function openCreateModal() {
  global.openTaskModal('create')
}

</script>

<style scoped>





</style>