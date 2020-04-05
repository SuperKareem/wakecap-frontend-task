/*
 *
 * ActionsTypes: `users`.
 *
 */
import { IUser } from "./interfaces";

export type UserDataAction =
  | { type: "LOAD_USER_DATA" }
  | { type: "LOAD_USER_DATA_SUCCESS"; payload: { data: IUser[] } }
  | { type: "LOAD_USER_DATA_FAILED"; error: string };
