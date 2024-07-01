import { ImmunizationType } from "@/type/immunization.types";
import { ChildrenDataType } from "@/type/user.type";
import { ExistingVaccineType } from "@/type/vaccines.type";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { PiCaretDownLight } from "react-icons/pi";

interface ImmunoProps {
  childData?: ChildrenDataType;
  completedVaccine: ImmunizationType[];
}

const ImmunoCompletedTable = ({ childData, completedVaccine }: ImmunoProps) => {
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
        <p className="px-4 py-2 rounded-full text-sm bg-[#e1f7e4] text-[#35C549]">
          Completed
        </p>
      ),
    }),
  ];
  return (
    <div className="pt-7">
      <div className="flex justify-between p-4">
        <p>Vaccine</p>
        <p>Status</p>
      </div>

      {completedVaccine.length > 0 ? (
        completedVaccine.map((vaccine) => (
          <div key={vaccine.id} className="flex justify-between py-4">
            <p className="flex gap-4 items-center">
              <span>
                <PiCaretDownLight className="text-2xl" />
              </span>
              {vaccine.vaccine.type}
            </p>
            <p className="px-4 py-2 rounded-full text-sm bg-[#e1f7e4] text-[#35C549]">
              Completed
            </p>
          </div>
        ))
      ) : (
        <p>No completed vaccines yet</p>
      )}
    </div>
  );
};

export default ImmunoCompletedTable;
