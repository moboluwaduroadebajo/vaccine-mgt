import React, { useEffect, useState } from "react";
import { Icons } from "../icons";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import Loader from "../utilities/Loader";
import clsx from "clsx";
import { useQuery } from "@tanstack/react-query";

interface ChildrenCardProps {
  variant: "primary" | "whiteBackground";
}

const NoOfChildrenCard = ({ variant }: ChildrenCardProps) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";
  const router = useRouter();

  const fetchNoOfChildren = async () => {
    const response = await axios.get(`${baseURL}/immuno/children/count`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data.data;
  };

  const {
    data: noOfChildren,
    error,
    isLoading,
  } = useQuery<number, AxiosError<Error>>({
    queryKey: ["fetchNoOfChildren"],
    queryFn: fetchNoOfChildren,
  });

  if (error) {
    console.error("Error fetching number of children: ", error);
    if (error.response?.status === 401) {
      window.localStorage.removeItem("token");
      router.push("/login");
    }
  }

  return (
    <div
      className={clsx({
        "bg-[#D9ECD9] p-8 rounded-2xl shadow-md mb-6 flex flex-col gap-8 font-poppins":
          true,
        "": variant === "primary",
        "bg-white h-full": variant === "whiteBackground",
      })}>
      <div
        className={clsx({
          "": true,
          "flex justify-between": variant === "whiteBackground",
        })}>
        <h3
          className={clsx({
            "text-xl": true,
            "font-light": variant === "primary",
            "font-bold": variant === "whiteBackground",
          })}>
          No. of Children
        </h3>
        <a
          href="#"
          className={clsx({
            " ": true,
            " hidden": variant === "primary",
            "inline-block text-[#1F8E1F] mt-2 font-bold":
              variant === "whiteBackground",
          })}>
          View all
        </a>
      </div>

      <div
        className={clsx({
          "": true,
          "flex items-center justify-center gap-8":
            variant === "whiteBackground",
        })}>
        <span
          className={clsx({
            "h-16 w-16 rounded-full flex justify-center items-center": true,
            "bg-white": variant === "primary",
            "bg-[#e9f4e9]": variant === "whiteBackground",
          })}>
          <Icons name="children" fill="#1F8E1F" />
        </span>
        <div className="text-2xl font-black mt-2 ml-4 text-[#1F8E1F]">
          {isLoading ? <Loader className="!text-[#1F8E1F]" /> : noOfChildren}
        </div>
      </div>

      <a
        href="#"
        className={clsx({
          "text-[#1F8E1F] mt-2 font-bold inline-block": true,
          hidden: variant === "whiteBackground",
        })}>
        View all
      </a>
    </div>
  );
};

export default NoOfChildrenCard;
