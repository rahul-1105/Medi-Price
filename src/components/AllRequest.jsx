import React from "react";
import userImg from "../assets/login.webp";

const AllRequest = () => {
  return (
    <div className="w-[65%] h-full py-4 px-10 flex flex-col gap-4">
      <h2 className="text-3xl text-center m-8">All Requests</h2>

      <div className="h-full w-full flex flex-col gap-4">
        <div className="relative p-4 flex flex-col gap-4 border-2 border-slate-600">
          <div className="flex items-center gap-6">
            <div className="h-12 w-12 rounded-full overflow-hidden">
              <img
                src={userImg}
                alt=""
                className="aspect-square object-cover"
              />
            </div>
            <h2 className="text-lg">User Name</h2>
          </div>

          <div>
            <p className="text-sm">
              Description: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, quidem?
            </p>
          </div>
          <button className="absolute px-4 py-2 right-2 bottom-2 bg-yellow-400 text-black text-base font-semibold rounded-md">
            Message
          </button>
        </div>

        <div className="relative p-4 flex flex-col gap-4 border-2 border-slate-600">
          <div className="flex items-center gap-6">
            <div className="h-12 w-12 rounded-full overflow-hidden">
              <img
                src={userImg}
                alt=""
                className="aspect-square object-cover"
              />
            </div>
            <h2 className="text-lg">User Name</h2>
          </div>

          <div>
            <p className="text-sm">
              Description: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, quidem?
            </p>
            <img src={userImg} alt="" className="aspect-square h-32"/>
          </div>
          <button className="absolute px-4 py-2 right-2 bottom-2 bg-yellow-400 text-black text-base font-semibold rounded-md">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllRequest;
