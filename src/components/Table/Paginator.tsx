import React from "react";
import { RxCaretDown, RxCaretLeft, RxCaretRight } from "react-icons/rx";

const Paginator = () => {
  return (
    <div className="flex justify-between mt-8">
      <div className="flex items-center gap-3">
        <p>Result per page</p>
        <div className="border flex items-center justify-center gap-3 bg-white w-12 h-10 rounded-md px-8 cursor-pointer">
          10
          <span className="hover:text-[#1F8E1F]">
            <RxCaretDown fontSize={24} />
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center gap-8">
        <button className="border-none outline-none flex items-center font-medium hover:text-[#1F8E1F]">
          <RxCaretLeft fontSize={24} />
          Prev
        </button>
        <p>1 of 10</p>
        <button className="border-none outline-none flex items-center font-medium hover:text-[#1F8E1F]">
          Next
          <RxCaretRight fontSize={24} />
        </button>
      </div>
    </div>
  );
};

export default Paginator;
