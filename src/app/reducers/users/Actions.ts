/*
 *
 * Actions: `users`.
 *
 */
import { Dispatch } from "react";
import { IUser } from "./interfaces";
import { UserDataAction } from "./ActionsTypes";
import fetchData from "utils/fetchData";

const transformData = (data: IUser[]): IUser[] => {
  if (data && data.length > 0) {
    return data.map(
      (user: IUser): IUser => ({
        id: user.id,
        name: user.name,
      })
    );
  }

  return undefined;
};

export const loadUserData = (
  dispatch: Dispatch<UserDataAction>
) => async (): Promise<void> => {
  dispatch({ type: "LOAD_USER_DATA" });

  const [users, err] = await fetchData<IUser[]>({
    requestType: "users",
    transformer: transformData,
  });

  if (err) {
    dispatch({
      type: "LOAD_USER_DATA_FAILED",
      error: `error at url: ${err.url},  msg: ${err.msg}`,
    });

    return;
  }

  dispatch({
    type: "LOAD_USER_DATA_SUCCESS",
    payload: {
      data: users,
    },
  });
};
