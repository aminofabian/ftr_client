import React from 'react';
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
const RequestInput = ({ request, updateFields }: RequestFormProps) => {
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
    value = {request}
    onChange = {(e) => updateFields({ request: e.target.value })}
    style={{ minHeight: '100px', width: 'auto', minWidth: '100px' }}
    />
    </div>
    </div>
    
    
    </div>
    )
  }
  
  export default RequestInput