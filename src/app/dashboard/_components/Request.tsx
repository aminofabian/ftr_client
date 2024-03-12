'use client';

import React, {FormEvent, useState} from 'react';
import useMultiStepForm from './hooks/useMultiStepForm';
import { Button } from "@/components/ui/button";
import RequestInput from './RequestInput';
import ImageUpload from './ImageUpload';
import AmountInput from './AmountInput';
import DisplayRequest from './DisplayRequest';



type FormData = {
  request: string;
  image: File;
  amount: string;
  deadline: Date;
  community: string;
  typeOfHelp: string;
  location: string;
}
const INITIAL_DATA: FormData = {
  request: '',
  image: new File([''], 'image.jpg'),
  amount: '',
  deadline: new Date(),
  community: '',
  typeOfHelp: '',
  location: '',
}
const Request = () => {
  
  const [data, setData] = useState(INITIAL_DATA)
  
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  
  
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next, goTo } = useMultiStepForm([
    <RequestInput key="request" {...data} updateFields={updateFields} />,
    <ImageUpload key="image" {...data} updateFields={updateFields} />,
    <AmountInput key="amount" {...data} updateFields={updateFields} />,
    <DisplayRequest key="display" data={data} />
  ])
  
  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Successful Account Creation")
    setData(INITIAL_DATA)
    goTo(0);
  }
  
  // const onSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   if (currentStepIndex >= 3) {
  //     alert('You have successfully submitted your request!');
  //     setData(INITIAL_DATA); // Reset form fields to empty
  //     goTo(0); // Go back to step 1
  //   } else {
  //     next(); // Proceed to the next step
  //   }
  // }
  return (
    <div className='relative bg-sky-50 border p-2 m-2 rounded-md'>
    <form onSubmit={onSubmit}>
    <div className='absolute, top-5 right-5  '>
    <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
    <span className="whitespace-nowrap rounded-full bg-sky-100 px-2.5 py-0.5 text-sm text-sky-700">
    {currentStepIndex + 1} / {steps.length -1}
    </span>
    </p>
    </div>
    {step}
    
    <div className='mt-2 flex gap-5 justify-end'>
    {!isFirstStep && <Button variant='default' type='button' onClick={back}>{currentStepIndex === 2 ? 'Upload Image/Go Back' : 'Back'}</Button>}
    <Button onClick={next} type='submit'>{currentStepIndex === 2 ? 'Post Request' : 'Next'}</Button>
    </div>
    </form>
    
    </div>
    )
  }
  
  
  
  export default Request