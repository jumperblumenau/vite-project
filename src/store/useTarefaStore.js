import { create } from "zustand";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

const referenciaColecaoTarefas = collection(db, "tarefas");

export const useTarefaStore = create((set, get) => ({
  tarefas: [],
  carregando: true,
  erro: null,
  cancelarInscricao: null,

  inscreverTarefas: () => {
    set({ carregando: true, erro: null });

    const consultaTarefas = query(referenciaColecaoTarefas);

    const cancelarInscricao = onSnapshot(
      consultaTarefas,
      (retornoConsulta) => {
        const tarefas = retornoConsulta.docs.map((documento) => ({
          id: documento.id,
          ...documento.data(),
        }));
        set({ tarefas, carregando: false });
      },
      (erro) => {
        console.error("Erro ao escutar tarefas:", erro);
        set({
          erro:
            "Não foi possível carregar as tarefas. " +
            "Verifique sua conexão e as credenciais no .env.",

          carregando: false,
        });
      },
    );

    set({ cancelarInscricao });
  },

  cancelarInscricaoTarefas: () => {
    const { cancelarInscricao } = get();
    if (cancelarInscricao) cancelarInscricao();
  },

  adicionarTarefas: async (titulo) => {
    const tyituloLimpo = titulo.trim();
    if (!tituloLimpo) return;

    try {
      await addDoc(referenciaColecaoTarefas, {
        titulo: tituloLimpo,
        concluido: false,
        criadoEm: serverTimestamp(),
      });
    } catch (erro) {
      console.error("Erro ao adicionar tarefa:", erro);
      set({ erro: "Não foi possível adicionar a tarefa. " });
    }
  },
  alternarTarefas: async (id, concluido) => {
    try {
      const referenciaDocumento = doc(db, "tarefas", id);
      await updateDoc(referenciaDocumento, { concluido: !concluido });
    } catch (erro) {
      console.error("Erro ao alternar tarefa:", erro);
      set({ erro: "Não foi possível alternar a tarefa. " });
    }
  },
}));
