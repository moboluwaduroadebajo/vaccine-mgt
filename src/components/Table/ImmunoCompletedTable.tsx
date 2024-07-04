import { ImmunizationType } from "@/type/immunization.types";
import { ChildrenDataType } from "@/type/user.type";
import { ExistingVaccineType } from "@/type/vaccines.type";
import { createColumnHelper } from "@tanstack/react-table";
import React, { useState } from "react";
import { PiCaretDownLight } from "react-icons/pi";
import Button from "../utilities/Button";
import DatePickerInput from "../FormFields/DatePickerInput";
import { BsCheck } from "react-icons/bs";

interface ImmunoProps {
  completedVaccine: ImmunizationType[];
}

const ImmunoCompletedTable = ({ completedVaccine }: ImmunoProps) => {
  const [selectedVaccine, setSelectedVaccine] = useState<number>(0);
  const [administered, setAdministered] = useState<boolean[]>(completedVaccine.map(v => v.administered));
  const [administeredDate, setAdministeredDate] = useState<(string | null)[]>(completedVaccine.map(v => v.dateOfAdministration));


  const toggle = (i: number) => {
    if (selectedVaccine !== i) {
      setSelectedVaccine(i);
    }
  };

  const handleCheckboxChange = (index: number) => {
    setAdministered(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleDateChange = (index: number, date: string) => {
    setAdministeredDate(prevState => {
      const newState = [...prevState];
      newState[index] = date;
      return newState;
    });
  };

  const handleSubmit = (index: number) => {
    const updatedVaccine = {
      ...completedVaccine[index],
      administered: administered[index],
      dateOfAdministration: administeredDate[index],
    };
    console.log(`Submitting updated data for vaccine ${index}:`, updatedVaccine);
  };

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
    <div className="pt-7 p-8">
      <div className="flex justify-between p-4 font-bold font-poppins text-[#1F8E1F]">
        <p>Vaccine</p>
        <p>Status</p>
      </div>

      {completedVaccine.length > 0 ? (
        completedVaccine.map((vaccine, index) => (
          <div key={vaccine.id}>
            <div
              className="flex justify-between py-4 cursor-pointer"
              onClick={() => toggle(index)}>
              <p className="flex gap-4 items-center">
                <span
                  className={
                    selectedVaccine === index
                      ? " transform rotate-180 transition-transform duration-[0.5s] ease-in "
                      : " transform rotate-0 transition-transform duration-[0.5s] ease-in "
                  }>
                  <PiCaretDownLight className="text-2xl" />
                </span>
                {vaccine.vaccine.type}
              </p>
              <p className="px-4 py-2 rounded-full text-sm bg-[#e1f7e4] text-[#35C549]">
                Completed
              </p>
            </div>

            <div
              className={
                selectedVaccine === index
                  ? "w-full max-h-[400px] font-poppins transition-max-h duration-[0.8s] ease mt-1 bg-gray-50 p-8 rounded-lg border border-green-400"
                  : "w-full overflow-hidden max-h-0 font-poppins transition-all duration-[0.8s] ease"
              }>
              <h5 className=" font-semibold ">{vaccine.vaccine.type}</h5>
              <p className="mb-4">
                This dose is taken at birth or as soon as possible after birth
              </p>

              <div className="flex justify-between">
                <div className="flex items-center justify-between w-1/2">
                  <div className="flex flex-col items-center gap-4">
                    <label htmlFor="">Not Administered</label>

                    <input
                      type="checkbox"
                      className="w-7 h-7 appearance-  border border-[#1F8E1F] rounded-sm"
                      checked={administered[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <p>Date of Immunization</p>
                    {/* <input
                      type="text"
                      className="p-4 w-[160px] bg-[#eeeeee]  items- justify-center outline-none"
                      placeholder={vaccine.minimumAdministerDate}
                    /> */}
                    <DatePickerInput
                      label=""
                      placeholder={vaccine.minimumAdministerDate}
                      additionalClass="w-[160px]"
                    />
                  </div>
                </div>

                <Button
                  label="Update"
                  variant="primary"
                  additionalClassname="w-[200px]"
                  onClick={() => handleSubmit(index)}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No completed vaccines yet</p>
      )}
    </div>
  );
};

export default ImmunoCompletedTable;
