/*
 *
 * Component: `ToDoItem`.
 *
 */
import React from "react";
import Checkbox from "components/Checkbox";

interface Props {
  id: string;
  text: string;
  isCompleted?: boolean;
}

const ToDoItem: React.FC<Props> = ({ id, text, isCompleted }): JSX.Element => {
  const [checked, setChecked] = React.useState<boolean>(false);

  const toggle = React.useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return <Checkbox label={text} checked={checked} onChange={toggle} />;
};

export default ToDoItem;
