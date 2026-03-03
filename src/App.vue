<template>
  <header>
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
body{
  background-color: #f2f2f2;
}

header {
  max-width: 100%!important;
  padding: 15px;
  background-color: #d4d4d4;
  margin-bottom: 30px;
}

main {
  max-width: 100%!important;
}

.btn{
  font-weight: bold!important;
}

.btn-primary {
  background-color: #08b2b8!important;
  border: #08b2b8!important;
}

.btn-primary:hover {
  background-color: #089ea3!important;
}

.btn-danger {
  background-color: #ce3939!important;
  border: #ce3939!important;
}

.btn-danger:hover {
  background-color: #a82b2b!important;
}

.btn-success {
    background-color: #11a511!important;
  border: #11a511!important;
}

.btn-success:hover {
  background-color: #119211!important;
}

.required_warning {
  color: #dd0606;
  margin-top: -15px;
  margin-bottom: 15px;
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
  top: 30%;
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

.button_kanban {
  border-radius: 7px!important;
}

.column {
  border: 1px solid #ccc;
  padding: 20px 15px;
  border-radius: 5px 5px 15px 15px;
} 

.column_main {
  display: grid;
  gap: 12px;
  transition: all 0.25s ease;
}

.column_task:hover {
  transform: scale(1.02);
}

.column_task {
  border: 1px solid #ccc;
  padding: 8px 15px;
  border-radius: 0px 15px 0px 15px;
  margin-bottom: 8px;
}

.column_task:hover {
  background-color: #ccc;
  cursor:pointer;
}

.delete_task{
  padding: 3px;
}

.delete_task:hover{
  background-color: rgb(216, 60, 60);
  border-radius: 30%;
}

@media  screen and (max-width: 992px) {
  .modal_content {
    width: 80%!important;
  }
}

</style>
