import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import pin from "../../../public/pin.png";
import HeroImage from "../../../public/mom-image.png";

const HeroSection = () => {
  return (
    <div className="bg-[#E1F0E1] pt-6">
      <Navbar />

      <div className="mt-20 lg:flex justify-between lg:pl-40 pl-8">
        <div className="w\-1/2">
          <div className="flex gap-1 bg-[#D9ECD9] p-2 md:w-[420px] w-[340px] rounded-full">
            <Image alt="pin" src={pin} />
            <p className="text-[#1F8E1F] md:text-base text-xs">
              Simplify the process of immunisation management .
            </p>
          </div>

          <p className="font-bold large:text-6xl tablet:text-5xl text-3xl leading-tight font-poppins">
            Manage Children&apos;s <br />
            <span className="text-[#1F8E1F]">Immunization </span> <br />
            History
          </p>
          <p className="my-10 font-normal md:text-2xl text-xl md:w-[70%] text-[#888888]">
            Add details of received vaccinations, including vaccine type, date
            administered, dosage, with timely reminder of upcoming vaccinations.
          </p>

          <button className="bg-[#1F8E1F] w-[280px] h-12 rounded-[80px] text-white">
            Login
          </button>
        </div>

        <div className="lg:block hidden">
          <Image alt="mom-image" src={HeroImage} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
