import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "rgba(0, 0, 0, 0.6)"};
  opacity: ${(props) => (props.opacity ? props.opacity : 0.5)};
  z-index: 50;
`;

const OnboardOverlay = ({ options }) => {
  return <Overlay {...options}></Overlay>;
};

export default OnboardOverlay;
