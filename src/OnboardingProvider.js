import React, { useState, createContext } from "react";
import OnboardingContainer from "./components/OnboardingContainer";

export const OnboardContext = createContext();

const providerOptions = {
  overlay: {
    backgroundColor: "rgba(0,0,0,.3)",
    opacity: 0.4,
  },
  modal: {
    fontFamily: "sans-serif", //
    fontWeight: "500", //
    titleFontSize: "1rem", //
    descriptionFontSize: ".8rem", //
    border: "1px solid #eeeeee", //
    borderRadius: "5px", //
    color: "#eeeeee", //
  },
  button: {
    fontFamily: "sans-serif",
    fontWeight: "500",
    fontSize: "1rem",
    backgroundColor: "#eeeeee",
    color: "#15161b",
    border: "1px solid transparent",
    hoverBackgroundColor: "#15161b",
    hoverColor: "#eeeeee",
    hoverBorder: "1px solid #eeeeee",
    hoverTransition: "all 3s ease-in-out",
  },
};

const OnboardingProvider = ({
  children,
  showOnboarding,
  finishOnboarding,
  onboardingData = [],
  options,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <OnboardContext.Provider value={[currentStep, setCurrentStep]}>
      {children}
      <OnboardingContainer
        showOnboarding={showOnboarding}
        stepData={onboardingData}
        finishOnboarding={finishOnboarding}
        options={options}
      />
    </OnboardContext.Provider>
  );
};

export default OnboardingProvider;
