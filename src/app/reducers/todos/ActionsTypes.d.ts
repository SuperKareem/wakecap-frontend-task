/*
 *
 * ActionsTypes: `todos`.
 *
 */
import { ITodo } from "./interfaces";

export type TodoAction =
  | { type: "LOAD_USER_TODOS"; payload: { userId: number; username: string } }
  | {
      type: "LOAD_USER_TODOS_EXISTS";
      payload: { userId: number; username: string };
    }
  | { type: "LOAD_USER_TODOS_SUCCESS"; payload: { data: ITodo[] } }
  | { type: "LOAD_USER_TODOS_FAILED"; error: string }
  | { type: "TOGGLE_TODO"; payload: { index: number } }
  | { type: "DELETE_TODO"; payload: { index: number } }
  | { type: "CREATE_TODO"; payload: { title: string; completed: boolean } };
