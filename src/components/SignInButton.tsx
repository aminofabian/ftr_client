"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { SignUpDropDown } from "./SignUpDropDown";



const SignInButton = () => {
  const { data: session } = useSession();
  console.log({ session });
  
  if (session && session.user)
  return (
    <div className="flex gap-4 ml-auto items-center">
    <p className="text-sky-600">{session.user.name}</p>
    <SignUpDropDown />
    </div>
    );
    
    return (
      <div className="flex gap-4 ml-auto items-center">
      <Link
      href={"/api/auth/signin"}
      className="flex gap-4 ml-auto text-green-600"
      >
      Sign In
      </Link>
      <Link
      href={"/signup"}
      className="flex gap-4 ml-auto bg-green-600 text-green-200 p-2 rounded"
      >
      Sign Up
      </Link>
      </div>
      );
    };
    
    export default SignInButton;
    