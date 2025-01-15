import styles from "./AddItem.module.css"

const AddItem = ({ onKeyDown }) => {
    return <input type="email" className={`form-control ${styles.input}`} placeholder="Enter Item here..."
        onKeyDown={onKeyDown}
    ></input>
}

export default AddItem