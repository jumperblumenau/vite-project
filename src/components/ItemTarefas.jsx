import {useTarefaStore} from '../store/useTarefaStore'

export default function ItemTarefas({ todo }) {

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
}

