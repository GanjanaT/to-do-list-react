import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

function ToDoInput({ setToDoList }) {
  const [toDo, setToDo] = useState("");
  const [formErrors, setFormErrors] = useState("");

  function validateForm() {
    const MAX_INPUT_LENGHT = 60;
    let error = "";

    if (toDo === "") {
      return error = "Please enter a to do";
    }
    if (toDo.length > MAX_INPUT_LENGHT){
      return error = "Maximum 60 characters"
    }
    return error;
  }

  function handleChange(e) {
    let toDoInput = e.target.value
    setToDo((prev) => (prev = toDoInput));
    setFormErrors("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newToDo = {
      id: Math.floor(Math.random() * 10000),
      title: toDo,
      checked: false,
    };
    let error = validateForm();
    
    setFormErrors(error);

    if (error === "") {
      setToDoList((prev) => [...prev, newToDo]);
      setToDo("");
    }
  }

  return (
    <>
      {formErrors && <p className="error error-position">{formErrors}</p>}
      <form onSubmit={handleSubmit} className="input-container">
        <label>
          <input
            className="todo-input"
            type="text"
            name="todo-input"
            value={toDo}
            onChange={handleChange}
            placeholder="Enter a to do.."
          />
        </label>
        <SubmitButton>Add</SubmitButton>
      </form>
    </>
  );
}

export default ToDoInput;
