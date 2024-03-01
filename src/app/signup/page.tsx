"use client";
import { Button } from "@/components/Button";
import InputBox from "@/components/InputBox";
import { Backend_URL } from "@/lib/Constants";
import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";


type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  const register = async () => {
    const res = await fetch(Backend_URL + "/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: data.current.name,
        email: data.current.email,
        password: data.current.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      alert(res.statusText);
      return;
    }
    const response = await res.json();
    alert("User Registered!");
    console.log({ response });
  };
  const data = useRef<FormInputs>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 mx-auto border mt-10">
    <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600 mb-8 text-center">
    <Image src="logo.svg" className="mx-auto"
    width={100}
    height={120}
    alt="Picture of the logo"
    />
    Sign up
    </div>
    <div className="p-2 flex flex-col gap-6">
    <InputBox
    autoComplete="off"
    name="name"
    labelText="Name"
    required
    onChange={(e) => (data.current.name = e.target.value)}
    />
    <InputBox
    name="email"
    labelText="Email"
    required
    onChange={(e) => (data.current.email = e.target.value)}
    />
    <InputBox
    name="password"
    labelText="password"
    type="password"
    required
    onChange={(e) => (data.current.password = e.target.value)}
    />
    <div className="flex justify-center items-center gap-2">      
    <button onClick={register} className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400 bg-primary text-white">Sign Up</button>
    {/* <Button onClick={register} className='bg-green-700 hover:bg-green-600'>Sign Up</Button> */}
    <Link className="hover:text-primary w-full text-center bg-sky-50 p-3" href={"/"}>
    Cancel
    </Link>
    </div>
    <p className="px-6 text-sm text-center dark:text-gray-400">Already have an account?
    <a rel="noopener noreferrer" href="/signin" className="hover:underline dark:text-orange-500">Sign In</a>.
    </p>
    </div>
    </div>
    );
  };
  
  export default SignupPage;
  