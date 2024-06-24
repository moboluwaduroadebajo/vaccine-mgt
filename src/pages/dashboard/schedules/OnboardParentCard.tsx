import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";

const OnboardParentCard = () => {
  return (
    <div className="bg-[#1F8E1F] w-[30%] rounded-2xl flex justify-center items-center text-white bg-spiral bg-cover bg-center bg-no-repeat relative cursor-pointer z-10">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#1F8E1F] opacity-90 rounded-2xl" />

      <div className="z-10 flex flex-col justify-center items-center gap-4 w-1/2 text-center font-poppins">
        <p className="font-semibold text-2xl capitalize leading-10">
          Onboard <br />
          new parent
        </p>
        <p className="text-[#bcdabc] mb-4">
          Add a New Parent and then a new child
        </p>

        <BsPlusCircleFill size={60} className="" />
      </div>
    </div>
  );
};

export default OnboardParentCard;
