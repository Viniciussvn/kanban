import { defineStore } from "pinia";

import axios from 'axios';
import Api from "@/api";

import { useToast, POSITION, TYPE } from "vue-toastification";
const toast = useToast();

import { useAuthStore } from '@/stores/auth';

// TO ACCESS ROUTER ON PINIA
// this.router. ...
// TO ACCESS ROUTER ON PINIA

export const useGlobalStore = defineStore('global', {

    state: () => ({
        total_tasks: {},
        to_do: {},
        doing: true,
        done: {},
    }),

    actions: {
        loader(r) {
            document.getElementById("global_loader").style.display = (r == 'show') ? 'block' : 'none';
        },
    }
})