/*
 *
 * Interfaces: `todos`.
 *
 */
export type ITodo = {
  userId: number;
  id?: number;
  title: string;
  completed?: boolean;
  changed: boolean;
  date: Date;
};

type IUserTodo = {
  [userId: number]: ITodo[];
};

export type ITodosState = {
  todos?: IUserTodo;
  error?: string;
  selectedUserId?: number;
  selectedUsername?: string;
  loadingTodos?: boolean;
  loadUserTodos?: (
    userId: number,
    username: string,
    shouldFetch: boolean
  ) => Promise<void>;
  toggleTodo?: (index: number) => void;
  deleteTodo?: (index: number) => void;
  createTodo?: (title: string, completed: boolean) => void;
};
