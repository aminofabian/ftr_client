import React from 'react';
import Image from 'next/image';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


const YourComponent = () => {
  return (
    <div data-hs-stepper>
    {/* Stepper Nav */}
    <ul className="relative flex flex-row gap-x-2">
    {/* Item */}
    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{"index": 1}'>
    <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
    <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
    <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
    <span className="ms-2 text-sm font-medium text-gray-800">
    Step
    </span>
    </span>
    <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
    </li>
    
    {/* Item */}
    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{"index": 2}'>
    <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
    <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
    <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
    <span className="ms-2 text-sm font-medium text-gray-800">
    Step
    </span>
    </span>
    <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
    </li>
    
    {/* Item */}
    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{"index": 3}'>
    <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
    <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
    <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
    <span className="ms-2 text-sm font-medium text-gray-800">
    Step
    </span>
    </span>
    <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
    </li>
    {/* End Item */}
    </ul>
    {/* End Stepper Nav */}
    
    {/* Stepper Content */}
    <div className="mt-5 sm:mt-8">
    {/* First Content */}
    <div data-hs-stepper-content-item='{"index": 1}'>
    <div className="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
    
    <div className='flex flex-col lg:flex-row items-center lg:justify-center w-full'>
    <Image
    src='https://source.unsplash.com/50x50/?portrait'
    width={50}
    height={50}
    alt=''
    className='border rounded-full dark:bg-gray-500 dark:border-gray-700 my-3'
    />
    <div className="grid w-full gap-1.5 m-5">
    <Label htmlFor="request">Request Assistance:</Label>
    <Textarea
    placeholder="How Can We Support You Today?"
    id="request"
    className='w-full'
    style={{ minHeight: '100px', width: 'auto', minWidth: '100px' }}
    />
    </div>
    </div>
    
    
    </div>
    
    
    </div>
    {/* End First Content */}
    
    {/* Second Content */}
    <div data-hs-stepper-content-item='{"index": 2}' style={{ display: 'none' }}>
    <div className="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
    <h3 className="text-gray-500">
    Second content
    </h3>
    </div>
    </div>
    {/* End Second Content */}
    
    {/* Third Content */}
    <div data-hs-stepper-content-item='{"index": 3}' style={{ display: 'none' }}>
    <div className="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
    <h3 className="text-gray-500">
    Third content
    </h3>
    </div>
    </div>
    {/* End Third Content */}
    
    {/* Final Content */}
    <div data-hs-stepper-content-item='{"isFinal": true}' style={{ display: 'none' }}>
    <div className="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
    <h3 className="text-gray-500">
    Final content
    </h3>
    </div>
    </div>
    {/* End Final Content */}
    
    {/* Button Group */}
    <div className="mt-5 flex justify-between items-center gap-x-2">
    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-back-btn>
    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    Back
    </button>
    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn>
    Next
    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </button>
    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-finish-btn style={{ display: 'none' }}>
    Finish
    </button>
    <button type="reset" className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-reset-btn style={{ display: 'none' }}>
    Reset
    </button>
    </div>
    {/* End Button Group */}
    </div>
    {/* End Stepper Content */}
    </div>
    /* End Stepper */
    );
  }
  
  export default YourComponent;
  