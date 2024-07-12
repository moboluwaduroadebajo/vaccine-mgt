import React, { useEffect, useMemo, useState } from "react";
import { Icons } from "../icons";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import Loader from "../utilities/Loader";
import { useQuery } from "@tanstack/react-query";

const NoOfParentsCard = () => {
  // const [noOfParents, setNoOfParents] = useState<number | null>(null);
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const fetchNoOfParents = async () => {
    const response = await axios.get(`${baseURL}/immuno/parents/count`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data.data;
  };

  const {
    data: noOfParents,
    error,
    isLoading,
  } = useQuery<number, AxiosError<Error>>({
    queryKey: ["fetchNoOfParents"],
    queryFn: fetchNoOfParents,
  });

  if (error) {
    console.error("Error fetching number of parents: ", error);
    if (error.response?.status === 401) {
      window.localStorage.removeItem("token");
      router.push("/login");
    }
  }

  return (
    <div className="bg-[#D9ECD9] p-8 rounded-2xl shadow-md mb-6 flex flex-col justify-center gap-8 font-poppins">
      <h3 className="text-xl font-light">No. of Parents</h3>
      <div>
        <span className="h-16 w-16 bg-white rounded-full flex justify-center items-center">
          <Icons name="parents" fill="#1F8E1F" />
        </span>
        <div className="text-2xl font-black mt-2 ml-4 text-[#1F8E1F]">
          {isLoading ? <Loader className="!text-[#1F8E1F]" /> : noOfParents}
        </div>
      </div>

      <a href="#" className="text-[#1F8E1F] mt-2 font-bold inline-block">
        View all
      </a>
    </div>
  );
};

export default NoOfParentsCard;
