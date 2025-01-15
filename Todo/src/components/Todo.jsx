import styles from "./Todo.module.css"

const Todo = ({ item, onDeleteItem, onEditItem }) => {

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
                    >EDIT</button>
                    <button type="button" className={`btn btn-secondary ${styles.button}`}
                        onClick={(event, key) => onDeleteItem(event, item.key)}
                    >DELETE</button>
                </div>
            </div>
        </div>

    );
}

export default Todo