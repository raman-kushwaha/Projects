import { useState } from "react";
import Todo from "./Todo"

const TodoList = ({ todoList, setTodoList }) => {
    const [deletedList, setDeletedList] = useState([])

    const onDeleteItem = (event, key) => {
        const deleteItem = todoList.find(item => item.key === key)
        setTodoList(preList => preList.filter(item => item.key !== deleteItem.key))
    }

    const onEditItem = (event, key) => {
        const selectedItem = todoList.find(item => item.key === key)
        console.log(selectedItem);

    }
    return (
        <>
            {todoList.map(item => <Todo key={item.key} item={item} onDeleteItem={onDeleteItem} onEditItem={onEditItem} />)}
        </>
    );
}

export default TodoList