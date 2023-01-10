import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.bg || "#15161b"};
  color: ${(props) => props.color || "#eeeeee"};
  border: ${(props) => props.border || "1px solid eeeeee"};
  padding: ${(props) => props.padding || "0.3rem 0.8rem"};
  margin: ${(props) => props.margin || "0 0.5rem"};
  min-width: ${(props) => props.minWidth || "100%"};
  max-width: ${(props) => props.maxWidth || "100%"};
  font-size: ${(props) => props.fontSize || "0.7rem"};
  font-family: inherit;
  border-radius: 2px !important;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #3e3e3e;
  }

  &:disabled {
    cursor: not-allowed;
    pointer-events: all !important;
  }
`;

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
