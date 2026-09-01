import { useTarefaStore } from "../store/useTarefaStore";
function TodoForm({ todo }) {
  const { setTodos } = useTarefaStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: e.target[0].value,
      completed: false,
    };
    setTodos([...todo, newTodo]);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add homeworks" />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
