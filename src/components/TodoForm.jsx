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
        marginBottom: "20px",
        width: "100%",
        maxWidth: "400px",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#f5f5f5",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease-in-out",
        ":hover": {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
        
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
