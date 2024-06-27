import React from "react";
import { Icons } from "../icons";
import { FaPlus } from "react-icons/fa6";

const HomeSchedules = () => {
  return (
    <div className="w-[60%] px-8 py-10 rounded-2xl shadow-md bg-white font-poppins">
      <p className="font-bold text-2xl pb-10 border-b border-[#1F8E1F]">
        Welcome Back
      </p>

      <div className="flex justify-between gap-8 pt-8 px-8">
        <div>
          <div className="p-2 font-light text-base flex items-center gap-2">
            <Icons name="schedule" fill="#1F8E1F" />
            25 scheduled children today
          </div>
        </div>
        <div className="bg-[#1F8E1F] items-stretch w-[.01em]" />
        <div className="flex justify-center items-center gap-2 max-w-[225px] text-[#C91919]">
          <Icons name="missed_call" />5 missed immunization
        </div>
      </div>
    </div>
  );
};

export default HomeSchedules;
