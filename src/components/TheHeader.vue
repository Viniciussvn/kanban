<template>
    <div class="container">
        <div class="row">
            <div class="col-10">
                <h4>Kanban</h4>
            </div>
            <div class="col-2">
                <div class="d-flex">
                    <button type="button" class="btn btn-primary ms-auto me-1" @click="openCreateModal()">
                        Nova Tarefa
                    </button>
                </div>
            </div>
        </div>
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