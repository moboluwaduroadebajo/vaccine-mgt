import React from "react";
import avatar from "@/assets/avatar.png";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import OtherChildrenCard from "../children/OtherChildrenCard";
import { ChildrenDataType, ParentDataType } from "@/type/user.type";

interface IProps {
  childData?: ChildrenDataType;
}

const ParentDetailCard = ({ childData }: IProps) => {
  return (
    <div className="w-[60%]">
      <div className="bg-[#D9ECD9] rounded-2xl p-8">
        <div className="flex flex-col items-center justify-center gap-4 mb-10">
          <Image alt="parent-image" src={avatar} />
          <div className=" font-poppins text-center">
            <p className="text-[#1F8E1F] font-semibold">
              {`${childData?.parent.firstName} ${childData?.parent.lastName}`}
            </p>
            <p className="text-[#828e82]">
              {childData?.parent.title === "Mr"
                ? "Dad"
                : childData?.parent.title === "Mrs"
                ? "Mom"
                : "Parent"}{" "}
              | {childData?.parent.age}
            </p>
          </div>
        </div>

        <ul>
          <li className="flex items-center gap-2 pb-5 font-poppins">
            <span className="flex items-center justify-center rounded-full w-10 h-10 bg-white text-2xl text-[#1F8E1F]">
              <MdEmail className="" />
            </span>
            {childData?.parent.email}
          </li>
          <li className="flex items-center gap-2 pb-5 font-poppins">
            <span className="flex items-center justify-center rounded-full w-10 h-10 bg-white text-2xl text-[#1F8E1F]">
              <BsFillTelephoneFill />
            </span>
            {childData?.parent.phoneNumber}
          </li>
        </ul>
      </div>

      {/* <OtherChildrenCard /> */}
    </div>
  );
};

export default ParentDetailCard;
