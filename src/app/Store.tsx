/*
 *
 * Component: `Store`.
 *
 */
import React, { useReducer, Dispatch } from "react";
import { IUser, IToDo } from "./interfaces";
import { UserDataActions } from "./Actions";
import fetchData from "utils/fetchData";

interface IState {
  users: IUser[];
  todos: IToDo[];
  error?: string;
  loadUserData?: () => Promise<void>;
}

const initialState: IState = {
  users: [],
  todos: [],
};

interface StoreProps {
  children: React.ReactNode;
}

export const StoreContext = React.createContext<IState>(initialState);

const reducer = (state: IState = initialState, action: UserDataActions) => {
  switch (action.type) {
    case "LOAD_USER_DATA_SUCCESS":
      return { ...state, users: action.data };
    case "LOAD_USER_DATA_FAILED":
      return { ...state, error: action.error };

    default:
      return state;
  }
};

const loadUserData = (dispatch: Dispatch<UserDataActions>) => async (): Promise<
  void
> => {
  const [users, err] = await fetchData("users");

  if (err) {
    dispatch({
      type: "LOAD_USER_DATA_FAILED",
      error: `error at url: ${err.url},  msg: ${err.msg}`,
    });

    return;
  }

  if (users.length > 0) {
    const extractedData = users.map(
      (user: IUser): IUser => ({
        id: user.id,
        username: user.username,
      })
    );

    dispatch({
      type: "LOAD_USER_DATA_SUCCESS",
      data: extractedData,
    });
  }
};

const StoreProvider = ({ children }: StoreProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider
      value={{
        ...state,
        loadUserData: loadUserData(dispatch),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
