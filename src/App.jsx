import { useEffect } from 'react'
import ItemTarefas from './components/ItemTarefas'
import TodoForm from './components/TodoForm'
import { useTarefaStore } from './store/useTarefaStore';
import TodoList from './components/TodoList'

export default function App() {
  const { tarefas, erro, limparErro, inscreverTarefas, cancelarInscricaoTarefas } = useTarefaStore();

  useEffect(() => {
    inscreverTarefas()

    return () => {
      cancelarInscricaoTarefas();
    };
  }, [inscreverTarefas, cancelarInscricaoTarefas]);

const concluidas = tarefas.filter((tarefa) => tarefa.concluida).length
  return (
    <div className="aplicativo">
      <div className="aplicativo__cartao">
<Cabecalho total={tarefas.length} concluidas={concluidas} />


      </div>
    </div>
    

      )
}


