export type InputType = "checkbox";

export type StyledInputProps = {
  type: InputType;
  checked: boolean;
  readonly: boolean;
};

export type CheckboxProps = {
  label: string;
  checked: boolean;
  editable?: boolean;
  onChange: () => void;
  onInputChanged: (newValue: string) => void;
};
