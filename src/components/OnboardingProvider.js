import React, { useState, createContext } from "react";
import OnboardingContainer from "./OnboardingContainer";

export const OnboardContext = createContext();

const OnboardingProvider = ({
  children,
  showOnboarding,
  finishOnboarding,
  onboardingData = [],
  options,
  earlyExitCallback,
  mobileOptions,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <OnboardContext.Provider value={[currentStep, setCurrentStep]}>
      {children}
      <OnboardingContainer
        showOnboarding={showOnboarding}
        stepData={onboardingData}
        earlyExitCallback={earlyExitCallback}
        finishOnboarding={finishOnboarding}
        options={options}
        mobileOptions={mobileOptions}
      />
    </OnboardContext.Provider>
  );
};

export default OnboardingProvider;
