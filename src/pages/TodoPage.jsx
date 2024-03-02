import React, {useState} from "react";
import "../pages/todo-page.css";
import ToDoInput from "../components/ToDoInput";
import ToDo from "../components/ToDo";
import { useLocation } from "react-router-dom";

function ToDoPage() {
  const location = useLocation();
  const { userName } = location.state;
  const [toDoList, setToDoList] = useState([]);
  console.log(toDoList);
  
  return (
    <>
      <h1>Do it.</h1>
      <section className="container list-styling">
      <h2>{userName + "s"} to do list</h2>
      <ToDoInput setToDoList={setToDoList}></ToDoInput>
        <div className="list-item-container">
          {toDoList.length < 1 ? <p className="empty-list">You have no to do's</p> : 
          <ul className="todo-list">
          {toDoList.map((todo) => (
              <ToDo key={todo.id} todo={todo} setToDoList={setToDoList}></ToDo>
            ))}
          </ul>}
        </div>
      </section>
    </>
  );
}

export default ToDoPage;
