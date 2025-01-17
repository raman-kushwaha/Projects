import { useContext } from "react";
import styles from "./Todo.module.css"
import { StorageContext } from "../store/StorageContext";
import { MdDeleteForever } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";

const Todo = ({ item }) => {
    const { onDeleteItem, onEditItem } = useContext(StorageContext)

    return (
        <div className={`container ${styles.todoContainer}`}>
            <div className="row">
                {<div className={`col-5 ${styles.todoName}`}>
                    {item.todoName}
                </div>}
                <div className={`col-5 ${styles.todoDate}`}>
                    {item.todoDate}
                </div>
                <div className={`col-2 ${styles.buttonContainer}`}>
                    <button type="button" className={`btn btn-primary ${styles.button}`}
                        onClick={(event, key) => onEditItem(event, item.key)}
                    >
                        <MdEditSquare />
                    </button>
                    <button type="button" className={`btn btn-secondary ${styles.button}`}
                        onClick={(event, key) => onDeleteItem(event, item.key)}
                    >
                        <MdDeleteForever />
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Todo