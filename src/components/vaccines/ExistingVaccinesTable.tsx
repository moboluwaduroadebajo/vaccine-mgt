import React from "react";
import { Icons } from "../icons";
import { BiMenuAltLeft } from "react-icons/bi";

const ExistingVaccinesTable = () => {
  const existingVaccData = [
    {
      id: 1,
      min_age: "At Birth",
      type_of_vaccine: "BCG",
      dosage: "0.05ml",
      route_of_admin: "Oral",
    },
    {
      id: 2,
      min_age: "At Birth",
      type_of_vaccine: "BCG",
      dosage: "0.05ml",
      route_of_admin: "Oral",
    },
    {
      id: 3,
      min_age: "At Birth",
      type_of_vaccine: "BCG",
      dosage: "0.05ml",
      route_of_admin: "Oral",
    },
    {
      id: 4,
      min_age: "At Birth",
      type_of_vaccine: "BCG",
      dosage: "0.05ml",
      route_of_admin: "Oral",
    },
    {
      id: 5,
      min_age: "At Birth",
      type_of_vaccine: "BCG",
      dosage: "0.05ml",
      route_of_admin: "Oral",
    },
    {
      id: 6,
      min_age: "At Birth",
      type_of_vaccine: "BCG",
      dosage: "0.05ml",
      route_of_admin: "Oral",
    },
  ];
  return (
    <div className="bg-white flex1 w-full rounded-2xl overflow-auto font-poppins">
      <div className="p-8 flex justify-between">
        <p className="font-semibold text-2xl">Existing Vaccines</p>

        <div className="flex items-center justify-center gap-8">
          <BiMenuAltLeft fontSize={24} />
          <div className="relative">
            <span className="absolute top-1/2 right-6 -translate-y-1/2 ">
              <Icons name="search" fill="#1F8E1F" width={16} height={16} />
            </span>

            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none active:outline-none h-10 w-96 px-6 rounded-full border border-[#1F8E1F]"
            />
          </div>
        </div>
      </div>

      <div className="">
        <table className="w-full">
          <thead className="font-roboto">
            <tr className="">
              <td className="max-w-[115px] p-6">Minimum Target age</td>
              <td className="max-w-[115px] p-6">Type of Vaccine</td>
              <td className="max-w-[115px] p-6">Dosage</td>
              <td className="max-w-[115px] p-6">Route of Administration</td>
            </tr>
          </thead>

          <tbody>
            {existingVaccData.map((data) => (
              <tr
                key={data.id}
                className="h-[70px] mb-6 hover:bg-[#f4f9f4] hover:border hover:border-[#1F8E1F] hover:rounded-lg cursor-pointer">
                <td className="p-6 font-medium mb-2 borderb">{data.min_age}</td>
                <td className="p-6 font-medium borderb">
                  {data.type_of_vaccine}
                </td>
                <td className="p-6 borderb">{data.dosage}</td>
                <td className="p-6 borderb text-[#1F8E1F]">
                  {data.route_of_admin}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExistingVaccinesTable;
