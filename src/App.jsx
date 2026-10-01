import { useEffect } from 'react'
import  Cabecalho  from './components/Cabecalho'
import  TodoForm  from './components/TodoForm'
import {useTarefaStore}  from './store/useTarefaStore';
import TodoList from './components/TodoList'

export default function App() {
  const { tarefas, erro, limparErro, inscreverTarefas, cancelarInscricaoTarefas } = useTarefaStore();

  useEffect(() => {
    inscreverTarefas()

    return () => {
      cancelarInscricaoTarefas();
    };
  }, [inscreverTarefas, cancelarInscricaoTarefas]);

  const concluidas = tarefas.filter(tarefa => tarefa.concluido).length
  
  return (
    <div className="aplicativo">
      <div className="aplicativo__cartao">
        <Cabecalho total={tarefas.length} concluidas={concluidas} />

        {erro && (
          <div className='aplicativ__erro' role='alert'>
            <span>{erro}</span>
            <button type='button' onClick={limparErro} aria-label='Fechar aviso'>x</button>
            </div>
        )}

        <TodoForm />
        <TodoList />


      </div>
    </div>


  )
}


