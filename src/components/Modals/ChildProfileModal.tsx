import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import ChildProfile from "@/pages/dashboard/children/child-profile/ChildProfile";
import { ArrowLeft } from "react-feather";
import { useRouter } from "next/router";
import { ChildrenDataType, ParentDataType } from "@/type/user.type";
import ImmunizationHistory from "../children/ImmunizationHistory";
import ParentDetailCard from "../parents/ParentDetailCard";
import ChildProfileCard from "../children/ChildProfileCard";
import axios from "axios";

interface IProps {
  isOpen: boolean;
  setIsOpen: (arg: any) => void;
  selectedChild?: ChildrenDataType;
}

const ChildProfileModal = ({ isOpen, setIsOpen, selectedChild }: IProps) => {
  const closeModal = () => setIsOpen(!isOpen);

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div>
        <div className="flex flex-col gap-8 font-poppins mb-20 ">
          <p
            className="flex items-center gap-4 cursor-pointer hover:text-green-700"
            onClick={() => setIsOpen(false)}>
            <ArrowLeft color="#1F8E1F" />
            Back
          </p>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="flex gap-8">
            <ChildProfileCard />
            <ParentDetailCard />
          </div>
          <ImmunizationHistory />
        </div>
      </div>
    </Modal>
  );
};

export default ChildProfileModal;
