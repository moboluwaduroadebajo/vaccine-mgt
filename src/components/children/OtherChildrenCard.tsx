import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";

const OtherChildrenCard = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-between gap-10 px-20 py-8 font-poppins bg-white rounded-2xl">
        <p className="font-bold text-2xl">Other Children</p>

        {/* {selectedParent?.children.length === 0 ? (
            <p className="font-bold">No child added</p>
          ) : (
            selectedParent?.children.map((child) => (
              <p key={child.id} className="font-medium">
                {child.firstName}
              </p>
            ))
          )} */}
        <p>Tope</p>
        <p>Tope</p>
        <p>Tope</p>

        <BsPlusCircleFill className="text-[#1F8E1F] text-4xl hover:text-[#6ba96b] cursor-pointer" />
      </div>
    </div>
  );
};

export default OtherChildrenCard;
