'use client';

import React, {FormEvent, useState} from 'react';
import useMultiStepForm from './hooks/useMultiStepForm';
import { Button } from "@/components/ui/button";
import RequestInput from './RequestInput';
import ImageUpload from './ImageUpload';
import AmountInput from './AmountInput';
import DisplayRequest from './DisplayRequest';
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";





type FormData = {
  request: string;
  image: File;
  amount: string;
  deadline: Date;
  community: string;
  typeOfHelp: string;
  location: string;
}

type RequestData = {
  request: string;
  image?: File[] | null;
  amount: number;
  community: string;
  deadline: Date;
  typeOfHelp: string;
  location: string;
};

const INITIAL_DATA: FormData = {
  request: '',
  image: new File([''], 'image.jpg'),
  amount: '',
  deadline: new Date(),
  community: '',
  typeOfHelp: '',
  location: '',
}

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

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
  
  
  
  const schema: ZodType<RequestData> = z.object({
    request: z.string().min(30).max(300),
    image: z.array(
      z
      .any()
      .optional()
      .refine((file) => !file || file.size <= MAX_FILE_SIZE, `Max image size is ${MAX_FILE_SIZE / (1024 * 1024)}MB.`)
      .refine(
        (file) => !file || ACCEPTED_IMAGE_MIME_TYPES.includes(file.type),
        `Only ${ACCEPTED_IMAGE_MIME_TYPES.join(', ')} formats are supported.`
        )
        ),
        amount: z.number().min(20).max(100000),
        community: z.string().min(3).max(50),
        deadline: z.date(),
        typeOfHelp: z.string().min(3).max(50),
        location: z.string().min(3).max(50),
      });
      
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        resolver: zodResolver(schema),
      });
      
      function handleRequest(e: FormEvent) {
        e.preventDefault()
        if (!isLastStep) return next()
        alert("You've successfully submitted your request!")
        setData(INITIAL_DATA)
        goTo(0);
      }
      
      return (
        <div className='relative bg-sky-50 border p-2 m-2 rounded-md'>
        <form onSubmit={handleRequest}>
        <div className='absolute, top-5 right-5  '>
        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
        <span className="whitespace-nowrap rounded-full bg-sky-100 px-2.5 py-0.5 text-xs text-sky-700">
        {currentStepIndex + 1} / {steps.length -1}
        </span>
        </p>
        </div>
        {step}
        
        <div className='mt-2 flex gap-5 justify-end'>
        {!isFirstStep && <Button variant='default' type='button' onClick={back}>{currentStepIndex === 2 ? 'Upload Image/Go Back' : 'Back'}</Button>}
        <Button onClick={next} type='submit'>
        {currentStepIndex === 2 ? 'Post Request' : (currentStepIndex === 3 ? 'Finish' : 'Next')}
        </Button>
        </div>
        </form>
        
        </div>
        
        )
      }
      
      
      
      export default Request