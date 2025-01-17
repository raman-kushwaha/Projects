import styles from "./AddTodo.module.css"

const AddTodo = ({ setTodoList, getTodoName, getTodoDate }) => {



    const onClickAddTodo = (event) => {
        const gettodoName = getTodoName.current.value
        const gettodoDate = getTodoDate.current.value


        getTodoName.current.value = ""
        getTodoDate.current.value = ""

        setTodoList(preList => [{
            todoName: gettodoName,
            todoDate: gettodoDate,
            key: `${Date.now()}`
        }, ...preList])
    }

    return <div className="container">
        <div className="row">
            <div className="col-5">
                <input type="text" className={styles.todo} placeholder="Enter Todo Here..." ref={getTodoName} />
            </div>
            <div className="col-5">
                <input type="date" className={styles.date} ref={getTodoDate} />
            </div>
            <div className="col-2">
                <button type="button" className={`btn btn-primary ${styles.button}`} onClick={onClickAddTodo}>ADD</button>
            </div>
        </div>
    </div>
}

export default AddTodo