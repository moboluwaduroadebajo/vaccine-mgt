import React from "react";
import { Icons } from "../icons";
import Logo from "@/../public/logo.png";

import avatar from "@/assets/avatar.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { sideMenu } from "@/constants";

const Header = () => {
  const router = useRouter();
  return (
    <div className="h-20 bg-white mb-10 ml-4 rounded p-8 px-20 font-poppins font-medium text-xl flex justify-between">
      <div>
        {sideMenu.map((name) => (
          <p key={name.label}>
            {router.pathname === name.path ? name.label : ""}
          </p>
        ))}
      </div>
      <div>
        <div className="flex justify-center items-center gap-6 cursor-pointer">
          <Icons name="search" />
          <Icons name="bell" />
          <Image alt="avatar" src={avatar} />
          <Image alt="logo" src={Logo} className="md:h-full h-[30%]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
