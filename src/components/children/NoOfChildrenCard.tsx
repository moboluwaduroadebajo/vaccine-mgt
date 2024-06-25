import React, { useEffect, useState } from "react";
import { Icons } from "../icons";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import Loader from "../utilities/Loader";

const NoOfChildrenCard = () => {
  const [noOfChildren, setNoOfChildren] = useState<number | null>(null);
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const router = useRouter();

  useEffect(() => {
    const getNoOfChildren = async () => {
      try {
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        const response = await axios.get(`${baseURL}/immuno/children/count`, {
          headers: {
            Authorization: token,
          },
        });

        setNoOfChildren(response.data.data);
      } catch (err) {
        const error = err as AxiosError<Error>;
        console.error("Error fetching vaccine count:", error);
        if (error.response?.status === 403) {
          window.localStorage.removeItem("token");
          router.push("/login");
        }
      }
    };
    getNoOfChildren();
  });
  return (
    <div className="bg-[#D9ECD9] p-8 rounded-2xl shadow-md mb-6 flex flex-col gap-8 font-poppins">
      <h3 className="text-xl font-light">No. of Children</h3>
      <div>
        <span className="h-16 w-16 bg-white rounded-full flex justify-center items-center">
          <Icons name="parents" fill="#1F8E1F" />
        </span>
        <div className="text-2xl font-black mt-2 ml-4 text-[#1F8E1F]">
          {noOfChildren !== null ? noOfChildren : <Loader />}
        </div>
      </div>

      <a href="#" className="text-[#1F8E1F] mt-2 font-bold inline-block">
        View all
      </a>
    </div>
  );
};

export default NoOfChildrenCard;
