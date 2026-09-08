import {useTarefaStore} from '../store/useTarefaStore'
import ItemTarefas from './ItemTarefas'

export default function TodoList() {
    const tarefas = useTarefaStore((state) => state.tarefas)
    const carregando = useTarefaStore((state) => state.carregando)

    if (carregando ) {
        return <p className = "lista_tarefas__status">Carregando tarefas...</p>
    }

    if (tarefas.length === 0) {
        return <div className="lista_tarefas__vacia">
            <p>Nenhuma tarefa encontrada.</p>
            <span>adicione uma nova tarefa usando o formulário acima.</span>
        </div>
    }

    return ( 
        <ul className="lista_tarefas">
            {tarefas.map((todo) => (
                <ItemTarefas key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}