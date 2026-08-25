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
    <div
      className="form"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add homeworks" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
