import styles from "./AddTodo.module.css"

const AddTodo = () => {
    return <div className="container">
        <div className="row">
            <div className="col-5">
                <input type="text" className={styles.todo} placeholder="Enter Todo Here..." />
            </div>
            <div className="col-5">
                <input type="date" className={styles.date} />
            </div>
            <div className="col-2">
                <button type="button" className={`btn btn-primary ${styles.button}`}>ADD</button>
            </div>
        </div>
    </div>
}

export default AddTodo