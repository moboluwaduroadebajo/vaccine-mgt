"use client";

import { sideMenu } from "@/constants";
import React from "react";
import MenuItem from "./MenuItem";
import { useRouter } from "next/router";
import { Icons } from "../icons";
import { useAppDispatch } from "@/app/hooks";
import { resetAccountState } from "@/reducers/account.reducer";
import axios from "axios";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // const token =
  //   typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const handleLogout = async () => {
    window.localStorage.removeItem("token");
    await dispatch(resetAccountState());
    router.push("/login");
  };

  return (
    <div className="w-[122px] bg-[#1F8E1F] text-white flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <ul className="flex flex-col gap-3">
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
        <p
          className="py-6 flex flex-col items-center gap-2 justify-center cursor-pointer"
          onClick={handleLogout}>
          Log out <Icons name="logout" />
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
