import { useTarefaStore } from "../store/useTarefaStore";
import TodoList from "./TodoList";

export default function TodoForm() {
  const { tarefas, addTarefa } = useTarefaStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const tarefaInput = e.target.elements.tarefa;
    const tarefa = tarefaInput.value.trim();
    if (tarefa) {
      addTarefa(tarefa);
      tarefaInput.value = "";
    }
  };
  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="tarefa"
          placeholder="Digite uma nova tarefa..."
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
