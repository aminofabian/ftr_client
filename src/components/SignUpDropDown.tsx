import { Button } from "@/components/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignTopIcon } from "@radix-ui/react-icons";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

export function SignUpDropDown() {
  return (
    
    <DropdownMenu>
    <DropdownMenuTrigger><AlignJustify /></DropdownMenuTrigger>
    <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>
    <Link
    href={"/api/auth/signout"}
    className="flex gap-4 ml-auto text-red-600"
    >
    Sign Out
    </Link> 
    </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>   
    )
  }
  