import { createContext } from "react";


export const StorageContext = createContext({ todoList: [], setTodoList: () => { }, onEditItem: () => { }, onClickAddTodo: () => { }, gettodoName: {}, getTodoDate: {} })