/*
 *
 * Interfaces: `users`.
 *
 */
export type IUser = {
  id?: number;
  name?: string;
};

export type IUsersState = {
  users?: IUser[];
  loadingUserData?: boolean;
  error?: string;
  loadUserData?: () => Promise<void>;
};
