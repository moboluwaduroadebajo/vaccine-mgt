import clsx from "clsx";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IProps {
  label: string;
  additionalClass?: any;
  onChange?: (date: Date | undefined) => void;
  value?: Date;
}

export default function DatePickerInput({
  additionalClass,
  onChange,
  value,
  label,
}: IProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);

  const handleChange = (date: Date | undefined) => {
    onChange && onChange(date);
    setSelectedDate(date);
  };

  return (
    <div>
      <label
        htmlFor=""
        className="text-[#222222] font-medium text-base font-poppins">
        {label}
      </label>
      <div
        className={clsx({
          "border pl-4 relative border-[#C7C9D9] mt-1 h-[60px] rounded-md text-[14px] leading-[16px] placeholder:text-[#9D9EAF] flex items-center outline-0 z-10":
            true,
          [additionalClass]: additionalClass,
        })}>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => handleChange(date!)}
          dateFormat="dd-MM-yyyy"
          maxDate={new Date()}
          placeholderText="DD-MM-YYYY"
          className="w-full outline-0"
        />
      </div>
    </div>
  );
}
