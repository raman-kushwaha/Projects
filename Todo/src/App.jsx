import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import TodoHeading from "./components/TodoHeading"
import AddTodo from "./components/AddTodo"
import TodoContainer from "./components/TodoContainer"
import TodoList from "./components/TodoList"


const App = () => {
  const todoList = [
    {
      todoName: 'Buy Milk',
      todoDate: '10/10/2024'
    },

  ]
  return (
    <TodoContainer>
      <TodoHeading />
      <AddTodo />
      <TodoList todoList={todoList} />
    </TodoContainer>
  );


}

export default App