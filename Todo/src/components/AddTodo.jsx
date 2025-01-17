import { useContext } from "react"
import styles from "./AddTodo.module.css"
import { StorageContext } from "../store/StorageContext"
import { MdFileDownloadDone } from "react-icons/md";

const AddTodo = () => {
    const { getTodoName, getTodoDate, onClickAddTodo } = useContext(StorageContext)

    return <div className="container">
        <div className="row">
            <div className="col-5">
                <input type="text" className={styles.todo} placeholder="Enter Todo Here..." ref={getTodoName} />
            </div>
            <div className="col-5">
                <input type="date" className={styles.date} ref={getTodoDate} />
            </div>
            <div className="col-2">
                <button type="button" className={`btn btn-primary ${styles.button}`} onClick={onClickAddTodo}>
                    <MdFileDownloadDone />
                </button>
            </div>
        </div>
    </div>
}

export default AddTodo