import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItemList from "./components/FoodItemList"
import ListContainer from "./components/ListContainer"
import FoodName from "./components/FoodName"
import ErrorMessage from "./components/ErrorMessage"
import AddItem from "./components/AddItem"
import { useState } from "react"

function App() {
  const [foodItems, setFoodItems] = useState([])

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      const newItem = event.target.value
      event.target.value = ""
      setFoodItems(preList => [newItem, ...preList])
    }
  }

  return (
    <ListContainer>
      <FoodName />
      <AddItem onKeyDown={onKeyDown} />
      {foodItems.length === 0 ? <ErrorMessage /> : <FoodItemList foodItems={foodItems} />}
    </ListContainer>

  )
}

export default App
