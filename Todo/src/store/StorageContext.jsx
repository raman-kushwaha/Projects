import { createContext } from "react";

export const StorageContext = createContext({
  todoList: [],
  dispatchTodoList: () => {},
  onEditItem: () => {},
  onClickAddTodo: () => {},
  gettodoName: {},
  getTodoDate: {},
});
