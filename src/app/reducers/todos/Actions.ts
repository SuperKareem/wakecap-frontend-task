/*
 *
 * Actions: `todos`.
 *
 */
import { Dispatch } from "react";
import { TodoAction } from "./ActionsTypes";
import fetchData from "utils/fetchData";
import { ITodo } from "./interfaces";

export const loadUserTodos = (dispatch: Dispatch<TodoAction>) => async (
  userId: number,
  username: string,
  shouldFetch: boolean
): Promise<void> | undefined => {
  if (!shouldFetch) {
    dispatch({
      type: "LOAD_USER_TODOS_EXISTS",
      payload: { userId, username },
    });
    return;
  }

  dispatch({
    type: "LOAD_USER_TODOS",
    payload: { userId, username },
  });

  const [todos, err] = await fetchData<ITodo[]>({
    userId,
    requestType: "todos",
  });

  if (err) {
    dispatch({
      type: "LOAD_USER_TODOS_FAILED",
      error: `error at url: ${err.url},  msg: ${err.msg}`,
    });

    return;
  }

  dispatch({
    type: "LOAD_USER_TODOS_SUCCESS",
    payload: {
      data: todos.splice(0, 5),
    },
  });
};

export const toggleTodo = (dispatch: Dispatch<TodoAction>) => (
  index: number
) => {
  dispatch({ type: "TOGGLE_TODO", payload: { index } });
};

export const deleteTodo = (dispatch: Dispatch<TodoAction>) => (
  index: number
) => {
  dispatch({ type: "DELETE_TODO", payload: { index } });
};

export const createTodo = (dispatch: Dispatch<TodoAction>) => (
  title: string,
  completed: boolean
) => {
  dispatch({ type: "CREATE_TODO", payload: { title, completed } });
};
