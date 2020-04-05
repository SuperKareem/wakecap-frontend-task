/*
 *
 * Component: `ToDoItem`.
 *
 */
import React from "react";
import Checkbox from "components/Checkbox";
import Button, { ButtonType } from "components/Button";
import styled from "styled-components";

type Props = {
  id?: number;
  title: string;
  completed?: boolean;
  onToggle: () => void;
  onDelete?: () => void;
  buttonType?: ButtonType;
  buttonLabel?: string;
  editable?: boolean;
  onInputChanged?: (newValue: string) => void;
  onCreate?: () => void;
};

const TodoWrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  min-height: 50px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d1d1d1;
`;

const TodoItem: React.FC<Props> = ({
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
