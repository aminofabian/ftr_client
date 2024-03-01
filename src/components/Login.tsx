'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';


type FormInputs = {
  className: string;
  callbackUrl?: string;
  error?: string;
};



const Login = (props: FormInputs) => {
  const userName = useRef('');
  const password = useRef('');
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn('credentials', {
      username: userName.current,
      password: password.current,
      redirect: true,
      callbackUrl: props.callbackUrl ?? '/',
      
    })
    
  }
  
  return (
    <div className={props.className}>
    <div className="w-full max-w-lg p-4 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mx-auto border mt-10">
    <h1 className="text-2xl font-bold text-center">Login</h1>  
    <Image src="logo.svg" className="mx-auto"
    width={100}
    height={120}
    alt="Picture of the logo"
    />
    {!!props.error && <p className='m-3 text-orange-500 text-xs my-4 bg-orange-50 p-4 text-center'>Whoopsie-daisy! It seems like there might be a tiny typo in your email or password. Give it another go and double-check those key taps before you try again 🕵️‍♂️💻</p>}
    <form onSubmit={onSubmit} action="" className="space-y-6">
    <div className="space-y-1 text-sm">
    <label htmlFor="username" className="block dark:text-gray-400">Username</label>
    <input onChange={(e)=>(userName.current=e.target.value)} type="text" name="username" id="username" placeholder="Username" className="border w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
    </div>
    <div className="space-y-1 text-sm">
    <label htmlFor="password" className="block dark:text-gray-400">Password</label>
    <input onChange={(e)=>(password.current=e.target.value)} type="password" name="password" id="password" placeholder="Password" className="border w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
    <div className="flex justify-end text-xs dark:text-gray-400">
    <a rel="noopener noreferrer" href="#">Forgot Password?</a>
    </div>
    </div>
    <div className="flex justify-center items-center gap-2">
    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400 bg-primary text-white" type='submit'>Sign in</button>
    <Link className="hover:text-primary w-full text-center bg-sky-50 p-3" href={props.callbackUrl ?? '/'}>
    Cancel
    </Link>
    </div>
    </form>
    <div className="flex items-center pt-4 space-x-1">
    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
    </div>
    <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don&apos;t have an account?
    <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-100">Sign up</a>
    </p>
    </div>
    
    </div>
    )
  }
  
  export default Login