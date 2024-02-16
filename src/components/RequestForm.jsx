import React from "react";

const RequestForm = () => {
  return (
    <div className="w-[40%] flex justify-center items-start self-start sticky top-[60px]">
      <form className="flex justify-center items-center flex-col gap-10 w-[90%] p-4 m-8">
        <h2 className="text-3xl">
          Search your <span className="text-yellow-400">Meds</span>
        </h2>

        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="MedDesc" className="text-xs">
              Meds Description <sup className="text-red-400">*</sup>
            </label>
            <textarea
              name="medDescription"
              id="MedDesc"
              className="resize-none h-32 w-full bg-transparent border-2 border-white rounded-md p-4"
              required></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="prescription"
              className="border-2 border-white border-dashed w-full h-[150px] flex justify-center items-center text-xl text-slate-300">Upload Prescription</label>
            <input type="file" id="prescription" className="hidden" />
          </div>

          <button className="p-2 w-full bg-yellow-400 text-black text-base font-semibold rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
