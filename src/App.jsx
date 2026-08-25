import { useEffect, useState } from 'react'
/* import TodoItem from './components/TodoItem' */
import TodoForm from './components/TodoForm'
import { useTarefaStore } from './store/useTarefaStore';
/* import TodoList from './components/TodoList' */

function App() {
  const {tarefas, inscreverTarefas, cancelarInscricaoTarefas} = useTarefaStore();

  useEffect(() => {
    inscreverTarefas();

    return () => {
      cancelarInscricaoTarefas();
    };
  }, [inscreverTarefas, cancelarInscricaoTarefas]);


  return (
    <>
    
      <TodoForm />
      
    </>
  )
}

export default App
