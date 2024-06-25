import clsx from "clsx";
import { Icons } from "../icons";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IProps {
  additionalClass: any;
  onChange?: (date: Date | undefined) => void;
  value?: Date;
}

export default function DatePickerInput({
  additionalClass,
  onChange,
  value,
}: IProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);

  const handleChange = (date: Date | undefined) => {
    onChange && onChange(date);
    setSelectedDate(date);
  };

  return (
    <>
      <div
        className={clsx({
          "border pl-0 relative border-[#D6D6D6] focus:border-[#525bfa] mt-2 h-[60px] rounded-lg text-[14px] leading-[16px] font-[500px] placeholder:text-[#9D9EAF] flex items-center outline-0 z-10":
            true,
          [additionalClass]: additionalClass,
        })}>
        <DatePicker
          showIcon
          selected={selectedDate}
          onChange={(date) => handleChange(date!)}
          dateFormat="dd/MM/yyyy"
          showYearDropdown
          scrollableYearDropdown
          //   icon={<Icons name="date-picker" />}
          className="w-full outline-0 h-full flex items-center justify-start bg-transparent transform translate-x-[-12px]"
        />
        {/* <Icons name="date-picker" /> */}
      </div>
    </>
  );
}
