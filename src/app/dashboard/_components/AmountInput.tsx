import React, {useState} from 'react';
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
import { addDays, format, set } from "date-fns";
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
import { Database, Text } from 'lucide-react';

type AmountData = {
  amount: string;
  image: File;
  deadline: Date;
  typeOfHelp: string;
  community: string;
  location: string;
}
type AmountFormProps = AmountData & {
  amount: string;
  image: File;
  deadline: Date;
  typeOfHelp: string;
  location: string;
  community: string;
  updateFields: (fields: Partial<AmountData>) => void;
  
}

const AmountInput = ({ amount, deadline, typeOfHelp, location, community, updateFields }: AmountFormProps) => {
  const [date, setDate] = useState<Date>(deadline || new Date()); // Initialize date with the provided deadline or current date
  const handleDeadlineChange = (newDate: Date | undefined) => {
    const updatedDate = newDate || new Date(); // Use new Date() if newDate is undefined
    setDate(updatedDate); // Update local state
    updateFields({ deadline: newDate }); // Update global state
  };
  
  
  return (
    <div>
    <div className="grid gap-4 py-4">
    <div className="grid grid-cols-4 items-center gap-4">
    <Label htmlFor="name" className="text-right">
    Amount
    </Label>
    <input type="number" id="amount" placeholder="10000" required className="flex flex-1 text-right border py-2 pr-2 border-lime-400 sm:text-sm rounded-l-md dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ri"
    value = {amount}
    onChange = {(e) => updateFields({ amount: e.target.value })}
    />
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
      <SelectValue placeholder="Select Days" className='text-lime-500'
      />
      </SelectTrigger>
      <SelectContent position="popper" className='border border-lime-500' >
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
      <Calendar mode="single" selected={date} onSelect={handleDeadlineChange} />
      </div>
      </PopoverContent>
      </Popover>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="name" className="text-right">
      Community
      </Label>
      <Input id="community" className="col-span-3"
      value = {community}
      onChange = {(e) => updateFields({ community: e.target.value })}    
      />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="username" className="text-right">
      Type of Help
      </Label>
      <Input id="username" className="col-span-3 "
      value = {typeOfHelp}
      onChange = {(e) => updateFields({ typeOfHelp: e.target.value })}
      />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="name" className="text-right">
      Location
      </Label>
      <Input id="name" required className="col-span-3 "
      value = {location}
      onChange = {(e) => updateFields({ location: e.target.value })}
      />
      </div>
      </div>
      
      </div>
      )
    }
    
    export default AmountInput