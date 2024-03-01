import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";

type Props = {
  children: React.ReactNode;
};

const DashBoardLayout = async (props: Props) => {
  const session = await getServerSession(authOptions);
  return (
  <div className="container grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8">
  <div className="h-32 rounded-lg bg-gray-200">
    <Link
    className="p-3 rounded hover:bg-emerald-600 hover:text-white hover:shadow transition"
    href={`/dashboard/user/${session?.user.id}`}
    >
    User Profile
    </Link>
    </div>
      <div className="h-32 rounded-lg lg:col-span-3">{props.children}</div>
        <div className="h-32 rounded-lg bg-gray-200 1fr"></div>
    </div>
    );
  };
  
  export default DashBoardLayout;
  