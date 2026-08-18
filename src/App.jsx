import { useState } from 'react'
/* import TodoItem from './components/TodoItem' */
import TodoForm from './components/TodoForm'
/* import TodoList from './components/TodoList' */

function App() {
  const [todos, setTodos] = useState([]);


  return (
    <>
    
      <TodoForm />
      
    </>
  )
}

export default App
