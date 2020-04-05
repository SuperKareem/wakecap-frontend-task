/*
 *
 * Component: `StyledInput`.
 *
 */
import styled from "styled-components";

type InputType = "checkbox";

type StyledInputProps = {
  type: InputType;
  checked: boolean;
  readonly: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0.75 0.75;
`;

export const Label = styled.span`
  margin: 8px 20px;
`;

export const CheckBox = styled.input.attrs<StyledInputProps>({
  type: "checkbox",
})`
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

export const InputField = styled.input`
  outline: 0;
  width: 200px;
  margin: 0 8px 8px 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  padding: 6.5px 11px;
  font-size: 16px;
  border-color: #40a9ff;
  margin-inline-start: 20px;
  flex: 1;
  &:focus {
    border-right-width: 1px !important;
    -webkit-box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;
