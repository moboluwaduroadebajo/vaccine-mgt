import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import AddNewVaccineModal from "../Modals/AddNewVaccineModal";

const AddNewVaccine = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {" "}
      <div className="h-[300px] flex-1 rounded-2xl shadow-md bg-[#D9ECD9] p-10 flex justify-between items-center cursor-pointer">
        <div className="font-poppins text-[#1F8E1F]">
          <p className="font-semibold text-2xl mb-6 leading-9">
            Add <br />
            <span>New Vaccine</span>
          </p>
          <p className="max-w-[700px]">
            Add a new Vaccine to be administered. Keep the children safe and
            healthy
          </p>
        </div>

        <div onClick={() => setIsModalOpen(true)}>
          <BsPlusCircleFill
            size={60}
            className="text-[#1F8E1F] hover:text-white"
          />
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
