import React, { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Icons } from "../icons";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { UserEntityType } from "@/type/account.type";
import { ParentDataType } from "@/type/user.type";

const ParentDetailCard = () => {
  const parentsData = [
    {
      name: "Taiwo Awoniyi",
      phoneNumber: "09097776667",
      noOfChildren: "3",
    },
    {
      name: "Kelechi Iheanacho",
      phoneNumber: "09097776667",
      noOfChildren: "3",
    },
    {
      name: "Kelechi Iheanacho",
      phoneNumber: "09097776667",
      noOfChildren: "3",
    },
    {
      name: "Kelechi Iheanacho",
      phoneNumber: "09097776667",
      noOfChildren: "3",
    },
  ];

  const [parentData, setParentData] = useState([]);

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const router = useRouter();

  useEffect(() => {
    const getParentDetails = async () => {
      try {
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        const response = await axios.get(`${baseURL}/immuno/parents`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        setParentData(response.data.data.content);
      } catch (err) {
        const error = err as AxiosError<UserEntityType>;
        console.error(
          "Error fetching parent details:",
          error.response?.data.errors
        );
        if (error.response?.status === 403) {
          window.localStorage.removeItem("token");
          router.push("/login");
        }
      }
    };
    getParentDetails();
  }, [baseURL]);
  return (
    <div className="grow bg-white rounded-2xl ">
      <div className="flex flex-col shadow-md p-4 sticky top-0 rounded-2xl bg-white">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-poppins font-semibold text-2xl">Parents</p>
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

        <div className="flex justify-between px-4 pt-8 pb-4 font-roboto text-[#686868]">
          <p>Name</p>
          <p>Email adddress</p>
          <p>Phone Number</p>
        </div>
      </div>

      {parentData.length === 0 ? (
        <div className="text-center">No parent has been onboarded</div>
      ) : (
        parentData.map((parent: ParentDataType) => (
          <div
            key={parent.id}
            className="flex justify-between items-center py-6 px-6 cursor-pointer font-poppins border-b hover:border-2 hover:rounded-2xl hover:bg-[#f4f9f4] hover:border-[#1F8E1F]">
            <p className="font-semibold max-w-[115px]">{`${parent.firstName} ${parent.lastName}`}</p>

            <p className="font-light">{parent.email}</p>

            <p className="font-light">{parent.phoneNumber}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ParentDetailCard;
