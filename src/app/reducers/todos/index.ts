/*
 *
 * Reducer: `todos`.
 *
 */
import { ITodosState } from "./interfaces";
import { TodoAction } from "./ActionsTypes";

export const initialState: ITodosState = {
  todos: {},
  loadingTodos: false,
};

export const todosReducer = (
  state: ITodosState = initialState,
  action: TodoAction
) => {
  switch (action.type) {
    case "LOAD_USER_TODOS":
      return {
        ...state,
        loadingTodos: true,
        selectedUserId: action.payload.userId,
        selectedUsername: action.payload.username,
      };

    case "LOAD_USER_TODOS_EXISTS":
      return {
        ...state,
        selectedUserId: action.payload.userId,
        selectedUsername: action.payload.username,
      };

    case "LOAD_USER_TODOS_SUCCESS":
      return {
        ...state,
        loadingTodos: false,
        todos: { ...state.todos, [state.selectedUserId]: action.payload.data },
      };

    case "LOAD_USER_TODOS_FAILED":
      return { ...state, loadingTodos: false, error: action.error };

    case "TOGGLE_TODO":
      const currentTodo =
        state.todos[state.selectedUserId][action.payload.index];
      currentTodo.completed = !currentTodo.completed;
      if (currentTodo.completed) {
        currentTodo.changed = true;
        currentTodo.date = new Date();
      }

      return {
        ...state,
        todos: {
          ...state.todos,
        },
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: {
          ...state.todos,
          [state.selectedUserId]: state.todos[state.selectedUserId].filter(
            (_, index) => index !== action.payload.index
          ),
        },
      };

    case "CREATE_TODO":
      state.todos[state.selectedUserId].push({
        title: action.payload.title,
        completed: action.payload.completed,
        id: Date.now(),
        userId: state.selectedUserId,
        changed: action.payload.completed,
        date: action.payload.completed && new Date(),
      });
      return {
        ...state,
        todos: {
          ...state.todos,
        },
      };

    default:
      return state;
  }
};
