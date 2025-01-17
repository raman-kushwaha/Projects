import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import TodoHeading from "./components/TodoHeading"
import AddTodo from "./components/AddTodo"
import TodoContainer from "./components/TodoContainer"
import TodoList from "./components/TodoList"
import { useState, useRef } from "react"


const App = () => {
  const [todoList, setTodoList] = useState([])
  const getTodoName = useRef()
  const getTodoDate = useRef()

  const onEditItem = (event, key) => {
    const selectedItem = todoList.find(item => item.key === key)
    console.log(selectedItem);

    getTodoName.current.value = selectedItem.todoName
    getTodoDate.current.value = selectedItem.todoDate

    setTodoList(preList => preList.filter(item => item.key !== key))

  }

  return (
    <TodoContainer>
      <TodoHeading />
      <AddTodo setTodoList={setTodoList} getTodoName={getTodoName} getTodoDate={getTodoDate} />
      <TodoList todoList={todoList} setTodoList={setTodoList} onEditItem={onEditItem} />
    </TodoContainer>
  );


}

export default App