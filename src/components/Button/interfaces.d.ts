/*
 *
 * Interfaces: `Button`.
 *
 */
export type ButtonType = "danger" | "primary" | "secondary";

export type StyledButtonProps = {
  buttonType: ButtonType;
};

export type ButtonProps = {
  onClick: () => void;
  label: string;
} & StyledButtonProps;
