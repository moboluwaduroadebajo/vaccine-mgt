import AddNewParentModal from "@/components/Modals/AddNewParentModal";
import clsx from "clsx";
import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

interface ParentProps {
  variant?: "primary" | "secondary";
  additionalClassname?: any;
}

const OnboardParentCard = ({ variant, additionalClassname }: ParentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={clsx({
        "bg-[#1F8E1F] rounded-2xl text-white bg-spiral bg-cover bg-center bg-no-repeat relative cursor-pointer z-[0]":
          true,
        "flex justify-center items-center": variant === "primary",
        "flex h-[250px]": variant === "secondary",
        [additionalClassname]: additionalClassname,
      })}>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#1F8E1F] opacity-90 rounded-2xl" />

      <div
        className={clsx({
          "z-10 flex p-4 font-poppins": true,
          "text-center w-1/2 justify-center items-center flex-col gap-4":
            variant === "primary",
          "w-full items-center justify-between p-8": variant === "secondary",
        })}>
        <div>
          <p className="font-semibold text-2xl capitalize leading-10">
            Onboard <br />
            new parent
          </p>
          <p className="text-[#bcdabc] my-4">
            Add a New Parent and then a new child
          </p>
        </div>

        <BsPlusCircleFill
          size={60}
          className="hover:text-[#bcdabc]"
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
      </div>
      <AddNewParentModal
        isOpen={isModalOpen}
        setIsOpen={() => setIsModalOpen(!isModalOpen)}
      />
    </div>
  );
};

export default OnboardParentCard;
