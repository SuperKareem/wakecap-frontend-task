import { ButtonType } from "components/Button/interfaces";

export type TodoItemProps = {
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
