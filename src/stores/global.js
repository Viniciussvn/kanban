import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    isTaskModalOpen: false,
    taskModalType: 'create',
    taskBeingEdited: null
  }),

  actions: {
    openTaskModal(type = 'create', task = null) {
      this.taskModalType = type
      this.taskBeingEdited = task
      this.isTaskModalOpen = true
    },

    closeTaskModal() {
      this.isTaskModalOpen = false
      this.taskBeingEdited = null
    }
  }
})