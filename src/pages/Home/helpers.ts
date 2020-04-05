/*
 *
 *  Helpers: `Home`
 *
 */
import { IUser } from "app/reducers/users/interfaces";
import { ReactSelectOption } from "./interfaces";

export const formatDataForReactSelect = (users: IUser[]): ReactSelectOption[] =>
  users.map((user) => ({ value: user.id, label: user.name }));
