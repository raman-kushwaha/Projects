import styles from "./ListContainer.module.css"

const ListContainer = ({ children }) => {
    return <div className={`${styles.listContainer}`}>
        {children}
    </div>
}

export default ListContainer