/*
 *
 * Component: `Checkbox`.
 *
 */
import React from "react";
import styled from "styled-components";
import StyledInput from "./StyledInput";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Label = styled.span`
  margin: 8px 20px;
`;

const StyledCheckbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
}: CheckboxProps) => {
  return (
    <Wrapper>
      <StyledInput type="checkbox" checked={checked} onChange={onChange} />
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default StyledCheckbox;
