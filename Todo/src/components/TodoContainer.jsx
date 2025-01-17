import { useRef, useState } from "react"
import { StorageContext } from "../store/StorageContext"
import styles from "./TodoContainer.module.css"

const TodoContainer = ({ children }) => {
    const [todoList, setTodoList] = useState([])

    const getTodoName = useRef()
    const getTodoDate = useRef()

    const onClickAddTodo = (event) => {
        const gettodoName = getTodoName.current.value
        const gettodoDate = getTodoDate.current.value


        getTodoName.current.value = ""
        getTodoDate.current.value = ""

        try {
            if (gettodoName && gettodoDate) {
                setTodoList(preList => [{
                    todoName: gettodoName,
                    todoDate: gettodoDate,
                    key: `${Date.now()}`
                }, ...preList])
            } else {
                throw new Error("Must Enter your task as well as date")
            }
        } catch (error) {
            alert(error)

        }
    }

    const onEditItem = (event, key) => {
        const selectedItem = todoList.find(item => item.key === key)

        getTodoName.current.value = selectedItem.todoName
        getTodoDate.current.value = selectedItem.todoDate

        setTodoList(preList => preList.filter(item => item.key !== key))

    }


    const onDeleteItem = (event, key) => {
        const deleteItem = todoList.find(item => item.key === key)
        setTodoList(preList => preList.filter(item => item.key !== deleteItem.key))
    }
    return (
        <StorageContext.Provider value={{ todoList, setTodoList, onEditItem, onClickAddTodo, onDeleteItem, getTodoName, getTodoDate }}>
            <div className={styles.todoContainer}>
                {children}
            </div>
        </StorageContext.Provider>
    );
}

export default TodoContainer