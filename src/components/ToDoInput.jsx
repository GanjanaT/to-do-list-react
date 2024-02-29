import React from "react";

function ToDoInput() {
  return (
    <>
      {/* <div className="add-container"> */}
        <div className="input-container">
          <label htmlFor="todo-input">
            <input
              className="todo-input"
              type="text"
              name="todo-input"
              id="todo-input"
              placeholder="to do.."
            />
          </label>
          <button className="style-btn">Add</button>
        </div>
      {/* </div> */}
    </>
  );
}

export default ToDoInput;
