import { IUser } from "./interfaces";

export type UserDataActions =
  | { type: "LOAD_USER_DATA" }
  | { type: "LOAD_USER_DATA_SUCCESS"; data: IUser[] }
  | { type: "LOAD_USER_DATA_FAILED"; error: string };

export type UserTodoActions =
  | { type: "LOAD_USER_TODOS" }
  | { type: "LOAD_USER_TODOS_SUCCESS" }
  | { type: "LOAD_USER_TODOS_FAILED" }
  | { type: "UPDATE_USER_TODO" }
  | { type: "DELETE_USER_TODO" };
