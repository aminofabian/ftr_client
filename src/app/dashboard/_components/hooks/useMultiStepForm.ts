'use client';

import React, { ReactElement, useState } from 'react'

function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setCurrentStepIndex(currentStepIndex);
    }
  };


  const back = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    } else {
      setCurrentStepIndex(currentStepIndex);
    }
  }


  const goTo = (index: number) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStepIndex(index);
    } else {
      setCurrentStepIndex(currentStepIndex);
    }
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    goTo,
    next,
    back
  }

}


export default useMultiStepForm;