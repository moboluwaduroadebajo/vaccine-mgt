import React from "react";
import { Icons } from "../icons";
import { FaPlus } from "react-icons/fa";

const ScheduleCard = () => {
  const date = new Date();

  const day = date.getDate(); // Get the day of the month
  const month = date.getMonth(); // Get the month (0-11, so we add 1)
  const year = date.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="bg-[#D9ECD9] overflow-auto grow rounded-2xl px-8 py-10 font-poppins">
      <div className="space-y-4 pb-10 border-b border-[#1F8E1F] w-[80%]">
        <p className="font-bold text-2xl text-[#1F8E1F]">Schedules Today</p>
        <p>{`${months[month]} ${day}, ${year}`}</p>
      </div>

      <div className="flex justify-between gap-8 pt-8 w-[80%]">
        <ul>
          <li className="p-2 font-light text-base flex items-center gap-2">
            <Icons name="schedule" fill="#1F8E1F" />
            25 scheduled children today
          </li>
          <li className="p-2 font-light text-base flex items-center gap-2">
            <span className="text-[#1F8E1F] text-[26px]">
              <FaPlus />
            </span>{" "}
            5 PCV scheduled
          </li>
          <li className="p-2 font-light text-base flex items-center gap-2">
            <Icons name="schedule" fill="#1F8E1F" />7 OPV children today
          </li>
        </ul>
        <div className="bg-[#1F8E1F] items-stretch w-[.01em]"></div>
        <div className="flex justify-center items-center gap-2 max-w-[225px] text-[#C91919]">
          <Icons name="missed_call" />5 missed immunization (awaiting)
        </div>
      </div>

      <p className="pt-8 font-bold text-[#1F8E1F]">View all</p>
    </div>
  );
};

export default ScheduleCard;
