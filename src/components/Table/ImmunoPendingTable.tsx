import { ImmunizationType } from "@/type/immunization.types";
import { ExistingVaccineType } from "@/type/vaccines.type";
import { createColumnHelper } from "@tanstack/react-table";
import React, { useState } from "react";
import { PiCaretDownLight } from "react-icons/pi";
import Button from "../utilities/Button";
import axios from "axios";
import DatePickerInput from "../FormFields/DatePickerInput";

interface ImmunoProps {
  pendingVaccines: ImmunizationType[];
}

const ImmunoPendingTable = ({ pendingVaccines }: ImmunoProps) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

  const [vaccineStatus, setVaccineStatus] = useState(false);
  const [immunoID, setImmunoID] = useState<ImmunizationType[]>();
  const [checkedStatus, setCheckedStatus] = useState<{
    [key: number]: boolean;
  }>({});
  const [administeredDate, setAdministeredDate] = useState<{
    [key: number]: string;
  }>({});

  const [selectedVaccine, setSelectedVaccine] = useState<number | null>();
  const toggle = (i: number) => {
    if (selectedVaccine === i) {
      setSelectedVaccine(null);
    } else {
      setSelectedVaccine(i);
    }
  };

  const handleCheckboxChange = (index: number, checked: boolean) => {
    setCheckedStatus((prev) => ({ ...prev, [index]: checked }));
  };

  const handleDateChange = (index: number, date: string) => {
    setAdministeredDate((prev) => ({ ...prev, [index]: date }));
  };

  const updateStatus = async (immunizationID: string, index: number) => {
    try {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : "";
      const response = await axios.put(
        `${baseURL}/immuno/immuno-record/${immunizationID}`,
        {
          administered: true,
          dateOfAdministration: "2024-07-03",
          vaccineId: "43d9c45f-c90b-41d0-9040-5c62b8dc6e42",
          minimumAdministerDate: "2024-08-08",
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        console.log("Vaccine status updated successfully");
      } else {
        console.error("Failed to update vaccine status");
      }
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

      {pendingVaccines.length > 0 ? (
        pendingVaccines.map((vaccine, index) => (
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
              <p className="px-4 py-2 rounded-full text-sm bg-[#eed8d4] text-[#C91919]">
                Pending
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
                    <label htmlFor="">Administered</label>

                    <input
                      type="checkbox"
                      className="w-7 h-7"
                      checked={checkedStatus[index] || false}
                      onChange={(e) =>
                        handleCheckboxChange(index, e.target.checked)
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <p>Date of Immunization</p>
                    <DatePickerInput
                      label=""
                      placeholder={vaccine.minimumAdministerDate}
                      // value={administeredDate[index] || ""}
                      // onChange={(date: Date) => handleDateChange(index, date)}
                      additionalClass="w-[160px]"
                    />
                  </div>
                </div>

                <Button
                  label="Update"
                  variant="primary"
                  additionalClassname="w-[200px]"
                  // onClick={() => updateStatus(vaccine.id, index)}
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
