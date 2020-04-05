import React from "react";
import styled from "styled-components";

export type ButtonType = "danger" | "primary" | "secondary";

type StyledButtonProps = {
  buttonType: ButtonType;
};

const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  border: 0px;
  width: 96px;
  margin-left: 8px;
  color: #fff;
  outline: 0;
  height: 38px;
  font-size: 12px;
  border-radius: 4px;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  background-color: ${({ buttonType }) =>
    buttonType === "danger"
      ? "#ff4d4f"
      : buttonType === "primary"
      ? "#1890ff"
      : "#796c6c"};
`;

type ButtonProps = {
  onClick: () => void;
  label: string;
} & StyledButtonProps;

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  buttonType,
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton buttonType={buttonType} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
