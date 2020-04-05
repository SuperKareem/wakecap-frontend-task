/*
 *
 * Component: `ToDoItem`.
 *
 */
import React from "react";
import Checkbox from "components/Checkbox";
import Button from "components/Button";
import { TodoWrapper } from "./partials";
import { TodoItemProps } from "./interfaces";

const TodoItem: React.FC<TodoItemProps> = ({
  title,
  completed,
  onToggle,
  onDelete,
  onCreate,
  buttonType,
  buttonLabel,
  onInputChanged,
  editable,
}): JSX.Element => {
  return (
    <TodoWrapper>
      <Checkbox
        onInputChanged={onInputChanged}
        label={title}
        checked={completed}
        onChange={onToggle}
        editable={editable}
      />
      <Button
        label={buttonLabel}
        onClick={onCreate || onDelete}
        buttonType={buttonType}
      />
    </TodoWrapper>
  );
};

TodoItem.defaultProps = {
  buttonLabel: "Delete",
  buttonType: "danger",
};

export default TodoItem;
