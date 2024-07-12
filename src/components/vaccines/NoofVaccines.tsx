"use client";

import React, { useEffect, useState } from "react";
import { Icons } from "../icons";
import axios, { AxiosError } from "axios";
import Loader from "@/components/utilities/Loader";
import { useRouter } from "next/router";

const NoofVaccines = () => {
  const [noOfVaccines, setNoOfVaccines] = useState<number | null>(null);
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const router = useRouter();

  useEffect(() => {
    const getNoOfVaccines = async () => {
      try {
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        const response = await axios.get(`${baseURL}/vaccine/count`, {
          headers: {
            Authorization: token,
          },
        });

        setNoOfVaccines(response.data.data);
      } catch (err) {
        const error = err as AxiosError<Error>;
        console.error("Error fetching vaccine count:", error);
        if (error.response?.status === 403) {
          window.localStorage.removeItem("token");
          router.push("/login");
        }
      }
    };
    getNoOfVaccines();
  });

  return (
    <div className="lg:w-[25%] h-[300px] bg-[#D9ECD9] rounded-2xl flex flex-col justify-center items-center gap-4 shadow-md">
      <p className="capitalize font-poppins font-light text-center text-xl leading-8 max-w-[138px] ">
        No. of existing vaccines
      </p>
      <div className="h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center">
        <Icons name="injection" fill="#1F8E1F" />
      </div>
      <div className="text-[#1F8E1F] font-poppins font-black text-4xl">
        {noOfVaccines !== null ? noOfVaccines : <Loader />}
      </div>
    </div>
  );
};

export default NoofVaccines;
