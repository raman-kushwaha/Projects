import { useContext, useState } from "react";
import Todo from "./Todo"
import { StorageContext } from "../store/StorageContext";

const TodoList = () => {
    const { todoList } = useContext(StorageContext)
    return (
        <>
            {todoList.map(item => <Todo key={item.key} item={item} />)}
        </>
    );
}

export default TodoList