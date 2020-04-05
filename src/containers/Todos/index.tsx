/*
 *
 * Container: `Todos`.
 *
 */
import React from "react";
import { Context } from "app/store";
import TodoItem from "components/ToDoItem";

const Todos: React.FC = () => {
  const {
    todos,
    loadingTodos,
    toggleTodo,
    selectedUserId,
    deleteTodo,
    createTodo,
  } = React.useContext(Context);
  const [newTodoCompleted, setNewTodoCompleted] = React.useState<boolean>(
    false
  );
  const [newTodoTitle, setNewTodoTitle] = React.useState<string>();

  const onCreateTodo = React.useCallback(() => {
    createTodo(newTodoTitle, newTodoCompleted);
    setNewTodoCompleted(false);
    setNewTodoTitle("");
  }, [newTodoTitle, newTodoCompleted]);

  const renderTodos = React.useMemo(() => {
    if (selectedUserId) {
      return (
        <>
          <TodoItem
            title={newTodoTitle}
            buttonType="primary"
            buttonLabel="Add"
            completed={newTodoCompleted}
            onToggle={() => setNewTodoCompleted(!newTodoCompleted)}
            onInputChanged={(newValue) => setNewTodoTitle(newValue)}
            editable={true}
            onCreate={onCreateTodo}
          />
          {todos[selectedUserId] &&
            todos[selectedUserId].map(({ id, title, completed }, index) => {
              return (
                <TodoItem
                  key={id}
                  id={id}
                  title={title}
                  completed={completed}
                  onToggle={() => toggleTodo(index)}
                  onDelete={() => deleteTodo(index)}
                />
              );
            })}
        </>
      );
    }

    return null;
  }, [todos, selectedUserId, newTodoCompleted, newTodoTitle]);

  if (loadingTodos) {
    return <span>Loading ...</span>;
  }

  return <div>{renderTodos}</div>;
};

export default React.memo(Todos);
