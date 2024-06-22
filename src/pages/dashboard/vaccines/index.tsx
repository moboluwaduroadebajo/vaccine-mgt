import PageLayout from "@/components/Layout/PageLayout";
import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";

const Vaccines = () => {
  return (
    <PageLayout>
      <div className="h-full">
        <div className="h-[204px] w-3/4 rounded-2xl shadow-md bg-[#D9ECD9] p-10 flex justify-between items-center cursor-pointer">
          <div className="font-poppins text-[#1F8E1F]">
            <p className=" font-semibold text-2xl mb-6 leading-9">
              Add <br />
              <span>New Vaccine</span>
            </p>
            <p className="max-w-[700px]">
              Add a new Vaccine to be administered. Keep the children safe and healthy
            </p>
          </div>

          <BsPlusCircleFill size={60} color="#1F8E1F" />
        </div>

        <div className="bg-white w-3/4 h-full rounded-2xl overflow-auto mt-8 p-10">
          <p>Existing Vaccines</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Vaccines;
