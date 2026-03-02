<template>
  <header class="row">
    <TheHeader/>
  </header>
  <TaskModal 
    v-if="global.isTaskModalOpen" 
    id="KanbanModal" 
    :type="global.taskModalType"
    :task="global.taskBeingEdited"
    @close="global.closeTaskModal"
  />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import TaskModal from '@/assets/TaskModal.vue';
import { useGlobalStore } from '@/stores/global'

const global = useGlobalStore();

</script>

<style>
header {
  max-width: 100%!important;
}

main {
  max-width: 100%!important;
}


.modal_kanban{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(186, 186, 186, 0.4);
  display: flex; 
  align-items: center; 
  justify-content: center;
  z-index: 1000;
}

.modal_content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f7f7f7;;
  padding: 20px;
  border: 1px solid #e7e7e7;
  border-radius: 15px;
  box-shadow: 4px 4px 14px #adadad;
  width: 50%; 
}

.display_modal {
  display: flex!important;
}

.button_kanban{
  border-radius: 7px!important;
}
</style>
