import React from "react";
import AllRequest from "../components/AllRequest";
import RequestForm from "../components/RequestForm";

const Request = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center text-white font-semibold relative">
      <div className="flex gap-12 justify-start items-center w-full h-full">
        <RequestForm />
        <div className="fixed top-[35%] left-[38%] h-[40%] border-[1px] border-slate-900"></div>
        <AllRequest />
      </div>
    </div>
  );
};

export default Request;
