import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#f0f7f0] pt-40 pb-8">
      <div className="border-t border-[#003466] p-8 flex justify-end items-center">
        <ul className="flex gap-4 pr-20">
          <li className=" h-11 w-11 bg-[#c6e2c6] flex items-center justify-center rounded-full p-2">
            <AiFillInstagram
              size={40}
              className="text-[#1F8E1F] fill-[#1F8E1F]"
            />
          </li>
          <li className=" h-11 w-11 bg-[#c6e2c6] flex items-center justify-center rounded-full p-2">
            <FaXTwitter size={40} className="text-[#1F8E1F] fill-[#1F8E1F]" />
          </li>
          <li className=" h-11 w-11 bg-[#c6e2c6] flex items-center justify-center rounded-full p-2">
            <TiSocialFacebook
              size={40}
              className="text-[#1F8E1F] fill-[#1F8E1F]"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
