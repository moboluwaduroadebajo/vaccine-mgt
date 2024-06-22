import React from "react";
import { Icons } from "../icons";

const NoofVaccines = () => {
  return (
    <div className="w-[25%] h-[350px] bg-[#D9ECD9] rounded-2xl flex flex-col justify-center items-center gap-4">
      <p className="capitalize font-poppins font-light text-center text-xl leading-8 max-w-[138px] ">
        No. of existing vaccines
      </p>
      <div className="h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center">
        <Icons name="injection" fill="#1F8E1F" />
      </div>
      <p className="text-[#1F8E1F] font-poppins font-black text-4xl">25</p>
    </div>
  );
};

export default NoofVaccines;
