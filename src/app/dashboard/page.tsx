import React from "react";
import RequestDisplay from "./_components/RequestDisplay";
import RequestBox from "./_components/RequestBox";
import Request from "./_components/Request";
const DashboardPage = () => {
  return <div className="h-fit flex flex-col pb-5">
  <Request />
  <div className="flex flex-col items-center justify-center mt-5 gap-2">
  <RequestDisplay />
  </div>
  <div className="flex flex-col items-center justify-center mt-5 gap-2">
  <RequestDisplay />
  </div>
  <div className="flex flex-col items-center justify-center mt-5 gap-2">
  <RequestDisplay />
  </div>
  <div className="flex flex-col items-center justify-center mt-5 gap-2">
  <RequestDisplay />
  </div>
  <div className="flex flex-col items-center justify-center mt-5 gap-2">
  <RequestDisplay />
  </div>
  
  </div>;
};

export default DashboardPage;
