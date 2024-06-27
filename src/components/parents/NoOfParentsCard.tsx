import React, { useEffect, useState } from "react";
import { Icons } from "../icons";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import Loader from "../utilities/Loader";

const NoOfParentsCard = () => {
  const [noOfParents, setNoOfParents] = useState<number | null>(null);
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const router = useRouter();

  useEffect(() => {
    const getNoOfParents = async () => {
      try {
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        const response = await axios.get(`${baseURL}/immuno/parents/count`, {
          headers: {
            Authorization: token,
          },
        });

        setNoOfParents(response.data.data);
      } catch (err) {
        const error = err as AxiosError<Error>;
        console.error("Error fetching vaccine count:", error);
        if (error.response?.status === 403) {
          window.localStorage.removeItem("token");
          router.push("/login");
        }
      }
    };
    getNoOfParents();
  });
  return (
    <div className="bg-[#D9ECD9] p-8 rounded-2xl shadow-md mb-6 flex flex-col justify-center gap-8 font-poppins">
      <h3 className="text-xl font-light">No. of Parents</h3>
      <div>
        <span className="h-16 w-16 bg-white rounded-full flex justify-center items-center">
          <Icons name="parents" fill="#1F8E1F" />
        </span>
        <div className="text-2xl font-black mt-2 ml-4 text-[#1F8E1F]">
          {noOfParents !== null ? (
            noOfParents
          ) : (
            <Loader className="!text-[#1F8E1F]" />
          )}
        </div>
      </div>

      <a href="#" className="text-[#1F8E1F] mt-2 font-bold inline-block">
        View all
      </a>
    </div>
  );
};

export default NoOfParentsCard;
