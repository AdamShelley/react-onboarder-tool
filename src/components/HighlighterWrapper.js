import React from "react";
import styled from "styled-components";
import { useShowHighlight } from "../hooks/useShowHighlight";

const HighlightedComponent = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  border: ${(props) =>
    props.border ? props.border : "2px solid #eeeeee !important"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "2px"};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "inherit"};
  color: ${(props) => (props.color ? props.color : "inherit")};
  user-select: none;
  pointer-events: none;
  padding: ${(props) => (props.padding ? props.padding : "inherit")};
  z-index: 55;
`;

const HighlighterWrapper = ({ children, step, width = "100%", options }) => {
  const { highlightRef, currentStep } = useShowHighlight();

  return (
    <>
      {step === currentStep ? (
        <HighlightedComponent width={width} ref={highlightRef} {...options}>
          {children}
        </HighlightedComponent>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default HighlighterWrapper;
