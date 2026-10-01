<<<<<<< HEAD
import { useTarefaStore } from "../store/useTarefaStore";
=======
import {useTarefaStore} from '../store/useTarefaStore'
>>>>>>> 032f4f144d6ae22c26ffe3565a1841a1773c8879

export default function ItemTarefas({ todo }) {
  const alterarTarefa = useTarefaStore((state) => state.alterarTarefa);
  const removerTarefa = useTarefaStore((state) => state.removerTarefa);

<<<<<<< HEAD
  return (
    <li className={`todo-item ${todo.concluido ? "concluido" : ""}`}>
      <button
        type="button"
        className="item-tarefas__checkbox"
        onClick={() => alterarTarefa(todo.id, { concluido: !todo.concluido })}
        aria-label={
          todo.concluido ? "Marcar como pendente" : "Marcar como concluído"
        }
      >
        {todo.concluido ? "✔️" : "🔲"}
      </button>
      <span className="item-tarefas__titulo">{todo.titulo}</span>
      <button
        type="button"
        className="item-tarefas__remover"
        onClick={() => removerTarefa(todo.id)}
        aria-label="Remover tarefa"
      >
        🗑️
      </button>
    </li>
  );
=======
    const alterarTarefa = useTarefaStore((state) => state.alterarTarefa);
    const removerTarefa = useTarefaStore((state) => state.removerTarefa);

    return (
        <li className={`todo-item ${todo.concluido ? 'concluido' : ''}`}>
            <button type="button"
            className="item-tarefas__checkbox"
            onClick={() => alterarTarefa(todo.id, { concluido: !todo.concluido })}
            aria-label={todo.concluido ? 'Marcar como pendente' : 'Marcar como concluído'}>
                {todo.concluido ? '✔️' : '🔲'}
            </button>
           
            <span className="item-tarefas__titulo">{todo.titulo}</span>
            <button type="button"
            className="item-tarefas__remover"
            onClick={() => removerTarefa(todo.id)}
            aria-label="Remover tarefa">
                🗑️
            </button>
        </li>
    )
>>>>>>> 032f4f144d6ae22c26ffe3565a1841a1773c8879
}
