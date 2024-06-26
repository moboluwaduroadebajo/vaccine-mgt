import React, { useEffect } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Icons } from "../icons";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";

const ChildrenDetailCard = () => {
  const childrenData = [
    {
      name: "Taiwo Awoniyi",
      parentName: "Adeniyi Fatoki",
      status: "Pending 0/3",
      statusType: "pending",
    },
    {
      name: "Kelechi Iheanacho",
      parentName: "Kelechi Iheanacho",
      status: "Pending 0/3",
      statusType: "pending",
    },
    {
      name: "Kelechi Iheanacho",
      parentName: "Kelechi Iheanacho",
      status: "Pending 0/3",
      statusType: "pending",
    },
    {
      name: "Kelechi Iheanacho",
      parentName: "Kelechi Iheanacho",
      status: "completed 3/3",
      statusType: "completed",
    },
  ];

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const router = useRouter();

  useEffect(() => {
    const getChildrenDetails = async () => {
      try {
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        const response = await axios.get(`${baseURL}/immuno/children`, {
          headers: {
            Authorization: token,
          },
        });
        console.log(response.data);
      } catch (err) {
        const error = err as AxiosError<Error>;
        console.error("Error fetching children:", error);
        if (error.response?.status === 403) {
          window.localStorage.removeItem("token");
          router.push("/login");
        }
      }
    };
    // getChildrenDetails();
  }, []);
  return (
    <div className="grow bg-white rounded-2xl">
      <div className="flex flex-col shadow-md p-4 sticky top-0 rounded-2xl bg-white">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-poppins font-semibold text-2xl">Children</p>
          </div>

          <div className="flex items-center justify-center gap-8">
            <BiMenuAltLeft fontSize={24} />
            <div className="relative">
              <div className="absolute top-1/2 right-6 -translate-y-1/2 ">
                <Icons name="search" fill="#1F8E1F" width={16} height={16} />
              </div>

              <input
                type="text"
                placeholder="Search"
                value=""
                onChange={(e) => e.target.value}
                className="focus:outline-none active:outline-none h-10 w-96 px-6 rounded-full border border-[#1F8E1F]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between px-20 pt-8 pb-4 font-roboto text-[#686868]">
          <p>Name</p>
          <p>Status</p>
        </div>
      </div>

      {childrenData.map((child, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-6 px-6 cursor-pointer font-poppins border-b hover:border-2 hover:rounded-2xl hover:bg-[#f4f9f4] hover:border-[#1F8E1F]">
          <p className="font-semibold max-w-[115px]">{child.name}</p>

          <p className="max-w-[115px]">{child.parentName}</p>

          <div
            className={`px-3 py-1 rounded-full text-sm ${
              child.statusType === "completed"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}>
            {child.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChildrenDetailCard;
