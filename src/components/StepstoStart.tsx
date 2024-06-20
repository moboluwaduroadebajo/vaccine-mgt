import Image, { StaticImageData } from "next/image";
import React from "react";
import img1 from "../../public/img1.png";

interface StepsProps {
  isMultiple?: boolean;
  title: string;
  id?: number;
  description: string;
  image: StaticImageData;
}
const StepstoStart = ({
  isMultiple,
  title,
  id,
  description,
  image,
}: StepsProps) => {
  return (
    <div
      className={`flex items-center md:p-8 p-4 relative md:px-40 mb-4 ${
        isMultiple
          ? "flex-row-reverse md:justify-end md:gap-16"
          : "md:justify-center"
      }`}>
      <div className="">
        <Image alt="img1" src={img1} className="" />
      </div>

      <div className="font-poppins flex flex-col gap-4">
        <p className="font-bold md:text-2xl text-lg max-w-[500px]">{title}</p>
        <p className="font-normal md:text-base text-sm max-w-[560px] md:text-justify">
          {description}
        </p>
      </div>

      <div
        className={`absolute top-0 bottom-0 flex items-center justify-center ${
          isMultiple ? "left-0" : "right-0"
        }`}>
        <span className="text-[#1F8E1F] text-[250px] leading-none opacity-[10%] font-bold">
          {id}
        </span>
      </div>
    </div>
  );
};

export default StepstoStart;
