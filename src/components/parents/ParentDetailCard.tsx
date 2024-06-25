import React, { useEffect } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Icons } from "../icons";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";

const ParentDetailCard = () => {
  const parentsData = [
    {
      name: "Taiwo Awoniyi",
      phoneNumber: "09097776667",
      noOfChildren: "3",
    },
    {
      name: "Kelechi Iheanacho",
      phoneNumber: "09097776667",
      noOfChildren: "3",
    },
    {
      name: "Kelechi Iheanacho",
      phoneNumber: "09097776667",
      noOfChildren: "3",
    },
    {
      name: "Kelechi Iheanacho",
      phoneNumber: "09097776667",
      noOfChildren: "3",
    },
  ];
  return (
    <div className="grow bg-white rounded-2xl ">
      <div className="flex flex-col shadow-md p-4 sticky top-0 rounded-2xl bg-white">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-poppins font-semibold text-2xl">Parents</p>
          </div>

          <div className="flex items-center justify-center gap-8">
            <BiMenuAltLeft fontSize={24} />
            <div className="relative">
              <div className="absolute top-1/2 right-6 -translate-y-1/2 ">
                <Icons name="search" fill="#1F8E1F" width={16} height={16} />
              </div>

              <input
                type="text"
                placeholder="Search"
                value=""
                onChange={(e) => e.target.value}
                className="focus:outline-none active:outline-none h-10 w-96 px-6 rounded-full border border-[#1F8E1F]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between px-20 pt-8 pb-4 font-roboto text-[#686868]">
          <p>Name</p>
          <p>Status</p>
        </div>
      </div>

      {parentsData.map((parent, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-6 px-6 cursor-pointer font-poppins border-b hover:border-2 hover:rounded-2xl hover:bg-[#f4f9f4] hover:border-[#1F8E1F]">
          <p className="font-semibold max-w-[115px]">{parent.name}</p>

          <p className="font-light">{parent.phoneNumber}</p>

          <p className="text-[#1F8E1F] font-light">
            {parent.noOfChildren} children
          </p>
        </div>
      ))}
    </div>
  );
};

export default ParentDetailCard;
