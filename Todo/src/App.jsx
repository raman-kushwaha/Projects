import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import TodoHeading from "./components/TodoHeading"
import AddTodo from "./components/AddTodo"
import TodoContainer from "./components/TodoContainer"
import TodoList from "./components/TodoList"
import { useState, useRef } from "react"
import WelcomeMessage from "./components/WelcomeMessage"


const App = () => {

  return (
    <TodoContainer>
      <TodoHeading />
      <AddTodo />
      <WelcomeMessage />
      <TodoList />
    </TodoContainer>
  );


}

export default App