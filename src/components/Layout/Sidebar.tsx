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
    localStorage.removeItem("token");
    await dispatch(resetAccountState());
    router.push("/login");
  };

  const isItemActive = (item: {
    label: string;
    path: string;
    iconName: string;
  }) => {
    if (item.label === "Home" && router.pathname === "/dashboard") {
      return true;
    }
    if (item.label === "Parents" && router.pathname === "/dashboard/parents") {
      return true;
    }
    if (
      item.label === "Children" &&
      router.pathname.includes("child-profile")
    ) {
      return true;
    }
    if (
      item.label === "Vaccines" &&
      router.pathname === "/dashboard/vaccines"
    ) {
      return true;
    }
    if (
      item.label === "Schedules" &&
      router.pathname === "/dashboard/schedules"
    ) {
      return true;
    }
    return router.pathname === item.path;
  };

  return (
    <div className="w-[122px] bg-[#1F8E1F] text-white flex flex-col fixed top-0 bottom-0 h-screen z-50">
      <div className="flex-1 flex flex-col justify-center">
        <ul className="flex flex-col gap-3">
          {sideMenu.map((item) => (
            <MenuItem
              key={item.path}
              label={item.label}
              iconName={item.iconName}
              path={item.path}
              // isTabActive={router.pathname === item.path}
              isTabActive={isItemActive(item)}
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
