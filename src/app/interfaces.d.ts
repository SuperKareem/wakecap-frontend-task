import { IUsersState } from "./reducers/users/interfaces";
import { ITodosState } from "./reducers/todos/interfaces";

export type IState = ITodosState & IUsersState;
