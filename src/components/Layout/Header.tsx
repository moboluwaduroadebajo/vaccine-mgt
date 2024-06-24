import React from "react";
import { Icons } from "../icons";
import Logo from "@/../public/logo.png";
import avatar from "@/assets/avatar.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { sideMenu } from "@/constants";
import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bell, Search } from "react-feather";

const Header = () => {
  const router = useRouter();
  return (
    <div className="h-20 bg-white mb-10 rounded p-8 px-20 font-poppins font-medium text-xl flex justify-between sticky top-0 left-0 shadow-md z-50">
      <div>
        {sideMenu.map((name) => (
          <p key={name.label}>
            {router.pathname === name.path ? name.label : ""}
          </p>
        ))}
      </div>
      <div>
        <div className="flex justify-center items-center gap-6">
          <Search size={26} className="text-[#a9abad] cursor-pointer" />

          <Popover>
            {({ open }) => (
              <>
                <PopoverButton
                  className={`${
                    open ? "bg-gray-200" : ""
                  } flex items-center gap-2 text-[#a9abad] hover:text-opacity-100 focus:outline-none active:bg-gray-200 rounded-full p-2`}>
                  <Bell />
                </PopoverButton>
                <PopoverPanel
                  anchor="bottom"
                  className="flex flex-col bg-white shadow-md rounded-lg w-80 p-4">
                  <p className="font-medium">Notifications</p>
                  <p className="mt-2 py-1">There are no new notifications</p>
                </PopoverPanel>
              </>
            )}
          </Popover>
          <Image alt="avatar" src={avatar} />
          <Link href="/">
            <Image alt="logo" src={Logo} className="md:h-full h-[30%]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
