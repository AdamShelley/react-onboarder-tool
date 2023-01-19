import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useOnboarderContainer } from "../hooks/useOnboarderContainer";
import { OnboardContext } from "./OnboardingProvider";
import OnboardOverlay from "./OnboardOverlay";
import Button from "../styles/Button";

const OnboarderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    border: ${(props) => (props.border ? props.border : "none")};
    border-radius: ${(props) =>
      props.borderRadius ? props.borderRadius : "10px"};
    padding: ${(props) => (props.padding ? props.padding : "2rem")};
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "#1a1a1a"};
    width: ${(props) => (props.width ? props.width : "25%")};
    height: ${(props) => (props.height ? props.height : "")};
    z-index: 60;
    overflow: hidden;
    box-shadow: ${(props) =>
      props.boxShadow ? props.boxShadow : "0 10px 40px #000"};

    span {
      button {
        border: none;
        color: #eee;
        background-color: transparent;
        font-weight: 900;
        cursor: pointer;
        border-bottom: 1px solid #eee;
        padding: 0.2rem 0;
        margin: 0.5rem 0;
      }
    }

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
      font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
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
      width: ${(props) => (props.mobileWidth ? props.mobileWidth : "75%")};
      height: ${(props) => (props.height ? props.height : "")};
      top: ${(props) => (props.mobileTop ? props.mobileTop : "5%")};
      left: ${(props) => (props.mobileLeft ? props.mobileLeft : "inherit")};
      padding: 2rem;
      justify-content: flex-start;
      /* border: ${(props) => (props.border ? props.border : "none")}; */
      top: ${(props) => (props.mobileTop ? props.mobileTop : "30%")};
      left: ${(props) => (props.mobileLeft ? props.mobileLeft : "inherit")};

      h2 {
        font-size: ${(props) =>
          props.titleFontSize ? props.titleFontSize : "inherit"};
        padding: 0.5rem 0;
      }

      p {
        margin-top: 1rem;
        font-size: ${(props) =>
          props.descriptionFontSize ? props.descriptionFontSize : "inherit"};
      }

      /* button {
        margin-top: 2rem;
        padding: 0.5rem;
      } */
    }
  }
`;

const OnboardingContainer = ({
  stepData,
  showOnboarding,
  finishOnboarding,
  options,
  earlyExitCallback,
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
    setNextStep(0);
    setOpenModal(false);
    finishOnboarding();
  };

  const exitOnboarding = () => {
    setNextStep(0);
    setOpenModal(false);
    earlyExitCallback();
  };

  return (
    <>
      {openModal && (
        <>
          <OnboarderContainer
            ref={containerRef}
            top={stepData[stepContext]?.position?.top}
            left={stepData[stepContext]?.position?.left}
            mobileTop={stepData[stepContext]?.position?.mobileTop}
            mobileLeft={stepData[stepContext]?.position?.mobileLeft}
            {...options?.modal}
          >
            <section>
              {options.showEarlyExit && (
                <span>
                  <button onClick={exitOnboarding}>
                    {options?.earlyExitText || "Exit Tutorial"}
                  </button>
                </span>
              )}

              <h2>{stepData[stepContext]?.title}</h2>
              <p>{stepData[stepContext]?.description}</p>

              <div>
                {stepContext > 0 && (
                  <Button {...options?.button} onClick={previousStep}>
                    {options?.button?.previousButtonText || "Previous"}
                  </Button>
                )}
                {stepData.length - 1 !== stepContext ? (
                  <Button {...options?.button} onClick={nextStep}>
                    {options?.button?.nextButtonText || "Next"}
                  </Button>
                ) : (
                  <Button
                    {...options?.button}
                    onClick={finishOnboardingHandler}
                  >
                    {options?.button?.FinishButtonText || "Finish"}
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
