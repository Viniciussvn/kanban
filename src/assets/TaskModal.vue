<template>
  <div class="modal_kanban" @mousedown.self="closeModal()">
    <div class="modal_content">
      <div v-if="props.type === 'delete'">
        <div class="modal_header mb-4">
          <h3>
            Você deseja deletar a task <b>{{ task_data.title }}</b
            >?
          </h3>
        </div>
        <div class="modal_body">
          <div class="task_desc">
            <p>Descrição: {{ task_data.description }}</p>
          </div>
        </div>
        <div class="task_footer mt-4">
          <div class="text-end">
            <button class="btn button_kanban btn-primary btn-sm me-2" @click="closeModal()">
              NÃO
            </button>
            <button class="btn button_kanban btn-danger btn-sm" @click="deleteTask(task_data.id)">
              DELETAR
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-if="props.type === 'create'">
          <div class="modal_header mb-4">
            <h3>Você deseja criar uma nova tarefa?</h3>
          </div>
          <form @submit.prevent="createTask()">
            <div class="row">
              <div class="col-md-6 col-12">
                <label class="d-block mb-2" for="title">Título da tarefa</label>
                <input id="title" class="w-100 task_input" v-model="task_data.title" />
              </div>
              <div class="col-md-6 col-12">
                <label class="d-block mb-2" for="status">Status</label>
                <select
                  id="description"
                  class="w-100 task_input disabled"
                  v-model="task_data.status"
                  disabled
                >
                  <option value="todo" default>A fazer</option>
                  <option value="doing">Fazendo</option>
                  <option value="done">Feito</option>
                </select>
              </div>
              <div class="col-12">
                <label class="d-block mb-2" for="description">Descrição</label>
                <input id="description" class="w-100 task_input" v-model="task_data.description" />
              </div>
            </div>
            <div class="task_footer mt-4">
              <div class="text-start required_warning">
                <span v-if="requiredNotFilled">Todos os campos são obrigatórios</span>
              </div>
              <div class="text-end">
                <div class="btn button_kanban btn-primary btn-sm me-2" @click="closeModal()">
                  CANCELAR
                </div>
                <button type="submit" class="btn button_kanban btn-success btn-sm">CRIAR</button>
              </div>
            </div>
          </form>
        </div>
        <div v-else-if="props.type === 'edit'">
          <form @submit.prevent="updateTask()">
            <div class="modal_header mb-4">
              <h3>Editanto a tarefa de ID: {{ store.task.title }}</h3>
            </div>
            <div class="row">
              <div class="col-md-6 col-12">
                <label class="d-block mb-2" for="title">Título da tarefa</label>
                <input id="title" class="w-100 task_input" v-model="task_data.title" />
              </div>
              <div class="col-md-6 col-12">
                <label class="d-block mb-2" for="status">Status</label>
                <select id="description" class="w-100 task_input" v-model="task_data.status">
                  <option value="todo" default>A fazer</option>
                  <option value="doing">Fazendo</option>
                  <option value="done">Feito</option>
                </select>
              </div>
              <div class="col-12">
                <label class="d-block mb-2" for="description">Descrição</label>
                <input id="description" class="w-100 task_input" v-model="task_data.description" />
              </div>
            </div>
            <div class="task_footer mt-4">
              <div class="text-start required_warning">
                <span v-if="requiredNotFilled">Todos os campos são obrigatórios</span>
              </div>
              <div class="text-end">
                <div class="btn button_kanban btn-primary btn-sm me-2" @click="closeModal()">
                  CANCELAR
                </div>
                <button type="submit" class="btn button_kanban btn-success btn-sm">SALVAR</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'

import { useGlobalStore } from '@/stores/global'
import { useKanbanStore } from '@/stores/store'

const global = useGlobalStore()
const store = useKanbanStore()

const task_data = ref({
  title: '',
  description: '',
  status: 'todo',
})

const requiredNotFilled = ref(false)

const props = defineProps({
  type: {
    required: true,
    type: String,
  },
  task_id: {
    required: false,
  },
})

onBeforeMount(() => {
  if (store.task.id) {
    task_data.value = { ...store.task }
  }
})

function closeModal() {
  global.closeTaskModal()
}

function createTask() {
  for (let key in task_data.value) {
    if (task_data.value[key] === '') {
      requiredNotFilled.value = true
      return
    }
  }
  store.addTask(task_data.value)
  global.closeTaskModal()
}

function updateTask() {
  for (let key in task_data.value) {
    if (task_data.value[key] === '') {
      requiredNotFilled.value = true
      return
    }
  }
  store.updateTask(task_data.value)
  global.closeTaskModal()
}

function deleteTask(id) {
  store.deleteTask(id)
  global.closeTaskModal()
}
</script>

<style scoped>
.task_input {
  border: 1px solid #cccccc;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
}

.disabled {
  background-color: #cccccc;
}
</style>
