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
            const newTask = {
                ...task,
                id: crypto.randomUUID(),
                order: this.tasks.length
            }

            this.tasks.push(newTask)
            saveTasks(this.tasks)
        },

        updateTask(updatedTask) {
            const index = this.tasks.findIndex(t => t.id === updatedTask.id)
            if (index !== -1) {
                this.tasks[index] = updatedTask
                saveTasks(this.tasks)
            }
        },

        deleteTask(id) {
            this.tasks = this.tasks.filter(task => task.id !== id)
            saveTasks(this.tasks)
        },


        reorderByIndex(status, oldIndex, newIndex) {
            const columnTasks = this.tasks
                .filter(t => t.status === status)
                .sort((a,b) => a.order - b.order)

            const moved = columnTasks.splice(oldIndex, 1)[0]
            columnTasks.splice(newIndex, 0, moved)

            columnTasks.forEach((task, index) => {
                task.order = index
            })

            saveTasks(this.tasks)
        },

        insertAtIndex(status, task, newIndex) {
            task.status = status

            const columnTasks = this.tasks
                .filter(t => t.status === status)
                .sort((a,b) => a.order - b.order)

            const existingIndex = columnTasks.findIndex(t => t.id === task.id)
            if (existingIndex !== -1) {
                columnTasks.splice(existingIndex, 1)
            }

            columnTasks.splice(newIndex, 0, task)

            columnTasks.forEach((t, index) => {
                t.order = index
            })

            saveTasks(this.tasks)
        }
    }
})