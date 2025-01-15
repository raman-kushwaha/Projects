import styles from "./Item.module.css"

const Item = ({ item, isBought, HandleIsBoughtItem }) => {
    return <li className={`list-group-item ${isBought.includes(item) && "active"}`}>{item}
        <button type="button" className={`btn btn-primary ${styles.button}`}
            onClick={(event) => HandleIsBoughtItem(event, item)}
        >Buy</button>
    </li>
}

export default Item