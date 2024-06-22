import React from "react";
import clsx from "clsx";
import { Icons } from "../icons";
import Link from "next/link";

interface MenuItemProps {
  label: string;
  iconName: string;
  path: string;
  isTabActive: boolean;
}

const MenuItem = ({ label, iconName, path, isTabActive }: MenuItemProps) => {
  return (
    <Link href={path}>
      <li
        className={clsx({
          "py-1 flex flex-col gap-3 justify-center items-center font-poppins hover:bg-[#F0F7F0] hover:font-bold hover:text-[#1F8E1F] group cursor-pointer":
            true,
          "bg-[#F0F7F0] text-[#1F8E1F] font-bold": isTabActive,
        })}>
        <Icons
          name={iconName}
          fill={isTabActive ? "#1F8E1F" : "white"}
          className="group-hover:fill-[#1F8E1F]"
        />
        {label}
      </li>
    </Link>
  );
};

export default MenuItem;
