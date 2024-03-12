import React from 'react';
import RequestInput from './RequestInput';
import ImageUpload from './ImageUpload';
import AmountInput from './AmountInput';
import Request from './Request';


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

const DisplayRequest = ({ data }: { data: FormData }) => {
  return (
    <div className="bg-white p-4 rounded-md border border-gray-300">
    <h2 className="text-lg font-semibold mb-4">Preview</h2>
    <div className="flex flex-col space-y-4">
    <div>
    <h3 className="font-semibold">Request:</h3>
    <p>{data.request}</p>
    </div>
    <div>
    <h3 className="font-semibold">Image:</h3>
    <img src={URL.createObjectURL(data.image)} alt="Uploaded Image" className="w-full max-w-md" />
    </div>
    <div>
    <h3 className="font-semibold">Amount:</h3>
    <p>{data.amount}</p>
    </div>
    <div>
    <h3 className="font-semibold">Deadline:</h3>
    <p>{data.deadline.toLocaleDateString()}</p>
    </div>
    <div>
    <h3 className="font-semibold">Community:</h3>
    <p>{data.community}</p>
    </div>
    <div>
    <h3 className="font-semibold">Type of Help:</h3>
    <p>{data.typeOfHelp}</p>
    </div>
    <div>
    <h3 className="font-semibold">Location:</h3>
    <p>{data.location}</p>
    </div>
    </div>
    </div>
    );
  }
  
  export default DisplayRequest