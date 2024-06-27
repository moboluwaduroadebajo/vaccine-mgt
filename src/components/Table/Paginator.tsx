import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import React, { useState } from "react";
import { RxCaretDown, RxCaretLeft, RxCaretRight } from "react-icons/rx";

const DROPDOWN_OPTIONS = [
  { label: 10, value: 10 },
  { label: 20, value: 20 },
  { label: 50, value: 50 },
  { label: 100, value: 100 },
];

const Paginator = () => {
  const [option, setOption] = useState(10);
  return (
    <div className="flex justify-between mt-8">
      <div className="flex items-center gap-3">
        <p>Result per page</p>

        <Menu>
          <MenuButton>
            {({ active }) => (
              <div
                className={clsx(
                  `${
                    active && "bg-green-200"
                  } border flex items-center justify-center gap-3 bg-white w-12 h-10 rounded-md px-10 cursor-pointer`
                )}>
                {option}
                <span className="hover:text-[#1F8E1F]">
                  <RxCaretDown fontSize={24} />
                </span>
              </div>
            )}
          </MenuButton>
          <MenuItems
            anchor="bottom"
            className="bg-white w-14 flex flex-col items-center rounded-lg shadow-md">
            {DROPDOWN_OPTIONS.map((option) => (
              <MenuItem key={option.value}>
                {({ focus }) => (
                  <li
                    className={clsx(
                      " list-none py-2 px-3.5",
                      focus && "bg-green-100 cursor-pointer"
                    )}
                    onClick={() => setOption(option.label)}>
                    {option.label}
                  </li>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
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
