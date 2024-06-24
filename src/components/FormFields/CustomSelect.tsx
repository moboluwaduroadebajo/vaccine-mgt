import React from "react";
import Select from "react-select";

interface CustomSelectProps {
  options: { value: string; label: string | number }[] | undefined;
  selectedOption?: { value: string; label: string | number } | null;
  handleOptionChange: (
    option: {
      value: string;
      label: string | number;
    } | null
  ) => void;
  label?: string;
  isRequired?: boolean;
  noOptionsMessage?: string;
  placeholder?: string;
  name?: string;
  isSearchable?: boolean;
}

const CustomSelect = ({
  options = [],
  name,
  label,
  selectedOption,
  handleOptionChange,
  isSearchable,
  placeholder = "Select an option",
}: CustomSelectProps) => {
  return (
    <div>
      <label className="text-[#222222] font-medium text-base font-poppins">
        {label}
      </label>
      <Select
        name={name}
        value={selectedOption}
        placeholder={placeholder}
        options={options}
        onChange={(option) => {
          handleOptionChange(option);
        }}
        isSearchable={isSearchable}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            height: 60,
            marginTop: 6,
            marginBottom: 10,
          }),
        }}
      />
    </div>
  );
};

export default CustomSelect;
