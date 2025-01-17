import { useState } from "react";
import Todo from "./Todo"

const TodoList = ({ todoList, setTodoList, onEditItem }) => {


    const onDeleteItem = (event, key) => {
        const deleteItem = todoList.find(item => item.key === key)
        setTodoList(preList => preList.filter(item => item.key !== deleteItem.key))
    }


    return (
        <>
            {todoList.map(item => <Todo key={item.key} item={item} onDeleteItem={onDeleteItem} onEditItem={onEditItem} />)}
        </>
    );
}

export default TodoList