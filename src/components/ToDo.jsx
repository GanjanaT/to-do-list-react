import React from "react";

function ToDo({ todo, setToDoList }) {
  function toggleCompleated(checked, id) {
    setToDoList((prev) => {
      return prev.map((todo) => todo.id === id ? { ...todo, checked } : todo);
    });
  }

  function deleteToDo(id) {
    setToDoList((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            name="todo"
            onChange={(e) => toggleCompleated(e.target.checked, todo.id)}
          />
          <span>{todo.title}</span>
        </label>
        <button
          type="button"
          onClick={() => deleteToDo(todo.id)}
          className="delete-button"
        >
          Delete todo
        </button>
      </li>
    </>
  );
}

export default ToDo;
