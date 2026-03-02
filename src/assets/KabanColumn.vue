<template>
    <div class="col-md-4 col-12">
        <div class="column">
            <div class="column_header">
                <h2 >{{ props.title }}</h2>
            </div>
            <div class="column_main">
                <div class="column_tasks">
                    <div v-for="(task, key) in props.tasks" :key="key" class="column_task d-flex" @click="openTask(task.id)">
                        <h5>{{ task.title }}</h5>
                        <div class="btn-sm btn-danger" @click.stop="deleteTask(task.id)">❌</div>
                    </div>
                </div>
            </div>
            <div class="column_footer">
                <h5>botões de add etc</h5>
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

</script>
