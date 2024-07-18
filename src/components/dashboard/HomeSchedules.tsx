import React, { useEffect, useState } from "react";
import { Icons } from "../icons";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";

const HomeSchedules = () => {
  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

  const [countToday, setCountToday] = useState(0);

  useEffect(() => {
    const getImminentImmunizations = async () => {
      try {
        // setIsLoading(true);
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        const response = await axios.get(
          `${baseURL}/immuno/pending/today/count`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        setCountToday(response.data.data);
        // setIsLoading(false);
      } catch (err) {
        const error = err as AxiosError<Error>;

        console.error("Error fetching imminent immunization for today:", error);
        if (error.response?.status === 401) {
          window.localStorage.removeItem("token");
          router.push("/login");
        }
      }
      // setIsLoading(false);
    };
    getImminentImmunizations();
  }, [baseURL]);
  return (
    <div className="lg:w-[60%] md:px-8 p-3 md:py-10 rounded-2xl shadow-md bg-white font-poppins">
      <p className="font-bold sm:text-2xl text-lg pb-10 border-b border-[#1F8E1F]">
        Welcome Back
      </p>

      <div className="flex justify-between md:gap-8 gap-3 pt-8 md:px-8">
        <div>
          <div className="p-2 font-light sm:text-base text-xs flex items-center gap-2">
            <Icons name="schedule" fill="#1F8E1F" />
            {countToday
              ? `${countToday} scheduled ${
                  countToday > 1 ? "children" : "child"
                } today`
              : "No scheduled children today"}
          </div>
        </div>
        <div className="bg-[#1F8E1F] items-stretch w-[.01em]" />
        <div className="flex justify-center items-center gap-2 sm:text-base text-xs max-w-[225px] text-[#C91919]">
          <Icons name="missed_call" />5 missed immunization
        </div>
      </div>
    </div>
  );
};

export default HomeSchedules;
