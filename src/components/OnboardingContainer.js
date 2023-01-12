import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useOnboarderContainer } from "../hooks/useOnboarderContainer";
import { OnboardContext } from "./OnboardingProvider";
import OnboardOverlay from "./OnboardOverlay";
import Button from "../styles/Button";

const OnboarderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Can be altered as an option
  justify-content: center; // Can be an option later
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: ${(props) => (props.color ? props.color : "#eeeeee")};
  z-index: 60;
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "helvetica"};

  overflow: hidden;

  section {
    position: absolute;
    top: ${(props) => (props.top ? props.top : "30%")};
    left: ${(props) => (props.left ? props.left : "inherit")};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border: ${(props) => (props.border ? props.border : "1px solid #eeeeee")};
    border-radius: ${(props) =>
      props.borderRadius ? props.borderRadius : "2px"};
    padding: ${(props) => (props.padding ? props.padding : "2rem")};
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "#15161b"};
    width: ${(props) => (props.width ? props.width : "25%")};
    height: ${(props) => (props.height ? props.height : "")};
    box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.1);
    z-index: 60;
    overflow: hidden;
    box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : "")};

    h2 {
      font-size: ${(props) =>
        props.titleFontSize ? props.titleFontSize : "2rem"};
      padding: 0.5rem 0;
      margin: 0;
      text-align: left;
    }

    p {
      font-size: ${(props) =>
        props.descriptionFontSize ? props.descriptionFontSize : "1rem"};
      font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 600)};
      line-height: 1.8;
      text-align: left;
    }

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (max-width: 800px) {
    section {
      width: ${(props) => (props.width ? props.width : "50%")};
      height: ${(props) => (props.height ? props.height : "")};
      padding: 2rem;
      border: ${(props) => (props.border ? props.border : "1px solid #eeeeee")};
      justify-content: flex-start;

      h2 {
        font-size: 1rem;
        padding: 0.5rem 0;
      }

      p {
        margin-top: 1rem;
        font-size: 0.8rem;
      }

      button {
        margin-top: 2rem;
        padding: 0.5rem;
      }
    }
  }
`;

const OnboardingContainer = ({
  stepData,
  showOnboarding,
  finishOnboarding,
  options,
}) => {
  const { containerRef } = useOnboarderContainer();
  const [openModal, setOpenModal] = useState(showOnboarding);

  const [stepContext, setNextStep] = useContext(OnboardContext);

  const nextStep = () => {
    setNextStep(stepContext + 1);
  };

  const previousStep = () => {
    setNextStep(stepContext - 1);
  };

  const finishOnboardingHandler = () => {
    setOpenModal(false);
    setNextStep(0);
    finishOnboarding();
  };

  const exitOnboarding = () => {
    setOpenModal(false);
  };

  return (
    <>
      {openModal && (
        <>
          <OnboarderContainer
            ref={containerRef}
            {...options?.modal}
            top={stepData[stepContext]?.position?.top}
            left={stepData[stepContext]?.position?.left}
          >
            <section>
              {}
              <h2>{stepData[stepContext]?.title}</h2>
              <p>{stepData[stepContext]?.description}</p>

              <div>
                {stepContext > 0 && (
                  <Button
                    minWidth="50%"
                    padding="1rem"
                    onClick={previousStep}
                    {...options?.button}
                  >
                    Previous step
                  </Button>
                )}
                {stepData.length - 1 !== stepContext ? (
                  <Button
                    {...options?.button}
                    padding="1rem"
                    minWidth="50%"
                    onClick={nextStep}
                  >
                    Next step
                  </Button>
                ) : (
                  <Button
                    {...options?.button}
                    minWidth="50%"
                    padding="1rem"
                    onClick={finishOnboardingHandler}
                  >
                    Finish
                  </Button>
                )}
              </div>
            </section>
          </OnboarderContainer>
          <OnboardOverlay options={options?.overlay} />
        </>
      )}
    </>
  );
};

export default OnboardingContainer;
