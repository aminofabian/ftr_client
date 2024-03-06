 'use client'
 import { useState } from 'react';
 import { Tab } from '@headlessui/react';
 import Image from 'next/image';
 
 function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Donate() {
  const [categories] = useState({
    Mpesa: [
      { id: 1, amount: 100 },
      { id: 2, amount: 1000 },
    ],
    PayPal: [
      { id: 1, amount: 1 },
      { id: 2, amount: 10 },
      { id: 3, amount: 100 },
    ],
  });
  
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  
  const handleDonate = (category: string, amount: number) => {
    setSelectedAmount(amount);
    setSelectedCategory(category);
  };
  
  const handleCustomDonate = () => {
    const amount = parseFloat(customAmount);
    if (!isNaN(amount)) {
      setSelectedAmount(amount);
      // Set the category based on your logic
      setSelectedCategory(/* Set category based on your logic */);
    }
  };
  
  return (
    <div className="w-6xl px-2 py-16 sm:px-0">
    <Tab.Group>
    <Tab.List className="flex space-x-1 rounded-xl bg-primary p-1">
    {Object.keys(categories).map((category) => (
      <Tab
      key={category}
      className={({ selected }) =>
      classNames(
        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
        'ring-white/60 ring-offset-2 ring-offset-lime-500 focus:outline-none focus:ring-2',
        selected
        ? 'bg-white text-primary shadow'
        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
        )
      }
      >
      {category}
      </Tab>
      ))}
      </Tab.List>
      <Tab.Panels className="mt-2">
      {Object.entries(categories).map(([category, items], idx) => (
        <Tab.Panel
        key={idx}
        className={classNames(
          'rounded-xl bg-white p-3 border border-primary',
          'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
          )}
          >
          <ul>
          {items.map((item) => (
            <li key={item.id} className="relative rounded-md p-3 hover:bg-gray-100 flex md:w-[50%] mx-auto">
            <h3 className="text-sm font-medium leading-5">
            {`Donate ${category === 'Mpesa' ? `Kes ${item.amount}` : `${item.amount}`} `}
            </h3>
            <button
            onClick={() => handleDonate(category, item.amount)}
            className="mt-1 rounded-md bg-primary text-lime-50 px-3 py-2 ml-auto"
            >
            Donate
            </button>
            </li>
            ))}
            <li className="relative rounded-md p-3 hover:bg-gray-100">
            <input
            type="text"
            placeholder={`Enter custom donation for ${category}...`}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            />
            <button
            onClick={handleCustomDonate}
            className="mt-1 rounded-md bg-primary text-lime-50 px-3 py-2"
            >
            Donate
            </button>
            </li>
            <li className="relative rounded-md p-3 hover:bg-gray-100">
            <h3 className="text-sm font-medium leading-5 text-primary">Add a Comment (Optional)</h3>
            <textarea
            placeholder="Type your comment here..."
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            />
            </li>
            </ul>
            <div>
            {selectedAmount !== null && selectedCategory !== null && (
              <p className="mt-4 text-primary">
              You&apos;re about to donate{' '}
              {selectedCategory === 'Mpesa' ? 'Kes' : ''} {selectedAmount} to $name{' '}
              {selectedCategory === 'Mpesa' ? (
                <>
                via Mpesa{' '}
                <Image src="/mpesa-logo.png" width={100} height={100} alt="Mpesa" />
                </>
                ) : (
                  <>
                  via PayPal{' '}
                  <Image src="/paypal-logo.png" width={80} height={80} alt="PayPal" />
                  </>
                  )}
                  .
                  </p>
                  )}
                  </div>
                  </Tab.Panel>
                  ))}
                  </Tab.Panels>
                  </Tab.Group>
                  </div>
                  );
                  
                }
                