import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import TodoHeading from "./components/TodoHeading"
import AddTodo from "./components/AddTodo"
import TodoContainer from "./components/TodoContainer"
import TodoList from "./components/TodoList"
import { useState } from "react"


const App = () => {
  const [todoList, setTodoList] = useState([])

  return (
    <TodoContainer>
      <TodoHeading />
      <AddTodo setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </TodoContainer>
  );


}

export default App