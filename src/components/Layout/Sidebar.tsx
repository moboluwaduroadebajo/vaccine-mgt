import { sideMenu } from "@/constants";
import React from "react";
import MenuItem from "./MenuItem";
import { useRouter } from "next/router";
import { Icons } from "../icons";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="w-[122px] bg-[#1F8E1F] text-white flex flex-col">
      <div className="pt-4 flex-1">
        <ul className="flex flex-col gap-2">
          {sideMenu.map((item) => (
            <MenuItem
              key={item.path}
              label={item.label}
              iconName={item.iconName}
              path={item.path}
              isTabActive={router.pathname === item.path}
            />
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center border-t">
        <p className="py-6 flex flex-col items-center gap-2 justify-center cursor-pointer">
          Log out <Icons name="logout" />
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
