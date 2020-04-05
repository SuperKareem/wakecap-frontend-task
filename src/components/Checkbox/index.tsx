/*
 *
 * Component: `Checkbox`.
 *
 */
import React from "react";
import { CheckBox, InputField, Wrapper, Label } from "./StyledInput";
import { CheckboxProps } from "./interfaces";

const StyledCheckbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  onInputChanged,
  editable,
}: CheckboxProps) => {
  const handleChange = React.useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      if (onInputChanged) {
        onInputChanged(value);
      }
    },
    [onInputChanged]
  );

  return (
    <Wrapper>
      <CheckBox type="checkbox" checked={checked} onChange={onChange} />

      {editable ? (
        <InputField value={label} onChange={handleChange} />
      ) : (
        <Label>{label}</Label>
      )}
    </Wrapper>
  );
};

StyledCheckbox.defaultProps = {
  editable: false,
};

export default StyledCheckbox;
