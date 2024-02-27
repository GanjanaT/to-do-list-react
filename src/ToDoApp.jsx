import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage"
import ToDoPage from "./pages/TodoPage";
import NotFoundScreen from "./pages/NotFoundPage";
import './ToDoApp.css'

function ToDoApp() {
  return (
      <BrowserRouter>
        <>
          <Routes>
            <Route exact path='/' element={<WelcomePage/>} />
            <Route exact path='/todo' element={<ToDoPage/>} />
            <Route path='*' element={<NotFoundScreen/>} />
          </Routes>
        </>
      </BrowserRouter>
  )
}

export default ToDoApp
