import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import pin from "../../../public/pin.png";
import HeroImage from "../../../public/mom-image.png";
import Button from "../utilities/Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-[#E1F0E1] pt-6">
      <Navbar />

      <div className="mt-20 lg:flex justify-between lg:pl-40 pl-8">
        <div className="md:w-1/2 pb-10">
          <div className="flex gap-1 bg-[#D9ECD9] p-2 md:w-[420px] w-[340px] rounded-full">
            <Image alt="pin" src={pin} />
            <p className="text-[#1F8E1F] md:text-base text-xs">
              Simplify the process of immunisation management .
            </p>
          </div>

          <p className="font-bold large:text-6xl tablet:text-5xl text-3xl  leading-tight font-poppins">
            Manage Children&apos;s <br />
            <span className="text-[#1F8E1F]">Immunization </span> <br />
            History
          </p>
          <p className="my-10 font-normal md:text-2xl text-xl md:w-[70%] text-[#888888]">
            Add details of received vaccinations, including vaccine type, date
            administered, dosage, with timely reminder of upcoming vaccinations.
          </p>

          <Link href="/login">
            <Button
              label="Login"
              variant="primary"
              additionalClassname="lg:w-[280px] w-[100px]"
            />
          </Link>
        </div>

        <div className="lg:flex hidden relative">
          <svg
            className="absolute right-0 bottom-0"
            width={594}
            height={732}
            viewBox="0 0 594 732"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <ellipse cx={745.5} cy={366} rx={745.5} ry={366} fill="#D2E8D2" />
          </svg>
          <Image alt="mom-image" src={HeroImage} priority className="z-50" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
