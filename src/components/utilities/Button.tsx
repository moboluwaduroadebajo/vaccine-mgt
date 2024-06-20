import clsx from "clsx";
import React, { FormEvent } from "react";
import Loader from "./Loader";

interface ButtonProps {
  variant?: "primary";

  label?: string;
  onClick?: (arg: any) => void;
  width?: any;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  type?: "button" | "submit";
  additionalClassname?: any;
  loading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  role?: "dropdown";
}

const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  onClick = () => {},
  width,
  icon,
  iconPosition = "left",
  type = "button",
  additionalClassname,
  loading = false,
  disabled = false,
  loadingText,
}) => {
  return (
    <button
      type={type}
      className={clsx({
        "flex justify-center items-center rounded-[80px] h-12": true,
        "text-white font-poppins bg-[#1F8E1F] hover:border-2 hover:border-[#1F8E1F] hover:text-[#1F8E1F] hover:bg-white":
          variant === "primary",

        [width]: width,
        [additionalClassname]: additionalClassname,
      })}
      disabled={disabled}
      onClick={onClick}>
      {loading && <Loader />}
      {icon && iconPosition === "left" && (
        <>
          {icon}
          <div className="w-2" />
        </>
      )}
      {!loading ? label : !loadingText ? "Loading..." : `${loadingText}...`}
      {icon && iconPosition === "right" && (
        <>
          <div className="w-2" />
          {icon}
        </>
      )}
    </button>
  );
};

export default Button;
