/*
 *
 * Store: `todos`.
 *
 */
import * as React from "react";
import { IState } from "./interfaces";
import {
  usersReducer,
  initialState as usersInitialState,
} from "./reducers/users";
import {
  todosReducer,
  initialState as todosInitialState,
} from "./reducers/todos";
import { loadUserData } from "./reducers/users/Actions";
import {
  loadUserTodos,
  toggleTodo,
  deleteTodo,
  createTodo,
} from "./reducers/todos/Actions";

export const Context = React.createContext<IState>({
  ...usersInitialState,
  ...todosInitialState,
});

export const Provider: React.FC = ({ children }) => {
  const [usersState, usersDispatch] = React.useReducer(
    usersReducer,
    usersInitialState
  );
  const [todoState, todoDispatch] = React.useReducer(
    todosReducer,
    todosInitialState
  );

  return (
    <Context.Provider
      // @ts-ignore
      value={{
        ...usersState,
        ...todoState,
        loadUserData: loadUserData(usersDispatch),
        loadUserTodos: loadUserTodos(todoDispatch),
        toggleTodo: toggleTodo(todoDispatch),
        deleteTodo: deleteTodo(todoDispatch),
        createTodo: createTodo(todoDispatch),
      }}
    >
      {children}
    </Context.Provider>
  );
};
