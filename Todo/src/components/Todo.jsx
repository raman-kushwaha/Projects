import styles from "./Todo.module.css"

const Todo = ({ item }) => {


    return (
        <div className={`container ${styles.todoContainer}`}>
            <div className="row">
                <div className={`col-5 ${styles.todoName}`}>
                    {item.todoName}
                </div>
                <div className={`col-5 ${styles.todoDate}`}>
                    {item.todoDate}
                </div>
                <div className={`col-2 ${styles.buttonContainer}`}>
                    <button type="button" className={`btn btn-primary ${styles.button}`}>EDIT</button>
                    <button type="button" className={`btn btn-secondary ${styles.button}`}>DELETE</button>

                </div>
            </div>
        </div>

    );
}

export default Todo