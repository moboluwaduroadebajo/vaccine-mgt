import React, { useEffect, useState } from "react";
import { Icons } from "../icons";
import axios from "axios";
import Loader from "@/components/utilities/Loader";

const NoofVaccines = () => {
  const [noOfVaccines, setNoOfVaccines] = useState<number | null>(null);
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

  useEffect(() => {
    const getNoOfVaccines = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${baseURL}/vaccine/count`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setNoOfVaccines(response.data.data);
      } catch (error) {
        console.error("Error fetching vaccine count:", error);
      }
    };
    getNoOfVaccines();
  }, []);


  return (
    <div className="w-[25%] h-[300px] bg-[#D9ECD9] rounded-2xl flex flex-col justify-center items-center gap-4">
      <p className="capitalize font-poppins font-light text-center text-xl leading-8 max-w-[138px] ">
        No. of existing vaccines
      </p>
      <div className="h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center">
        <Icons name="injection" fill="#1F8E1F" />
      </div>
      <p className="text-[#1F8E1F] font-poppins font-black text-4xl">
        {noOfVaccines !== null ? noOfVaccines : <Loader />}
      </p>
    </div>
  );
};

export default NoofVaccines;
