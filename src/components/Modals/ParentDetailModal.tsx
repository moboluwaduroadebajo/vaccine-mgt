import React, { useState } from "react";
import Modal from "./Modal";
import { MdCancel } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import avatar from "@/assets/avatar.png";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsPlusCircleFill } from "react-icons/bs";
import { ChildrenDataType, ParentDataType } from "@/type/user.type";
import AddNewChildModal from "./AddNewChildModal";
import { useRouter } from "next/router";

interface IProps {
  isOpen: boolean;
  setIsOpen: (arg: any) => void;
  selectedParent?: ParentDataType;
}

const ParentDetailModal = ({ isOpen, setIsOpen, selectedParent }: IProps) => {
  const closeModal = () => setIsOpen(!isOpen);
  const router = useRouter();

  const [openAddChildModal, setOpenAddChildModal] = useState(false);

  const handleChildClick = (child: ChildrenDataType) => {
    router.push({
      pathname: "/dashboard/children/child-profile",
      query: { id: child.id },
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <>
        <div className="flex flex-col justify-center h-full">
          <div className="flex justify-between text-4xl text-[#1F8E1F] mt-8">
            <MdCancel
              onClick={closeModal}
              className="cursor-pointer hover:text-[#6ba96b]"
            />
            <MdEdit className="cursor-pointer hover:text-[#6ba96b]" />
          </div>

          <div className="flex md:flex-row flex-col justify-center gap-4 mt-8 w-[80%] m-auto">
            <div className="bg-[#D9ECD9] rounded-2xl md:p-8 p-5 md:w-1/2">
              <div className="flex flex-col items-center justify-center gap-4 mb-10">
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
                <li className="flex items-center gap-2 pb-5 font-poppins sm:text-base text-xs">
                  <span className="flex items-center justify-center rounded-full md:w-10 md:h-10 w-6 h-6 bg-white sm:text-2xl text-xs text-[#1F8E1F]">
                    <MdEmail />
                  </span>
                  {selectedParent?.email}
                </li>
                <li className="flex items-center gap-2 pb-5 font-poppins md:text-base text-sm">
                  <span className="flex items-center justify-center rounded-full md:w-10 md:h-10 w-6 h-6 bg-white md:text-2xl text-sm text-[#1F8E1F]">
                    <BsFillTelephoneFill />
                  </span>
                  {selectedParent?.phoneNumber}
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-between gap-6 px-20 py-8 font-poppins">
              <p className="font-bold text-2xl">Children</p>

              {selectedParent?.children.length === 0 ? (
                <p className="font-bold">No child added</p>
              ) : (
                selectedParent?.children.map((child) => (
                  <p
                    key={child.id}
                    className="font-medium hover:bg-[#D9ECD9] hover:text-[#1F8E1F] cursor-pointer py-4 px-8"
                    onClick={() => handleChildClick(child)}>
                    {child.firstName}
                  </p>
                ))
              )}

              <BsPlusCircleFill
                className="text-[#1F8E1F] text-4xl hover:text-[#6ba96b] cursor-pointer"
                onClick={() => setOpenAddChildModal(!openAddChildModal)}
              />
            </div>
          </div>
        </div>{" "}
        <AddNewChildModal
          parentId={selectedParent?.id}
          isOpen={openAddChildModal}
          setIsOpen={() => {
            setOpenAddChildModal(!openAddChildModal);
            closeModal();
          }}
        />
      </>
    </Modal>
  );
};

export default ParentDetailModal;
