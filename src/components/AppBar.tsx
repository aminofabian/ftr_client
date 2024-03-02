import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";
import Image from "next/image";

const AppBar = () => {
  return (
    <header className="container flex gap-3 px-5 my-5 bg-gradient-to-b from-white to-gray-200 shadow pt-3">
    <Link className="transition-colors hover:text-blue-500" href={"/"}>
    <Image src="logo.svg"
    width={100}
    height={80}
    alt="Picture of the logo"
    priority={true}
    />
    </Link>
    <Link
    className="transition-colors hover:text-blue-500"
    href={"/dashboard"}
    >
    DashBoard
    </Link>
    <SignInButton />
    </header>
    );
  };
  
  export default AppBar;
  