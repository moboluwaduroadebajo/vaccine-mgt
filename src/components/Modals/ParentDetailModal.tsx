import React from "react";
import Modal from "./Modal";
import { MdCancel } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import avatar from "@/assets/avatar.png";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsPlusCircleFill } from "react-icons/bs";
import { ParentDataType } from "@/type/user.type";

interface IProps {
  isOpen: boolean;
  setIsOpen: (arg: any) => void;
  selectedParent?: ParentDataType;
}

const ParentDetailModal = ({ isOpen, setIsOpen, selectedParent }: IProps) => {
  const closeModal = () => setIsOpen(!isOpen);

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div>
        <div className="flex justify-between text-4xl text-[#1F8E1F]">
          <MdCancel
            onClick={closeModal}
            className="cursor-pointer hover:text-[#6ba96b]"
          />
          <MdEdit className="cursor-pointer hover:text-[#6ba96b]" />
        </div>

        <div className="flex justify-center gap-4 mt-8 h-[420px] w-[80%] m-auto">
          <div className="bg-[#D9ECD9] rounded-2xl p-8 w-1/2">
            <div className="flex flex-col items-center justify-center gap-4 mb-8">
              <Image alt="parent-image" src={avatar} />
              <div className=" font-poppins text-center">
                <p className="text-[#1F8E1F] font-semibold">
                  {`${selectedParent?.firstName} ${selectedParent?.lastName}`}
                </p>
                <p className="text-[#828e82]">
                  {selectedParent?.title === "Mr"
                    ? "Dad"
                    : selectedParent?.title === "Mrs"
                      ? "Mom"
                      : "Parent"}{" "}
                  | {selectedParent?.age}
                </p>
              </div>
            </div>

            <ul>
              <li className="flex items-center gap-2 pb-5 font-poppins">
                <span className="flex items-center justify-center rounded-full w-10 h-10 bg-white text-2xl text-[#1F8E1F]">
                  <MdEmail className="" />
                </span>
                {selectedParent?.email}
              </li>
              <li className="flex items-center gap-2 pb-5 font-poppins">
                <span className="flex items-center justify-center rounded-full w-10 h-10 bg-white text-2xl text-[#1F8E1F]">
                  <BsFillTelephoneFill />
                </span>
                {selectedParent?.phoneNumber}
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-between p-20 font-poppins">
            <p className="font-bold text-2xl">Children</p>

            {selectedParent?.children.map((child) => (
              <p key={child.id}>{child.firstName} {child.lastName}</p>
            ))}

            <BsPlusCircleFill className="text-[#1F8E1F] text-4xl hover:text-[#6ba96b] cursor-pointer" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ParentDetailModal;
