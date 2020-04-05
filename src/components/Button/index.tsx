import React from "react";
import { StyledButton } from "./partials";
import { ButtonProps } from "./interfaces";

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

export default React.memo(Button);
