import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import WelcomePage from "./pages/WelcomePage"
import ToDoPage from "./pages/TodoPage";
import NotFoundScreen from "./pages/NotFoundPage";
import AsideNav from "./components/AsideNav";
import ShowDate from "./components/ShowDate";

function App() {
  return (
      <BrowserRouter>
        <>
        <AsideNav></AsideNav>
        <main>
          <ShowDate></ShowDate>
        <Routes>
            <Route exact path='/' element={<WelcomePage/>} />
            <Route exact path='/todo' element={<ToDoPage/>} />
            <Route path='*' element={<NotFoundScreen/>} />
          </Routes>
        </main>
        </>
      </BrowserRouter>
  )
}

export default App
