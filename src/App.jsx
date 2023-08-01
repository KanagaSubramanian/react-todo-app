import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();

    newItem !== "" &&
      setTodos((currentTodos) => {
        return [
          ...currentTodos,
          {
            id: crypto.randomUUID(),
            title: newItem,
            isCompleted: false,
          },
        ];
      });
    setNewItem("");
  }
  function toggleTodo(id, isCompleted) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) return { ...todo, isCompleted };
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <div className='container min-vh-100 d-flex align-items-center flex-column pt-5'>
      <h2>TODO APP</h2>
      <form className='input-form w-50' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='newItem' className='form-label'>
            New Item
          </label>
          <input
            type='text'
            className='form-control'
            name='newItem'
            id='newItem'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <button className='btn btn-primary rounded-0 btn-sm w-100'>
            Add new
          </button>
        </div>
      </form>
      <div className='w-50'>
        <h4>Todo List</h4>
        {todos.length === 0 ? (
          <p className='text-center'>There is nothing left for you to do</p>
        ) : (
          ""
        )}
        <ul className='list-unstyled list-group'>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className='d-flex align-item-center justify-content-between gap-2 list-group-item'>
              <div className='d-flex align-item-center gap-2 '>
                <input
                  type='checkbox'
                  className='form-check-input'
                  name=''
                  id=''
                  checked={todo.isCompleted}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                <span
                  className={
                    todo.isCompleted ? "text-decoration-line-through" : ""
                  }>
                  {todo.title}
                </span>
              </div>

              <button
                className='btn btn-danger btn-sm'
                onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
