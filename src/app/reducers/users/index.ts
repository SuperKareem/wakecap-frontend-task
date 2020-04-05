/*
 *
 * Reducer: `users`.
 *
 */
import { IUsersState } from "./interfaces";
import { UserDataAction } from "./ActionsTypes";

export const initialState: IUsersState = {
  users: [],
  loadingUserData: false,
};

export const usersReducer = (
  state: IUsersState = initialState,
  action: UserDataAction
) => {
  switch (action.type) {
    case "LOAD_USER_DATA":
      return {
        ...state,
        loadingUserData: true,
      };
    case "LOAD_USER_DATA_SUCCESS":
      return { ...state, loadingUserData: false, users: action.payload.data };
    case "LOAD_USER_DATA_FAILED":
      return { ...state, loadingUserData: false, error: action.error };

    default:
      return state;
  }
};
