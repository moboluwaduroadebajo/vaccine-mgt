import React, { useEffect, useState } from "react";
import { Icons } from "../icons";
import { BiMenuAltLeft } from "react-icons/bi";
import axios, { AxiosError } from "axios";
import Loader from "@/components/utilities/Loader";
import { ExistingVaccineType } from "@/type/vaccines.type";
import { useRouter } from "next/router";

const ExistingVaccinesTable = () => {
  const [vaccines, setVaccines] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const router = useRouter();

  useEffect(() => {
    const getVaccines = async () => {
      try {
        setIsLoading(true);
        const token = window.localStorage.getItem("token");
        const response = await axios.get(
          `${baseURL}/vaccine?size=50&search=${searchKey}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        setVaccines(response.data.data.content);
        setIsLoading(false);
      } catch (err) {
        const error = err as AxiosError<Error>;

        console.error("Error fetching vaccine count:", error);
        if (error.response?.status === 403) {
          window.localStorage.removeItem("token");
          router.push("/login");
        }
      }
      setIsLoading(false);
    };
    getVaccines();
  }, [searchKey, baseURL]);

  return (
    <div className="bg-white flex1 w-full rounded-2xl overflow-auto font-poppins">
      <div className="p-8 flex justify-between sticky top-0 z-10 bg-white shadow-md">
        <p className="font-semibold text-2xl text-[#1F8E1F]">
          Existing Vaccines
        </p>

        <div className="flex items-center justify-center gap-8">
          <BiMenuAltLeft fontSize={24} />
          <div className="relative">
            <div className="absolute top-1/2 right-6 -translate-y-1/2 ">
              {isLoading ? (
                <Loader className="!text-[#1F8E1F]" />
              ) : (
                <Icons name="search" fill="#1F8E1F" width={16} height={16} />
              )}
            </div>

            <input
              type="text"
              placeholder="Search"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              className="focus:outline-none active:outline-none h-10 w-96 px-6 rounded-full border border-[#1F8E1F]"
            />
          </div>
        </div>
      </div>

      <div className="z-50">
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
            {vaccines.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center p-6">
                  No Record found
                </td>
              </tr>
            ) : (
              vaccines.map((data: ExistingVaccineType) => (
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExistingVaccinesTable;
