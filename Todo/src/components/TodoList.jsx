import Todo from "./Todo"

const TodoList = ({ todoList }) => {
    return (
        <>
            {todoList.map(item => <Todo key={item.todoName} item={item} />)}


        </>
    );
}

export default TodoList