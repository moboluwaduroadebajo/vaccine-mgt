import React from "react";
import { Icons } from "../icons";
import { helpMenuList } from "@/constants";

const Help = () => {
  return (
    <div className="bg-[#f0f7f0] pt-32">
      <p className="font-poppins text-center text-transparent capitalize bg-gradient-to-r from-[#1F8E1F] to-[#061c06] bg-clip-text md:text-5xl text-3xl font-bold pb-20">
        Here is how we Help
      </p>

      <div className="flex gap-8 md:items-center md:justify-center w-full h-full pb-32 px-8 overflow-x-auto scroll-smooth">
        {helpMenuList.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col gap-4 md:w-[237px] h-[396px] min-w-[237px] rounded-3xl border-2 ${item.borderColor} ${item.bgColor} p-6`}>
            <Icons name={item.iconName} fill={item.fillColor} />
            <p
              className={`capitalize font-poppins font-bold text-base ${item.textColor}`}>
              {item.title}
            </p>
            <p className="font-poppins text-base font-light text-[#222222] leading-[34.2px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
