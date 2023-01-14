import { useRef, useContext } from "react";
import { OnboardContext } from "../components/OnboardingProvider";

export function useShowHighlight() {
  const highlightRef = useRef(null);

  const [currentStep] = useContext(OnboardContext);

  return {
    highlightRef,
    currentStep,
  };
}
