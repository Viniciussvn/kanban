<template>
    <div class="col-md-4 col-12 mb-md-0 mb-5">
        <div class="column">
            <div class="column_header text-center mb-4">
                <h2 >{{ props.title }}</h2>
            </div>
            <div class="column_main">
                <div v-for="(task, key) in props.tasks" :key="key" class="column_task d-flex" @click="openTask(task.id)">
                    <h5 class="col-11">{{ task.title }}</h5>
                    <div class="col delete_task" @click.stop="deleteTask(task.id)">❌</div>
                </div>
            </div>
            <div v-if="props.type === 'todo'" class="column_footer mt-4">
                <button type="button" class="btn btn-sm w-100 btn-primary" @click="openCreateModal()">
                    &#43
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGlobalStore } from '@/stores/global';
import { useKanbanStore } from '@/stores/store';

const global = useGlobalStore();
const store = useKanbanStore();

const props = defineProps({
    title: {
        required: true,
        type: String
    },
    tasks: {
        required: true,
    },
    type: {
        required: false,
    }
});

function openTask(id){
    for(let i = 0; i < props.tasks.length; i++){
        if(props.tasks[i].id === id){
            store.task = props.tasks[i];
        };
    };
    global.openTaskModal('edit')
}

function deleteTask(id){
    for(let i = 0; i < props.tasks.length; i++){
        if(props.tasks[i].id === id){
            store.task = props.tasks[i];
        };
    };
    global.openTaskModal('delete');
};

function openCreateModal() {
    store.task = {};
    global.openTaskModal('create')
}

</script>
