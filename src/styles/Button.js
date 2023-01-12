import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "#eeeeee"};
  color: ${(props) => props.color || "#15161b"};
  border: ${(props) => props.border || "1px solid transparent"};
  padding: ${(props) => props.padding || "0.2rem 0.6rem"};
  margin: ${(props) => props.margin || "0 0.5rem"};
  /* min-width: ${(props) => props.minWidth || "100%"}; */
  /* max-width: ${(props) => props.maxWidth || "100%"}; */
  font-size: ${(props) => props.fontSize || "0.7rem"};
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "inherit")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "inherit")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "2px !important"};
  cursor: pointer;
  user-select: none;
  box-shadow: none;
  transition: ${(props) =>
    props.hoverTransition ? props.hoverTransition : "all .2s ease"};

  &:hover {
    background-color: ${(props) =>
      props.hoverBackgroundColor ? props.hoverBackgroundColor : "inherit"};
    border: ${(props) =>
      props.hoverBorder ? props.hoverBorder : "1px solid #eeeeee"};
    color: ${(props) => (props.hoverColor ? props.hoverColor : "#eeeeee")};
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
