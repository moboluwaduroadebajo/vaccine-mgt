import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import AddNewVaccineModal from "../Modals/AddNewVaccineModal";

const AddNewVaccine = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex-1 rounded-2xl shadow-md bg-[#D9ECD9] sm:p-10 p-3 flex justify-between items-center cursor-pointer">
        <div className="font-poppins text-[#1F8E1F]">
          <p className="font-semibold sm:text-2xl text-xl sm:mb-6 mb-3 leading-9">
            Add <br />
            <span>New Vaccine</span>
          </p>
          <p className="min-w-[200px] max-w-[700px]">
            Add a new Vaccine to be administered. Keep the children safe and
            healthy
          </p>
        </div>

        <div onClick={() => setIsModalOpen(true)}>
          <BsPlusCircleFill className="text-[#1F8E1F] hover:text-[#63b563] sm:text-[60px] text-[45px]" />
        </div>
      </div>
      <AddNewVaccineModal
        isOpen={isModalOpen}
        setIsOpen={() => setIsModalOpen(!isModalOpen)}
      />
    </>
  );
};

export default AddNewVaccine;
