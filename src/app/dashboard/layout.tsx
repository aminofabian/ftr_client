import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SideMenu from "@/components/SideMenu";
import CreateACommunityButton from "./_components/CreateACommunityButton";
import SearchBar from "./_components/Search";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

const DashBoardLayout = async (props: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="container grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8">
    <div className="sidemenu h-fit lg:col-span-1 rounded-lg bg-gray-200">
    <SideMenu />
    </div>
    <div className="main h-full rounded-lg bg-gray-100 lg:col-span-3 lg:w-full justify-center">{props.children}</div>
    
    <div className="h-fit lg:col-span-1 rounded-lg text-center w-full"> 
    <div className="SearchBar Container mb-5">
    <SearchBar />
    </div>
    <div className='Community border rounded-md'>
    <Link
    href={`/dashboard/user/${session?.user.id}`}
    >
    <div className="relative flex-shrink-0 justify-center items-center w-12 h-12 mx-auto rounded-full bg-green-100 mt-5">
    <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
    <Image src="https://source.unsplash.com/50x50/?portrait"
    width={50}
    height = {50}
    alt="" className="border rounded-full dark:bg-gray-500 dark:border-gray-700" />
    </div>          
    <span className="text-sm">{session?.user.name}</span>
    <div>{session?.user.email}</div>
    </Link>
    <div className="h-fit w-full mt-5">
    <CreateACommunityButton /> 
    </div>
    </div>
    </div>
    </div>
    );
  };
  
  export default DashBoardLayout;
  