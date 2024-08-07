import React from "react";
import avatar from "@/assets/avatar.png";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { IoIosBriefcase } from "react-icons/io";
import { ChildrenDataType } from "@/type/user.type";

interface IProps {
  selectedChild?: ChildrenDataType;
}

const ChildProfileCard = ({ selectedChild }: IProps) => {
  return (
    <div className="font-poppins w-full h-full shadow-md">
      <div className="bg-white rounded-2xl sm:p-14 p-6">
        <div className="flex justify-between mb-8">
          <div className="flex gap-6">
            <Image
              alt="child-image"
              src={avatar}
              className="w-[60px] h-[60px]"
            />
            <div className="font-poppins sm:space-y-4">
              <p className="text-[#1F8E1F] md:text-2xl text-xl font-bold">
                {`${selectedChild?.firstName} ${selectedChild?.lastName}`}
              </p>
              <p className="text-[#9a9a9a] md:text-base text-sm">
                {`${selectedChild?.gender} | DOB: ${selectedChild?.dateOfBirth}`}
              </p>
            </div>
          </div>

          <div className="flex sm:gap-6 gap-3">
            <span className="flex items-center justify-center rounded-full w-10 h-10 bg-[#d2e8d2] text-2xl text-[#1F8E1F]">
              <MdEmail />
            </span>
            <span className="flex items-center justify-center rounded-full w-10 h-10 bg-[#d2e8d2] text-2xl text-[#1F8E1F]">
              <IoIosBriefcase />
            </span>
          </div>
        </div>

        <div className="border-t border-[#1F8E1F]">
          <div className="flex justify-between gap- max-w- mt-8">
            <div>
              <p className="text-[#9a9a9a]">Last visit</p>
              <p className="text-[#1F8E1F] font-semibold mt-2">June 24, 2024</p>
            </div>

            <div className="bg-[#1F8E1F] items-stretch w-[.01em]"></div>

            <div>
              <p className="text-[#9a9a9a]"> Next appointment</p>
              <p className="text-[#1F8E1F] font-semibold mt-2">June 24, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildProfileCard;
