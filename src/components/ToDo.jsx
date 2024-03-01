import React from "react";

function ToDo({ todo, setToDoList }) {
  function toggleCompleated(id, checked) {
    setToDoList((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked };
        }
        return todo;
        // prev.map(todo => todo.id === id ? {...todo, checked: true} : todo)
      });
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
            onChange={(e) => toggleCompleated(todo.id, e.target.checked)}
          />
          {todo.title}
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

// vart ska min todo use state ligga?

// måste jag skicka in , checked: false i mitt objekt?
// checked={todo.checked} ?
// ska man ha id
// samma value om man skriver två gånger?

// är checkbox det här del av formuläret?
