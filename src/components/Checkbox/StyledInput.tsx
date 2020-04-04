/*
 *
 * Component: `StyledInput`.
 *
 */
import styled from "styled-components";

type InputType = "checkbox";

interface StyledInputProps {
  type: InputType;
  checked: boolean;
  readonly: boolean;
}

const StyledInput = styled.input.attrs<StyledInputProps>({ type: "checkbox" })`
  cursor: pointer;
  visibility: hidden;
  position: relative;
  &:before {
    visibility: visible;
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    border: 1px solid #1de9b6;
    border-radius: 4px;
    background-color: #00bfa5;
  }

  &:after {
    left: 5px;
    top: -2px;
    position: absolute;
    visibility: visible;
    content: "✔";
    font-size: 20px;
    color: #a7ffeb;
  }
  &:not(:checked) {
    &:after {
      content: "";
    }
    &:before {
      background-color: #b2dfdb;
    }
  }
`;

export default StyledInput;
