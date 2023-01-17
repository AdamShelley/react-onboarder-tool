import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "#272727"};
  color: ${(props) => props.color || "#eee"};
  border: ${(props) => props.border || "none"};
  padding: ${(props) => props.padding || "0.8rem 1rem 0 1rem"};
  margin: ${(props) => props.margin || "2rem 1rem 0 1rem"};
  /* min-width: ${(props) => props.minWidth || "100%"}; */
  /* max-width: ${(props) => props.maxWidth || "100%"}; */
  font-size: ${(props) => props.fontSize || "1rem"};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "helvetica"};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "5px !important"};
  cursor: pointer;
  user-select: none;
  box-shadow: none;
  transition: ${(props) =>
    props.hoverTransition ? props.hoverTransition : "all .2s ease-in-out"};

  &:hover {
    background-color: ${(props) =>
      props.hoverBackgroundColor ? props.hoverBackgroundColor : "#222"};
    border: ${(props) => (props.hoverBorder ? props.hoverBorder : "none")};
    color: ${(props) => (props.hoverColor ? props.hoverColor : "#fff")};
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
