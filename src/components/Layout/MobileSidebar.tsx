import { sideMenu } from "@/constants";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import MobileMenuItem from "./MobileMenuItem";
import { useRouter } from "next/router";

interface SidebarProps {
  closeModal: () => void;
  openSidebar: boolean;
}

const MobileSidebar = ({ closeModal, openSidebar }: SidebarProps) => {
  const router = useRouter();

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
    <div
      className={
        openSidebar
          ? "fixed h-full w-screen bg-black/50 backdrop-blur-sm top-0 right-0 transition-all transform ease-out duration-[0.8s] translate-x-0"
          : "fixed h-full w-screen bg-black/0 backdrop-blur-sm top-0 right-0 transition-all transform ease-in duration-[0.8s] -translate-x-full"
      }>
      <div className="text-[48px] text-white flex justify-end p-4">
        <AiOutlineCloseCircle onClick={closeModal} />
      </div>
      <div className="absolute bg-white h-full w-[70%] left-0 bottom-0 mx-auto py-24 z-10 font-sora top-0">
        <ul>
          {sideMenu.map((item) => (
            <MobileMenuItem
              key={item.label}
              label={item.label}
              iconName={item.iconName}
              path={item.path}
              isTabActive={isItemActive(item)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;
