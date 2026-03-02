<template>
    <div class="col-md-4 col-12">
        <div class="column">
            <div class="column_header">
                <h2>{{ props.title }}</h2>
            </div>
            <div class="column_main">
                <div class="column_tasks">
                    <div v-for="(task, key) in props.tasks" :key="key" class="column_task" @click="openTask(task.id)">
                        <h5>{{ task.title }}</h5>
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
    console.log("Abrir task de id: " + id);
}

</script>
