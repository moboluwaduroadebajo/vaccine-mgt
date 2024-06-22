import React, { useEffect, useState } from "react";
import { Icons } from "../icons";
import { BiMenuAltLeft } from "react-icons/bi";
import axios from "axios";
import Loader from "@/components/utilities/Loader";
import { ExistingVaccineType } from "@/type/vaccines.type";

const ExistingVaccinesTable = () => {
  const [vaccines, setVaccines] = useState([]);
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

  useEffect(() => {
    const getVaccines = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${baseURL}/vaccine?size=50`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setVaccines(response.data.data.content);
        console.log(response.data.data.content);
      } catch (error) {
        console.error("Error fetching vaccine count:", error);
      }
    };
    getVaccines();
    console.log(vaccines);
  });

  return (
    <div className="bg-white flex1 w-full rounded-2xl overflow-auto font-poppins">
      <div className="p-8 flex justify-between">
        <p className="font-semibold text-2xl text-[#1F8E1F]">
          Existing Vaccines
        </p>

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

      <div>
        <table className="w-full">
          <thead className="font-semibold text-1xl">
            <tr className="text-[#1F8E1F]">
              <td className="max-w-[115px] p-6">Age Target</td>
              <td className="max-w-[115px] p-6">Type of Vaccine</td>
              <td className="max-w-[115px] p-6">Dosage</td>
              <td className="max-w-[115px] p-6">Route of Administration</td>
            </tr>
          </thead>

          <tbody>
            {vaccines.map((data: ExistingVaccineType) => (
              <tr
                key={data.id}
                className="h-[70px] mb-6 hover:bg-[#f4f9f4] hover:border hover:border-[#1F8E1F] hover:rounded-lg cursor-pointer">
                <td className="p-6 font-medium mb-2 borderb">
                  {data.ageTarget}
                </td>
                <td className="p-6 font-medium borderb">{data.type}</td>
                <td className="p-6 borderb">
                  {data.dosage} {data.dosageType}
                </td>
                <td className="p-6 borderb text-[#1F8E1F]">
                  {data.routeOfAdministration}
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
