import Item from "./Item"
import styles from "./FoodItemList.module.css"
import { useState } from "react"

const FoodItemList = ({ foodItems }) => {
    const [isBought, setBought] = useState([])

    const HandleIsBoughtItem = (event, item) => {
        setBought(preList => [...preList, item])
    }

    return <ul className={`list-group ${styles.listGroup}`}>
        {foodItems.map(item => <Item key={item} item={item} isBought={isBought} HandleIsBoughtItem={HandleIsBoughtItem} />)}

    </ul>
}

export default FoodItemList