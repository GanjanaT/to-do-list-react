import React, { useState } from "react";

function ToDoInput({ setToDoList }) {
  const [toDo, setToDo] = useState("");
  const [inputError, setInputError] = useState();

  function validateInput() {
    let error = "";
    if (toDo === "") {
      error = "Please enter a to do";
    }
    return error;
  }

  function handleChange(e) {
    setToDo((prev) => (prev = e.target.value));
    setInputError();
  }

  function handleSubmit(e) {
    e.preventDefault();
    let error = validateInput();
    setInputError(error);
    if (error === "") {
      setToDoList((prev) => [
        ...prev,
        { id: Math.floor(Math.random() * 10000), title: toDo, checked: false },
      ]);
      setToDo("");
    }
  }

  return (
    <>
      {inputError && <p className="error error-position">{inputError}</p>}
      <form onSubmit={handleSubmit} className="input-container">
        <label htmlFor="todo-input">
          <input
            className="todo-input"
            type="text"
            name="todo-input"
            id="todo-input"
            value={toDo}
            onChange={handleChange}
            placeholder="to do.."
          />
        </label>
        <button type="submit" className="style-btn">
          Add
        </button>
      </form>
    </>
  );
}

export default ToDoInput;
