import { useContext } from "react"
import { StorageContext } from "../store/StorageContext"
import { FaTasks } from "react-icons/fa";


const WelcomeMessage = () => {
    const { todoList } = useContext(StorageContext)
    return <>
        {todoList.length === 0 && <h5>Welcome. What's Your Today's Todo Task 🤷  <FaTasks /></h5>}
    </>
}

export default WelcomeMessage