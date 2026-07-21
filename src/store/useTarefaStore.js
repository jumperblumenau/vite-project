import { create } from "zustand";

export const useTarefaStore = createe((set) => ({
todos:[],
loading: true,
error: null,
}))