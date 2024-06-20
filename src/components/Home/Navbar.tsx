import Image from "next/image";
import React from "react";
import Logo from "@/../public/logo.png";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import Button from "../utilities/Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center lg:px-40 px-8 py-10">
      <Image alt="logo" src={Logo} className="md:h-full h-[30%]" />

      <div className="md:flex hidden gap-10 justify-center items-center">
        <ul className="flex items-center lg:gap-10 gap-8 font-league lg:text-2xl text-xl text-nowrap text-[#000]">
          <li className=" cursor-pointer hover:text-green-700">About us </li>
          <li className=" cursor-pointer hover:text-green-700">Features</li>
          <li className=" cursor-pointer hover:text-green-700">Procedures</li>
        </ul>

        <Link href="/login">
          <Button
            label="Login"
            variant="primary"
            additionalClassname="lg:w-[280px] w-[100px]"
          />
        </Link>
      </div>

      {/* mobile Navbar */}

      <div className="md:hidden">
        <IoIosMenu size={40} className="text-[#1F8E1F]" />
      </div>
    </div>
  );
};

export default Navbar;
