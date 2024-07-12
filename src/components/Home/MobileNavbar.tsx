import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Button from "../utilities/Button";

interface NavbarProps {
  closeModal: () => void;
  openSidebar: boolean;
}

const MobileNavbar = ({ closeModal, openSidebar }: NavbarProps) => {
  const navLink = [
    { name: "About us", path: "/about-us" },
    { name: "Features", path: "/features" },
    { name: "Procedures", path: "/procedures" },
  ];

  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openSidebar]);
  return (
    <div
      className={
        openSidebar
          ? "fixed h-full w-screen bg-black/50 backdrop-blur-sm top-0 right-0 transition-all transform ease-out duration-[0.8s] translate-x-0"
          : "fixed h-full w-screen bg-black/0 backdrop-blur-sm top-0 right-0 transition-all transform ease-in duration-[0.8s] translate-x-full"
      }>
      <div className="text-[48px] text-white flex justify-end w-[30%] p-4">
        <AiOutlineCloseCircle onClick={closeModal} />
      </div>

      <div className="absolute bg-white h-full w-[70%] right-0 bottom-0 mx-auto py-24 z-10 font-sora top-0 px-5">
        <ul>
          {navLink.map((nav) => (
            <li key={nav.name} className="py-5">
              {nav.name}
            </li>
          ))}
        </ul>
        <Link href="/login" className="flex justify-center items-center py-5">
          <Button
            label="Login"
            variant="primary"
            additionalClassname="w-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
