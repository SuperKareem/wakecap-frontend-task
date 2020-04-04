export interface IUser {
  id: number;
  username: string;
}

export interface IToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
