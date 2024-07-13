import { ImmunizationType } from "@/type/immunization.types";
import { ExistingVaccineType } from "@/type/vaccines.type";
import { createColumnHelper } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import { PiCaretDownLight } from "react-icons/pi";
import Button from "../utilities/Button";
import DatePickerInput from "../FormFields/DatePickerInput";
import { BsCheck } from "react-icons/bs";
import axios from "axios";

interface ImmunoProps {
  completedVaccine: ImmunizationType[];
}

const ImmunoCompletedTable = ({ completedVaccine }: ImmunoProps) => {
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

  const [selectedVaccine, setSelectedVaccine] = useState<number | null>();
  const [administered, setAdministered] = useState<boolean[]>(
    completedVaccine.map((v) => v.administered)
  );

  const [administeredDate, setAdministeredDate] = useState<(Date | null)[]>(
    completedVaccine.map((v) =>
      v.dateOfAdministration ? new Date(v.dateOfAdministration) : null
    )
  );

  const toggle = (i: number) => {
    if (selectedVaccine === i) {
      setSelectedVaccine(null);
    } else {
      setSelectedVaccine(i);
    }
  };

  const handleCheckboxChange = (index: number) => {
    setAdministered((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleDateChange = (index: number, date: Date | undefined) => {
    setAdministeredDate((prevState) => {
      const newState = [...prevState];
      newState[index] = date || null;
      return newState;
    });
  };

  const handleSubmit = async (index: number, immunizationID: string) => {
    const updatedVaccine = {
      ...completedVaccine[index],
      administered: !administered[index],
      dateOfAdministration: administeredDate[index]
        ? formatDate(administeredDate[index]!)
        : null,
      vaccineId: completedVaccine[index].vaccine.id,
    };
    try {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : "";
      const response = await axios.put(
        `${baseURL}/immuno/immuno-record/${immunizationID}`,
        updatedVaccine,
        { headers: { Authorization: token } }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
              <p className="h-6 sm:px-6 sm:p-4 p-3 flex items-center justify-center rounded-full text-sm bg-[#e1f7e4] text-[#35C549]">
                Completed
              </p>
            </div>

            <div
              className={
                selectedVaccine === index
                  ? "w-full max-h-[400px] font-poppins transition-max-h duration-[0.8s] ease mt-1 bg-gray-50 sm:p-8 p-4 rounded-lg border border-green-400"
                  : "w-full overflow-hidden max-h-0 font-poppins transition-all duration-[0.8s] ease"
              }>
              <h5 className="font-semibold ">{vaccine.vaccine.type}</h5>
              <p className="mb-4">
                This dose is taken at birth or as soon as possible after birth
              </p>

              <div className="flex md:flex-row flex-col md:gap-0 gap-6 justify-between">
                <div className="flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-5 md:w-1/2">
                  <div className="flex lg:flex-col items-center gap-4">
                    <label htmlFor="">Not Administered</label>

                    <input
                      type="checkbox"
                      className="w-7 h-7 border border-[#1F8E1F] rounded-sm"
                      // checked={administered[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </div>

                  <div className="flex flex-col lg:items-center gap-1">
                    <DatePickerInput
                      label="Date of Immunization"
                      placeholder={vaccine.minimumAdministerDate}
                      value={administeredDate[index] || undefined}
                      onChange={(date) => handleDateChange(index, date)}
                      additionalClass="w-[160px]"
                    />
                  </div>
                </div>

                <Button
                  label="Update"
                  variant="primary"
                  additionalClassname="md:w-[200px] w-[60%]"
                  onClick={() => handleSubmit(index, vaccine.id)}
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
