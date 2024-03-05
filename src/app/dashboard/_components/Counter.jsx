'use client';
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-03-10') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div className="flex gap-1 text-center auto-cols-max">
        <div className="flex flex-col p-1 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-md">
            <span style={{ "--value": timeLeft.days }}>{timeLeft.days}</span>
          </span>
          days
        </div>
        <div className="flex flex-col p-1 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-md">
            <span style={{ "--value": timeLeft.hours }}>{timeLeft.hours}</span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-1 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-md">
            <span style={{ "--value": timeLeft.minutes }} className='text-sm'>{timeLeft.minutes}</span>
          </span>
          min
        </div>
        <div className="flex flex-col p-1 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-md">
            <span style={{ "--value": timeLeft.seconds }}>{timeLeft.seconds}</span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default Counter;
