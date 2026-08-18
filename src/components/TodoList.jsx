import {useTarefaStore} from '../store/useTarefaStore'
import { useEffect } from 'react'

function TodoItem({ todo, setTodos }) {
    const { id, text, completed } = todo;

    const handleDelete = () => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleToggle = () => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    return (
        <li className="todo-item">
            <input type="checkbox" checked={completed} onChange={handleToggle} />
            <span className={completed ? "completed" : ""}>{text}</span>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}

export default TodoItem