import React from 'react';
import Image from 'next/image';
import { BadgeCheck, Bookmark, HandHeart, MessageCircleHeart, Repeat2 } from 'lucide-react';
import Slider from './Slider';
import Counter from './Counter';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Donate from './Donate';
import MpesaPay from './MpesaPay';

const RequestDisplay = () => {
  return (
    <div className="w-full px-6 py-16 mx-auto space-y-12 border rounded-md">
    <div className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
    <div className="space-y-2">
    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
    <div className="flex items-center md:space-x-2">
    <Image
    src="https://source.unsplash.com/75x75/?portrait"
    alt={'my image'}
    width={40}
    height={40}
    className="border rounded-full dark:bg-gray-500 dark:border-gray-700"
    />
    <p className="text-sm">
    Leroy Jenkins
    <span className="inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 text-purple-700">
    <BadgeCheck className="pr-2" />
    <p className="whitespace-nowrap text-sm">Level 3</p>
    </span>
    • 3h
    </p>
    </div>
    <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
    <span className="whitespace-nowrap rounded-full bg-orange-100 px-2.5 py-0.5 text-sm text-orange-700">
    Amount Requested: 1000/=
    </span>
    </p>
    </div>
    </div>
    <div className="dark:text-gray-100">
    <p>
    Hi there, I&apos;m reaching out because... Only level 6 and above members are allowed to create communities.
    Keep interacting with the group to qualify
    </p>
    </div>
    <div className="rounded-md">
    <Image
    src="/neom.jpg"
    width={0}
    height={0}
    sizes="100vw"
    alt="post image"
    style={{ width: '100%', height: 'auto' }}
    className="rounded-lg ring ring-primary shadow-sm opacity-15 scale-97 hover:scale-100"
    />
    </div>
    </div>
    <div>
    <div className="flex flex-wrap py-2 border-t border-dashed dark:border-gray-400">
    <div className="flex">
    <a
    rel="noopener noreferrer"
    href="#"
    className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
    >
    <HandHeart />{' '}
    <p>
    <span className="whitespace-nowrap rounded-full bg-lime-100 px-2.5 py-0.5 text-sm text-lime-700">
    12 Hearts
    </span>
    </p>
    </a>
    <a
    rel="noopener noreferrer"
    href="#"
    className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
    >
    <MessageCircleHeart />
    <p>
    <span className="whitespace-nowrap rounded-full bg-lime-100 px-2.5 py-0.5 text-sm text-lime-700">
    5 Comments
    </span>
    </p>
    </a>
    </div>
    <div className="flex">
    <a
    rel="noopener noreferrer"
    href="#"
    className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
    >
    <Repeat2 />
    <p>
    <span className="whitespace-nowrap rounded-full bg-lime-100 px-2.5 py-0.5 text-sm text-lime-700">
    3 Shares
    </span>
    </p>
    </a>
    <a
    rel="noopener noreferrer"
    href="#"
    className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
    >
    <Bookmark />
    <p>
    <span className="whitespace-nowrap rounded-full bg-lime-100 px-2.5 py-0.5 text-sm text-lime-700">
    1 Bookmark
    </span>
    </p>
    </a>
    </div>
    </div>
    <div className="space-y-1 flex flex-col items-center justify-between w-full md:flex-row md:items-center dark:text-gray-400">
    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
    12 People Have Donated
    <div className="flex flex-col items-center justify-center">
    <div className="flex flex-row -space-x-4">
    <Image
    alt=""
    className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
    src="https://source.unsplash.com/40x40/?portrait?1"
    width={40}
    height={40}
    />
    <Image
    alt=""
    className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
    src="https://source.unsplash.com/40x40/?portrait?2"
    width={40}
    height={40}
    />
    <Image
    alt=""
    className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
    src="https://source.unsplash.com/40x40/?portrait?3"
    width={40}
    height={40}
    />
    <Image
    alt=""
    className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
    src="https://source.unsplash.com/40x40/?portrait?4"
    width={40}
    height={40}
    />
    <div className="flex items-center justify-center w-12 h-12 font-semibold border rounded-full dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700">
    +3
    </div>
    </div>
    </div>
    </span>
    <div className="text-sm">
    Deadline:{' '}
    <span className="whitespace-nowrap rounded-full bg-orange-100 px-2.5 py-0.5 text-sm text-orange-700">
    12/03/2024
    </span>
    </div>
    <div className="p-6 py-2 dark:bg-violet-400 dark:text-gray-900">
    <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row items-center justify-between">
    <h2 className="text-center text-xs tracki text-primary">
    KES 700 Raised
    <br className="" /> of KES 1000 goal
    </h2>
    <div className="space-x-2 text-center py-2 lg:py-0">
    <div>
    <Slider />
    </div>
    <div className="font-semibold text-md">70%</div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="md:tracki md:text-sm ml-auto">
    <Counter />
    </div>
    <Dialog>
    <DialogTrigger asChild>
    <Button variant="default">Click to Help</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-6xl">
    <DialogHeader>
    <DialogTitle className="text-primary mx-auto">SELECT AN AMOUNT</DialogTitle>
    <DialogDescription>
    <MpesaPay />
    </DialogDescription>
    </DialogHeader>
    <DialogFooter>
    <DialogClose>
    <Button type="button" variant="outline">
    cancel
    </Button>
    </DialogClose>
    <Button type="submit" className="ml-auto">
    Donate
    </Button>
    </DialogFooter>
    </DialogContent>
    </Dialog>
    </div>
    </div>
    );
  };
  
  export default RequestDisplay;
  