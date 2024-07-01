import { ImmunizationType } from "@/type/immunization.types";
import { ChildrenDataType } from "@/type/user.type";
import { ExistingVaccineType } from "@/type/vaccines.type";
import { createColumnHelper } from "@tanstack/react-table";
import React, { useState } from "react";
import { PiCaretDownLight } from "react-icons/pi";
import Button from "../utilities/Button";

interface ImmunoProps {
  childData?: ChildrenDataType;
  pendingVaccines: ImmunizationType[];
}

const ImmunoPendingTable = ({ childData, pendingVaccines }: ImmunoProps) => {
  const columnHelper = createColumnHelper<ExistingVaccineType>();

  const columns = [
    columnHelper.accessor("type", {
      header: "Vaccine",
      cell: (props) => {
        return (
          <p className="flex gap-4 items-center">
            <span>
              <PiCaretDownLight className="text-2xl" />
            </span>
            {props.row.original.type}
          </p>
        );
      },
    }),
    columnHelper.accessor("id", {
      header: "Status",
      cell: () => (
        <p className="px-4 py-2 rounded-full text-sm bg-[#eed8d4] text-[#C91919]">
          Pending
        </p>
      ),
    }),
  ];

  const [selectedVaccine, setSelectedVaccine] = useState<number | null>();

  const toggle = (i: number) => {
    if (selectedVaccine === i) {
      setSelectedVaccine(null);
    } else {
      setSelectedVaccine(i);
    }
  };

  //   const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-7">
      <div className="flex justify-between p-4">
        <p>Vaccine</p>
        <p>Status</p>
      </div>

      {pendingVaccines.length > 0 ? (
        pendingVaccines.map((vaccine, index) => (
          <div key={vaccine.id}>
            <div
              className="flex justify-between py-4 cursor-pointer"
              onClick={() => toggle(index)}>
              <p className="flex gap-4 items-center">
                <span>
                  <PiCaretDownLight className="text-2xl" />
                </span>
                {vaccine.vaccine.type}
              </p>
              <p className="px-4 py-2 rounded-full text-sm bg-[#eed8d4] text-[#C91919]">
                Pending
              </p>
            </div>

            <div
              className={
                selectedVaccine === index
                  ? "w-full overflow-hidden max-h-[400px] font-poppins transition-max-h duration-[0.8s] ease mt-1 bg-gray-50 p-8 rounded-lg border border-green-400"
                  : "w-full overflow-hidden max-h-0 font-poppins transition-all duration-[0.8s] ease"
              }>
              <h5 className=" font-semibold ">{vaccine.vaccine.type}</h5>
              <p className="mb-4">
                This dose is taken at birth or as soon as possible after birth
              </p>

              <div className="flex justify-between">
                <div className="flex items-center justify-between w-1/2 gap-">
                  <div className="flex items-center gap-4">
                    <label htmlFor="">Administered</label>

                    <input type="checkbox" className="w-6 h-6" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <p>Date of Immunization</p>
                    <p className="p-4 bg-[#eeeeee] flex items-center justify-center">
                      {vaccine.minimumAdministerDate}
                    </p>
                  </div>
                </div>

                <Button
                  label="Update"
                  variant="primary"
                  additionalClassname="w-[200px]"
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No Pending vaccines yet</p>
      )}
    </div>
  );
};

export default ImmunoPendingTable;
