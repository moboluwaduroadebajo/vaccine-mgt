import React, { useState } from "react";
import Logo from "@/../public/logo.png";
import avatar from "@/assets/avatar.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bell, Search } from "react-feather";
import MobileSidebar from "./MobileSidebar";

type Breadcrumb = {
  name: string;
  href?: string;
};

type HeaderProps = {
  breadcrumbs: Breadcrumb[];
};

const Header = ({ breadcrumbs }: HeaderProps) => {
  const router = useRouter();

  const [openmobileSideNav, setOpenMobileSideNav] = useState(false);

  return (
    <div className="h-20 bg-white mb-10 rounded p-8 md:px-20 px-5 font-poppins font-medium text-xl flex justify-between sticky top-0 left-0 shadow-md z-[50]">
      <div className="md:hidden">
        <IoIosMenu onClick={() => setOpenMobileSideNav(!openmobileSideNav)} />
      </div>
      <div className="flex gap-3">
        {/* {sideMenu.map((name) => (
          <p key={name.label}>
            {router.pathname === name.path ? name.label : ""}
          </p>
        ))} */}

        {breadcrumbs.map((breadcrumb, index) => (
          <div key={index} className="flex items-center gap-3">
            {breadcrumb.href ? (
              <Link href={breadcrumb.href}>
                <p className="hover:text-[#a7a7a7]">{breadcrumb.name}</p>
              </Link>
            ) : (
              <span>{breadcrumb.name}</span>
            )}
            {index < breadcrumbs.length - 1 && <span>→</span>}
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-6">
        <Search className="text-[#a9abad] cursor-pointer md:text-[46px] md:block hidden" />

        <Popover>
          {({ open }) => (
            <>
              <PopoverButton
                className={`${
                  open ? "bg-gray-200" : ""
                } md:flex items-center gap-2 hidden text-[#a9abad] hover:text-opacity-100 focus:outline-none active:bg-gray-200 rounded-full p-2`}>
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
          <Image alt="logo" src={Logo} className="w-full md:block hidden" />
        </Link>
      </div>

      <MobileSidebar
        openSidebar={openmobileSideNav}
        closeModal={() => setOpenMobileSideNav(false)}
      />
    </div>
  );
};

export default Header;
