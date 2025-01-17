import { useReducer, useRef, useState } from "react";
import { StorageContext } from "../store/StorageContext";
import styles from "./TodoContainer.module.css";

const reducer = (curList, action) => {
  let newTodoList = curList;

  if (action.type === "ADD_TODO") {
    newTodoList = [action.payload, ...curList];
  } else if (action.type === "EDIT_TODO") {
    newTodoList = curList.filter((item) => item.key !== action.payload.key);
  } else if (action.type === "DELETE_TODO") {
    newTodoList = curList.filter((item) => item.key !== action.payload.key);
  }

  return newTodoList;
};

const TodoContainer = ({ children }) => {
  // const [todoList, setTodoList] = useState([])

  const [todoList, dispatchTodoList] = useReducer(reducer, []);

  const getTodoName = useRef();
  const getTodoDate = useRef();

  const onClickAddTodo = (event) => {
    const gettodoName = getTodoName.current.value;
    const gettodoDate = getTodoDate.current.value;

    getTodoName.current.value = "";
    getTodoDate.current.value = "";

    try {
      if (gettodoName && gettodoDate) {
        dispatchTodoList({
          type: "ADD_TODO",
          payload: {
            todoName: gettodoName,
            todoDate: gettodoDate,
            key: `${Date.now()}`,
          },
        });
      } else {
        throw new Error("Must Enter your task as well as date");
      }
    } catch (error) {
      alert(error);
    }
  };

  const onEditItem = (event, key) => {
    const selectedItem = todoList.find((item) => item.key === key);

    getTodoName.current.value = selectedItem.todoName;
    getTodoDate.current.value = selectedItem.todoDate;

    dispatchTodoList({
      type: "EDIT_TODO",
      payload: {
        key,
      },
    });
  };

  const onDeleteItem = (event, key) => {
    const deleteItem = todoList.find((item) => item.key === key);

    dispatchTodoList({
      type: "DELETE_TODO",
      payload: {
        key,
      },
    });
  };
  return (
    <StorageContext.Provider
      value={{
        todoList,
        dispatchTodoList,
        onEditItem,
        onClickAddTodo,
        onDeleteItem,
        getTodoName,
        getTodoDate,
      }}
    >
      <div className={styles.todoContainer}>{children}</div>
    </StorageContext.Provider>
  );
};

export default TodoContainer;
