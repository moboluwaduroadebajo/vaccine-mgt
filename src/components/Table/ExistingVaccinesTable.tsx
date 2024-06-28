"use client";
import React, { useEffect, useState } from "react";
import { Icons } from "../icons";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { BiMenuAltLeft } from "react-icons/bi";
import axios, { AxiosError } from "axios";
import Loader from "@/components/utilities/Loader";
import { ExistingVaccineType } from "@/type/vaccines.type";
import { useRouter } from "next/router";
import Paginator from "./Paginator";

const ExistingVaccinesTable = () => {
  const [vaccines, setVaccines] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const router = useRouter();

  useEffect(() => {
    const getVaccines = async () => {
      try {
        setIsLoading(true);
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        const response = await axios.get(
          `${baseURL}/vaccine?size=${itemsPerPage}&page=${
            currentPage - 1
          }&search=${searchKey}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        setVaccines(response.data.data.content);
        setTotalPages(response.data.data.page.totalPages);
        if (currentPage > response.data.data.page.totalPages) {
          setCurrentPage(response.data.data.page.totalPages);
        }

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
  }, [itemsPerPage, currentPage, searchKey]);

  const columnHelper = createColumnHelper<ExistingVaccineType>();

  const columns = [
    columnHelper.accessor("ageTarget", {
      header: () => "Age Target",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("type", {
      header: () => "Type of Vaccine",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor((row) => `${row.dosage} ${row.dosageType}`, {
      id: "Dosage",
    }),

    columnHelper.accessor("routeOfAdministration", {
      header: () => "Route of Administration",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("site", {
      header: () => "Site of Administration",
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data: vaccines,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="bg-white h-[600px] w-full rounded-2xl overflow-y-auto font-poppins">
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

        <table className="w-full table-content">
          <thead className="font-semibold text-xl">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className="text-[#1F8E1F]" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-8 px-16 text-start bg-[#f4f9f4]">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {vaccines.length === 0 ? (
              <tr className="w-full">
                <td />
                <td className="p-8 font-bold">No Vaccines Available</td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="cursor-pointer hover:rounded-2xl">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-16 py-8 h-[70px] border-b max-w-[300px] ">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Paginator
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPage={totalPages}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={setItemsPerPage}
      />
    </>
  );
};

export default ExistingVaccinesTable;
