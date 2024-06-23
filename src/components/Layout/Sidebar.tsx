"use client";

import { sideMenu } from "@/constants";
import React, { useEffect } from "react";
import MenuItem from "./MenuItem";
import { useRouter } from "next/router";
import { Icons } from "../icons";
import { useAppDispatch } from "@/app/hooks";
import { resetAccountState } from "@/reducers/account.reducer";
import axios from "axios";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const handleLogout = async () => {
    window.localStorage.removeItem("token");
    await dispatch(resetAccountState());
    router.push("/login");
  };

  useEffect(() => {
    const getuserData = async () => {
      try {
        const response = await axios.get(`${baseURL}/user/profile`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: ` ${token}`,
          },
        });
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getuserData();
  }, []);
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
