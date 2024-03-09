'use client';
import { Button } from '@/components/Button';
import React, {useState} from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { z, ZodType } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const CreateACommunityButton = () => {
	
	type FormData = {
		name: string;
	}
	const schema: ZodType<FormData> = z.object({
		name: z.string().min(3).max(25).regex(/^\S+$/),
	})
	
	const { register, handleSubmit } = useForm<FormData>({ resolver: zodResolver(schema) });
	
	const submitData = (data: FormData) => {
		console.log(data);
		alert('Data submitted:'+ JSON.stringify(data));
	}
	
	
	
	
	const [input, setInput] = useState("")
	return (
		<div>
		<div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
		<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
		<h2 className="text-2xl font-semibold tracki text-primary">Create Your Community of Helpers</h2>
		<p className="dark:text-gray-100 text-sm">Only level 6 and above members are allowed to create communities. Keep interacting with the group to qualify</p>
		</div>
		<form onSubmit={handleSubmit(submitData)}>
		<div className="relative">
		<p className='absolute text-xm left-0 w-8 inset-y-0 grid place-items-center'>c/</p>
		<Input  placeholder="Enter Community Name" className="w-full pl-6" {...register("name")} />
		</div>
		<Button type="submit" variant='primary' className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Create</Button>
		</form>
		</div>
		</div>
		</div>
		)
	}
	
	export default CreateACommunityButton;