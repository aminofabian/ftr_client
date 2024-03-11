'use client';

import React from 'react';
import useMultiStepForm from './hooks/useMultiStepForm';

const Request = () => {
  const { steps, currentStepIndex, step } = useMultiStepForm([
    <div key="step1">One</div>,
    <div key="step1">Two</div>,
    <div key="step1">Three</div>,
    <div key="step1">Four</div>,
  ])
  return (
    <div className='relative bg-sky-50 border p-2 m-2 rounded-md'>
    <form>
    <div className='absolute, top-5 right-5  '>
    {currentStepIndex + 1} / {steps.length}
    </div>
    {step}
    
    <div className='mt-2 flex gap-5 justify-end'>
    <button>Back</button>
    <button>Next</button>
    
    </div>
    </form>
    
    </div>
    )
  }
  
  
  export default Request