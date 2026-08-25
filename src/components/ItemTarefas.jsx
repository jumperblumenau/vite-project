import {useTarefaStore} from '../store/tarefaStore'

export default function ItemTarefas({ todo }) {

    const alterarTarefa = useTarefaStore((state) => state.alterarTarefa);
    const removerTarefa = useTarefaStore((state) => state.removerTarefa);

    return (
        <li className= {'item-tarefa ${todo.concluido ? 'concluido' : ''}'}>
    )