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
import {z, ZodType} from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RequestBox() {
  const MAX_FILE_SIZE = 5000000;
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  
  type FormData = {
    request: string;
    image?: File;
    amount: number;
    community: string;
    typeOfHelp: string;
    location: string;
  }
  
  const schema: ZodType<FormData> = z.object({
    request: z.string().min(30,  { message: "Must be 5 or more characters long" }).max(30, { message: "Must Not Exceed 300 characters" }),
    image: z.optional(
      z.any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, {
        message: `Max image size is 5MB.`,
      })
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        { message: "Only .jpg, .jpeg, .png and .webp formats are supported." }
        )
        ),
        amount: z.number().min(20).max(100000),
        community: z.string().min(5,  { message: "Must be 5 or more characters long" }).max(30, { message: "Must Not Exceed 30 characters" }),
        location: z.string().min(3,  { message: "Must be 3 or more characters long" }).max(30, { message: "Must Not Exceed 30 characters" }),
        typeOfHelp: z.string().min(3,  { message: "Must be 3 or more characters long" }).max(30, { message: "Must Not Exceed 30 characters" }),
      });
      
      const { register, handleSubmit} = useForm<FormData>({ resolver: zodResolver(schema) });
      
      
      const [date, setDate] = React.useState<Date>();
      
      const submitData = (e: React.FormEvent<HTMLFormElement>, data: FormData) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log(data);
        alert('Data submitted:' + JSON.stringify(data));
      }
      
      
      
      return (
        <div className='container lg:w-full h-full border rounded-lg flex flex-col pb-5'>
        <form className='w-full' onSubmit={handleSubmit(submitData)}>
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
        {...register('request')}
        style={{ minHeight: '100px', width: 'auto', minWidth: '100px' }}
        />
        </div>
        </div>
        <Dialog>
        <DialogTrigger>
        <Button variant='default' className='justify-end mt-5' type='button'>
        Post Your Help Request
        </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[60dvw]">
        <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
        Fill the Table to Complete Your Request
        <div className="grid w-full max-w-sm items-center gap-1.5 text-sm">
        <Label htmlFor="image" className="text-primary">
        Upload An Image/Video (optional)
        </Label>
        <input
        type="file"
        id="image"
        className="px-2 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
        onChange={(e) => register('image', { value: e.target.files?.[0] })}
        />
        </div>
        </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        
        <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
        Amount
        </Label>
        <input type="number" id="amount" placeholder="10000" className="flex flex-1 text-right border py-2 pr-2 border-lime-400 sm:text-sm rounded-l-md dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ri" {...register('amount', { valueAsNumber: true })} />
        <div className="flex items-center pointer-events-none sm:text-sm rounded-r-md dark:bg-gray-700">/=</div>
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
          <Input id="community" className="col-span-3" {...register('community')} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
          Type of Help
          </Label>
          <Input id="username" className="col-span-3 " {...register('typeOfHelp')} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
          Location
          </Label>
          <Input id="name" className="col-span-3 " {...register('location')}/>
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
        