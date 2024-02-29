import React from "react";
import "../pages/todo-page.css";
import ToDoInput from "../components/ToDoInput";
import ToDo from "../components/ToDo";
import deleteIcon from "../assets/bin.png";

function ToDoPage() {
  return (
    <>
      <h1>Do it.</h1>
      <section className="container list-styling">
        <h2>{"Ganajnas"} to do list</h2>
        <ToDoInput></ToDoInput>
        <div className="list-item-container">
          <ul className="todo-list">
            <ToDo></ToDo>
          </ul>
        </div>
      </section>
    </>
  );
}

export default ToDoPage;
