<template>
    <div class="modal_kanban" @mousedown.self="closeModal()">
        <div class="modal_content">
            <div v-if="props.type === 'delete'">
                <div class="modal_header mb-4">
                    <h3>Você deseja deletar a task task_title ?</h3>
                </div>
                <div class="modal_body">
                    <div class="task_desc">
                        task_description
                    </div>
                </div>
                <div class="task_footer mt-4">
                    <div class="text-end">
                        <div class="btn button_kanban btn-primary btn-sm me-4" @click="closeModal()">
                            NÃO
                        </div>
                        <div class="btn button_kanban btn-danger btn-sm" @click="deleteTask()">
                            DELETAR
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div v-if="props.type === 'create'">
                    <div class="modal_header mb-4">
                        <h3>Você deseja criar uma nova tarefa?</h3>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <label class="d-block mb-2" for="title">Título da tarefa</label>
                            <input id="title"  class="w-100 task_input" v-model="task_data.title">
                        </div>
                        <div class="col-md-6 col-12">
                            <label class="d-block mb-2" for="status">Status</label>
                            <select id="description" class="w-100 task_input disabled" v-model="task_data.status" disabled>
                                <option value="todo" default>A fazer</option>
                                <option value="doing">Fazendo</option>
                                <option value="done">Feito</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label class="d-block mb-2" for="description">Descrição</label>
                            <input id="description" class="w-100 task_input" v-model="task_data.description">
                        </div>
                    </div>
                    <div class="task_footer mt-4">
                        <div class="text-end">
                            <div class="btn button_kanban btn-primary btn-sm me-2" @click="closeModal()">
                                CANCELAR
                            </div>
                            <div class="btn button_kanban btn-success btn-sm" @click="createTask()">
                                CRIAR
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="props.type === 'edit'">
                    <div v-if="props.type === 'create'">
                        <div class="modal_header mb-4">
                            <h3>Você deseja editar a tarefa de ID: {{ task_data.id }} ?</h3>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-12">
                                <label class="d-block mb-2" for="title">Título da tarefa</label>
                                <input id="title"  class="w-100 task_input" v-model="task_data.title">
                            </div>
                            <div class="col-md-6 col-12">
                                <label class="d-block mb-2" for="status">Status</label>
                                <select id="description" class="w-100 task_input disabled" v-model="task_data.status">
                                    <option value="todo" default>A fazer</option>
                                    <option value="doing">Fazendo</option>
                                    <option value="done">Feito</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label class="d-block mb-2" for="description">Descrição</label>
                                <input id="description" class="w-100 task_input" v-model="task_data.description">
                            </div>
                        </div>
                        <div class="task_footer mt-4">
                            <div class="text-end">
                                <div class="btn button_kanban btn-primary btn-sm me-2" @click="closeModal()">
                                    CANCELAR
                                </div>
                                <div class="btn button_kanban btn-success btn-sm" @click="updateTask()">
                                    EDITAR
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';

import { useGlobalStore } from '@/stores/global';
import { useKanbanStore } from '@/stores/store';

const global = useGlobalStore();
const store = useKanbanStore();

const task_data = ref({
    title: '',
    description: '',
    status: 'todo',
});

const props = defineProps({
    type: {
        required: true,
        type: String,
    },
    task_id: {
        required: false,
    },
});

onBeforeMount(() => {
    if(props.task_id){
        for(let i = 0; i < store.tasks.length; i++){
            if(store.tasks[i].id === props.task_id){
               task_data = store.tasks[i]; 
            };
        };
    }
});

function closeModal(){
    global.closeTaskModal();
}

function createTask(){
    store.addTask(task_data.value)
    global.closeTaskModal();
}

function updateTask(){
    store.updateTask(task_data.value)
    global.closeTaskModal();
}

</script>

<style scoped>

.task_input {
    border: 1px solid #cccccc;
    padding: 10px;
    border-radius: 15px;
    background-color: white;
}

.disabled{
    background-color: #cccccc;
}


</style>