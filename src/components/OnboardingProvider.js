import React, { useState, createContext } from "react";
import OnboardingContainer from "./OnboardingContainer";
import { useWindowResize } from "../hooks/useWindowResize";
import { styleMerger } from "../utils/styleMerger";

export const OnboardContext = createContext();

const OnboardingProvider = ({
  children,
  showOnboarding,
  finishOnboarding,
  earlyExitCallback,
  onboardingData = [],
  options,
  mobileOptions,
  earlyExitComponent,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  // Check for mobile
  const windowSize = useWindowResize();
  const useMobile = windowSize.innerWidth <= 800;
  const mergedStyles = styleMerger(options, mobileOptions);

  const finalStyling = useMobile ? mergedStyles : options;

  return (
    <OnboardContext.Provider value={[currentStep, setCurrentStep]}>
      {children}
      <OnboardingContainer
        showOnboarding={showOnboarding}
        stepData={onboardingData}
        earlyExitCallback={earlyExitCallback}
        finishOnboarding={finishOnboarding}
        options={finalStyling}
        mobileOptions={mobileOptions}
        EarlyExitComponent={earlyExitComponent}
      />
    </OnboardContext.Provider>
  );
};

export default OnboardingProvider;
