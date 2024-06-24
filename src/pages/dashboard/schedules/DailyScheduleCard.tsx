import { Icons } from "@/components/icons";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";

const scheduleList = [
  { id: 1, name: "Taiwo Awoniyi", vaccine: "OPV 0 (Oral Polio Vaccine)" },
  { id: 2, name: "Taiwo Awoniyi", vaccine: "OPV 0 (Oral Polio Vaccine)" },
  { id: 3, name: "Taiwo Awoniyi", vaccine: "OPV 0 (Oral Polio Vaccine)" },
  { id: 4, name: "Taiwo Awoniyi", vaccine: "OPV 0 (Oral Polio Vaccine)" },
  { id: 5, name: "Taiwo Awoniyi", vaccine: "OPV 0 (Oral Polio Vaccine)" },
  { id: 6, name: "Taiwo Awoniyi", vaccine: "OPV 0 (Oral Polio Vaccine)" },
  { id: 7, name: "Taiwo Awoniyi", vaccine: "OPV 0 (Oral Polio Vaccine)" },
];

const DailyScheduleCard = () => {
  return (
    <div className="bg-white border border-[#1F8E1F] rounded-2xl min-w-[454px] h-[600px] overflow-auto">
      <div className="flex flex-col shadow-md p-4 sticky top-0 bg-white">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-poppins font-semibold text-2xl">Today</p>
          </div>

          <div className="flex items-center gap-6 pr-6">
            <BiMenuAltLeft fontSize={24} />
            <Icons name="search" fill="#1F8E1F" />
          </div>
        </div>

        <div className="flex justify-between pt-8 pb-4 font-roboto text-[#686868]">
          <p>Name</p>
          <p>Vaccine</p>
        </div>
      </div>
      <div className=" ">
        {scheduleList.map((item) => (
          <div
            key={item.id}
            className="flex justify-between py-8 px-4 hover:bg-[#f4f9f4] cursor-pointer">
            <p>Taiwo Awoniyi</p>
            <p>OPV 0 (Oral Polio Vaccine)</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyScheduleCard;
