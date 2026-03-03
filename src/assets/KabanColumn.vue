<template>
    <div class="col-md-4 col-12 mb-md-0 mb-5">
        <div class="column">
            <div class="column_header text-center mb-4">
                <h2 >{{ props.title }}</h2>
            </div>
            <draggableComponent
                class="column_main"
                :model-value="tasks"
                group="tasks"
                item-key="id"
                @change="onChange"
                :animation="250"
                ghost-class="ghost"
            >
                <template #item="{ element }">
                    <div v-if="element.status === props.status">
                        <div class="column_task d-flex" @click="openTask(element.id)">
                            <h5 class="col-11">{{ element.title }}</h5>
                            <div class="col delete_task" @click.stop="deleteTask(element.id)">❌</div>
                        </div>
                    </div>
                </template>
            </draggableComponent>
            <div v-if="props.status === 'todo'" class="column_footer mt-4">
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
import draggableComponent from 'vuedraggable';

const global = useGlobalStore();
const store = useKanbanStore();

const props = defineProps({
    title: {
        required: true,
        type: String
    },
    tasks:{
        required: true,
    },
    status: {
        required: false,
    }
});

function openCreateModal() {
    store.task = {};
    global.openTaskModal('create')
}

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

function onChange(event) {
    if (!event.moved && !event.added) return

    if (event.moved) {
        const { oldIndex, newIndex } = event.moved
        store.reorderByIndex(props.status, oldIndex, newIndex)
    }

    if (event.added) {
        const { element, newIndex } = event.added

        element.status = props.status

        store.insertAtIndex(props.status, element, newIndex)
    }
};

</script>
