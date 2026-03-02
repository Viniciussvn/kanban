import { defineStore } from "pinia";
import { loadTasks, saveTasks } from '@/services/kanbanStorage'

// TO ACCESS ROUTER ON PINIA
// this.router. ...
// TO ACCESS ROUTER ON PINIA

export const useKanbanStore = defineStore('kanban', {
    state: () => ({
        tasks: [],
        task: {},
    }),

    actions: {
        async fetchTasks() {
            this.tasks = loadTasks()
        },

        addTask(task) {
            this.tasks.push(task)
            saveTasks(this.tasks)
        },

        updateTask(updatedTask) {
            const index = this.tasks.findIndex(t => t.id === updatedTask.id)
            if (index !== -1) {
                this.tasks[index] = updatedTask
                saveTasks(this.tasks)
            }
        },

        deleteTask(taskId) {
            this.tasks = this.tasks.filter(t => t.id !== taskId)
            saveTasks(this.tasks)
        }
    }
})