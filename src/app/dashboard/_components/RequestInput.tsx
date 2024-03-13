'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type RequestData = {
  request: string;
}
type RequestFormProps = RequestData & {
  request: string;
  updateFields: (fields: Partial<RequestData>) => void;
}

const CharacterCounter = ({ value }: { value: string }) => {
  const characterCount = value.length;
  return (
    <span>{characterCount}/300</span>
  );
};

const RequestInput = ({ request, updateFields }: RequestFormProps) => {
  const [inputValue, setInputValue] = useState(request);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value.slice(0, 300)); // Limiting to 300 characters
    updateFields({ request: value.slice(0, 300) });
  };

  return (
    <div>
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
            required
            className='w-full'
            value={inputValue}
            onChange={handleChange}
            style={{ minHeight: '100px', width: 'auto', minWidth: '100px' }}
          />
          <div className='text-xs text-primary'>
          <CharacterCounter value={inputValue} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestInput;