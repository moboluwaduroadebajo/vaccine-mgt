import React, { useState } from "react";
import clsx from "clsx";
import { Icons } from "../icons";
import { PiWarningCircleLight } from "react-icons/pi";

interface FieldProps {
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  value: string;
  label: string;
  placeholder: string;
  name: string;
  size?: string;
  disabled?: boolean;
  error?: string;
  width?: number;
  height?: number;
  isRequired?: boolean;
  showPasswordToggler?: boolean;
  labelClass?: any;
  additionalClass?: any;
}

const PasswordField = ({
  onChange = () => {},
  onBlur = () => {},
  value,
  label,
  placeholder,
  size,
  name,
  disabled = false,
  error,
  width,
  height,
  isRequired,
  showPasswordToggler = true,
  labelClass,
  additionalClass,
}: FieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const computedRootStyle = () => {
    const style: { [key: string]: number | string } = {};

    if (width) {
      style.width = `${width}px`;
    }

    return style;
  };

  const computedInputStyle = () => {
    const style: { [key: string]: number | string } = {};

    if (height) {
      style.height = `${height}px`;
    }

    return style;
  };

  const [focus, setFocus] = useState(false);

  return (
    <div
      className={clsx({
        "w-full flex flex-col": true,
        "md:w-1/2": size === "half",
      })}
      style={computedRootStyle()}>
      <div className="flex justify-between items-center">
        <span className="flex">
          <label
            className={
              labelClass
                ? labelClass
                : "text-[#222222] font-medium mb-1 text-base font-poppins"
            }
            htmlFor={`grid-${name}`}>
            {label}
          </label>
          {isRequired && (
            <>
              <p className="text-red-500 text-xs ml-0.5">*</p>
            </>
          )}
        </span>
      </div>
      <div>
        <div
          //   onClick={() => setFocus(true)}
          //   onBlur={() => setFocus(false)}
          className={clsx(
            !focus
              ? {
                  "flex items-center justify-between border border-[#C7C9D9] rounded-md py-5 px-4 leading-tight bg-white":
                    true,
                  [additionalClass]: additionalClass,
                }
              : {
                  "flex items-center justify-between border border-[#C7C9D9] rounded-md py-5 px-4 leading-tight bg-white":
                    true,
                  [additionalClass]: additionalClass,
                }
          )}>
          <input
            className={clsx({
              "appearance-none border-none outline-none focus:ring-0 text-sm p-0 bg-inherit":
                true,
              "w-[95%]": showPasswordToggler,
              "w-full": !showPasswordToggler,
            })}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            style={computedInputStyle()}
            autoComplete="off"
          />

          {showPasswordToggler && (
            <>
              <div
                className="cursor-pointer"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}>
                <Icons name={showPassword ? "eye-open" : "eye-close"} />
              </div>
            </>
          )}
        </div>
        {error && (
          <p className="mt-2 text-xs text-red-600 capitalize max-w-[430px] flex items-center gap-1.5">
            <PiWarningCircleLight />
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default PasswordField;
