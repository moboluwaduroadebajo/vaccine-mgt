import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { Icons } from "../icons";

interface MenuItemProps {
  label: string;
  iconName: string;
  path: string;
  isTabActive: boolean;
}

const MobileMenuItem = ({
  label,
  iconName,
  path,
  isTabActive,
}: MenuItemProps) => {
  return (
    <Link href={path}>
      <li
        className={clsx({
          "p-5 py-10 flex gap-5 font-poppins hover:bg-[#F0F7F0] hover:font-bold hover:text-[#1F8E1F] group cursor-pointer":
            true,
          "bg-[#F0F7F0] text-[#1F8E1F] font-bold": isTabActive,
        })}>
        <Icons
          name={iconName}
          fill="#1F8E1F"
          className="group-hover:fill-[#1F8E1F]"
        />
        {label}
      </li>
    </Link>
  );
};

export default MobileMenuItem;
