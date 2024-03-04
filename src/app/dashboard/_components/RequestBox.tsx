'use client'
import React from 'react';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { CalendarIcon } from "@radix-ui/react-icons"
import { addDays, format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RequestBox() {
  const [date, setDate] = React.useState<Date>()
  return (
    <div className='container lg:w-full h-full border rounded-lg flex flex-col'>
    <form className='w-full'>
    <div className='flex flex-col lg:flex-row items-center lg:justify-center w-full'>
    <Image
    src='https://source.unsplash.com/50x50/?portrait'
    width={50}
    height={50}
    alt=''
    className='border rounded-full dark:bg-gray-500 dark:border-gray-700 my-3'
    />
    <div className="grid w-full gap-1.5 m-5">
    <Label htmlFor="message-2 mb-4">Request Assistance:</Label>
    <Textarea placeholder="How Can We Support You Today?" id="message-2" className='w-full'     style={{ minHeight: '100px', width: 'auto', minWidth: '100px' }}
    />
    {/* <p className="text-sm text-muted-foreground mt-3">
    Share Your Needs. We help, not judge...
  </p> */}
  
  </div>
  {/* <textarea
  placeholder='Whats Ailing You?'
  className='lg:ml-3 mt-5 pb-10 pt-4 lg:pr-10 w-full lg:w-auto max-w-full border rounded pl-5'
  style={{ minHeight: '50px' }}
/> */}


</div> 
<Dialog>
<DialogTrigger asChild>
<Button variant='default' className='justify-end mt-5'>  
Post Your Help Request
</Button>
</DialogTrigger>
<DialogContent className="sm:max-w-[60dvw]">
<DialogHeader>
<DialogTitle>Edit profile</DialogTitle>
<DialogDescription>
Make changes to your profile here. Click save when youre done.
<div className="grid w-full max-w-sm items-center gap-1.5 text-sm">
<Label htmlFor="picture">Upload An Image/Video (optional)</Label>
<input type="file" name="files" id="files" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
</div>

</DialogDescription>
</DialogHeader>
<div className="grid gap-4 py-4">
<div className="grid grid-cols-4 items-center gap-4">
<Label htmlFor="name" className="text-right">
Amount
</Label>
<input type="text" name="price" id="price" placeholder="10000" className="flex flex-1 text-right border border-lime-400 sm:text-sm rounded-l-md dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ri" />
<span className="flex items-center pointer-events-none sm:text-sm rounded-r-md dark:bg-gray-700">€</span>
</div>
<div className="grid grid-cols-4 items-center gap-4">
<Label htmlFor="username" className="text-right">
Deadline
</Label>

<Popover>
<PopoverTrigger asChild>
<Button
variant={"outline"}
className={cn(
  "w-[240px] justify-start text-left font-normal",
  !date && "text-muted-foreground"
  )}
  >
  <CalendarIcon className="mr-2 h-4 w-4" />
  {date ? format(date, "PPP") : <span>Pick a date</span>}
  </Button>
  </PopoverTrigger>
  <PopoverContent
  align="start"
  className="flex w-auto flex-col space-y-2 p-2"
  >
  <Select
  onValueChange={(value) =>
    setDate(addDays(new Date(), parseInt(value)))
  }
  >
  <SelectTrigger>
  <SelectValue placeholder="Select Days" className='text-lime-500' />
  </SelectTrigger>
  <SelectContent position="popper" className='border border-lime-500'>
  <SelectItem value="0">Today</SelectItem>
  <SelectItem value="1">Tomorrow</SelectItem>
  <SelectItem value="3">In 3 days</SelectItem>
  <SelectItem value="7">In 1 week</SelectItem>
  <SelectItem value="14">In 12 weeks</SelectItem>
  <SelectItem value="30">In 1 month</SelectItem>
  <SelectItem value="60">In 2 months</SelectItem>
  <SelectItem value="365">In 1 year</SelectItem>
  </SelectContent>
  </Select>
  <div className="rounded-md border border-lime-500">
  <Calendar mode="single" selected={date} onSelect={setDate} />
  </div>
  </PopoverContent>
  </Popover>
  </div>
  <div className="grid grid-cols-4 items-center gap-4">
  <Label htmlFor="name" className="text-right">
  Community
  </Label>
  <Input id="name" value="Pedro Duarte" className="col-span-3" />
  </div>
  <div className="grid grid-cols-4 items-center gap-4">
  <Label htmlFor="username" className="text-right">
  Type of Help
  </Label>
  <Input id="username" value="@peduarte" className="col-span-3" />
  </div>
  <div className="grid grid-cols-4 items-center gap-4">
  <Label htmlFor="name" className="text-right">
  Location
  </Label>
  <Input id="name" value="Pedro Duarte" className="col-span-3" />
  </div>
  </div>
  <DialogFooter>
  <Button variant='default' type="submit">Publish Request</Button>
  </DialogFooter>
  </DialogContent>
  </Dialog>
  </form>
  </div>
  );
}
