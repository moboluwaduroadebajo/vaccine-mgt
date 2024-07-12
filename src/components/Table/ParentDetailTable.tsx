import React, { useEffect, useMemo, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Icons } from "../icons";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { UserEntityType } from "@/type/account.type";
import { ParentDataType } from "@/type/user.type";
import ParentDetailModal from "../Modals/ParentDetailModal";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Loader from "../utilities/Loader";
import Paginator from "./Paginator";

const ParentDetailTable = () => {
  const [parentData, setParentData] = useState<ParentDataType[]>([]);
  const [selectedParent, setSelectedParent] = useState<ParentDataType>();
  const [openParentModal, setOpenParentModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const router = useRouter();

  useMemo(() => {
    const getParentDetails = async () => {
      try {
        setIsLoading(true);
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        const response = await axios.get(
          `${baseURL}/immuno/parents/search?size=${itemsPerPage}&page=${
            currentPage - 1
          }&search=${searchKey}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        setParentData(response.data.data.content);
        setTotalPages(response.data.data.page.totalPages);
        if (currentPage > response.data.data.page.totalPages) {
          setCurrentPage(response.data.data.page.totalPages);
        }
        setIsLoading(false);
      } catch (err) {
        const error = err as AxiosError<UserEntityType>;
        console.error(
          "Error fetching parent details:",
          error.response?.data.errors
        );
        if (error.response?.status === 401) {
          window.localStorage.removeItem("token");
          router.push("/login");
        }
      }
      setIsLoading(false);
    };
    getParentDetails();
  }, [itemsPerPage, currentPage, searchKey]);

  const handleClick = (parent: ParentDataType) => {
    setSelectedParent(parent);
    setOpenParentModal(true);
  };

  const columnHelper = createColumnHelper<ParentDataType>();

  const columns = [
    columnHelper.accessor("firstName", {
      header: "Name",
      cell: (props) => {
        return (
          <p className="font-semibold sm:text-base text-sm max-w-[115px]">{`${props.row.original.firstName}  ${props.row.original.lastName}`}</p>
        );
      },
    }),

    columnHelper.accessor("email", {
      header: () => <p className="text-center">Contact</p>,
      cell: (props) => {
        return (
          <p className="font-light text-center sm:text-base text-xs">{`${props.row.original.email} / ${props.row.original.phoneNumber}`}</p>
        );
      },
    }),
    columnHelper.accessor("children", {
      header: () => <p className="text-end">No of Children</p>,
      cell: (props) => {
        return (
          <p className="font-light text-[#1F8E1F] text-end sm:text-base text-sm">{`${
            props.row.original.children.length === 0
              ? "No"
              : props.row.original.children.length
          } ${
            props.row.original.children.length > 1 ? "children" : "child"
          }`}</p>
        );
      },
    }),
  ];

  const table = useReactTable({
    data: parentData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col lg:w-[75%]">
      <div className="grow bg-white rounded-2xl">
        <div className="flex flex-col shadow-md md:p-8 p-4 sticky top-0 rounded-2xl bg-white">
          <div className="flex justify-between gap-8 items-center">
            <div>
              <p className="font-poppins font-semibold md:text-2xl text-lg">
                Parents
              </p>
            </div>

            <div className="flex items-center md:justify-center justify-end sm:gap-8 gap-4">
              <BiMenuAltLeft fontSize={24} />
              <div className="relative">
                <div className="absolute top-1/2 right-6 -translate-y-1/2 ">
                  {isLoading ? (
                    <Loader className="!text-[#1F8E1F]" />
                  ) : (
                    <Icons
                      name="search"
                      fill="#1F8E1F"
                      width={16}
                      height={16}
                    />
                  )}
                </div>

                <input
                  type="text"
                  placeholder="Search"
                  value={searchKey}
                  onChange={(e) => setSearchKey(e.target.value)}
                  className="focus:outline-none active:outline-none h-10 md:w-96 w-full px-6 rounded-full border border-[#1F8E1F]"
                />
              </div>
            </div>
          </div>
        </div>

        <table className="w-full table-content large:table-auto table-fixed">
          <thead className="font-semibold text-xl">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className="text-[#1F8E1F]" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-8 large:px-16 md:px-8 px-4 text-start bg-[#f4f9f4]">
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
            {parentData.length === 0 ? (
              <tr className="w-full">
                <td />
                <td className="p-8 font-bold">No Record Found</td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="cursor-pointer hover:rounded-2xl font-poppins"
                  onClick={() => handleClick(row.original)}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="large:px-16 md:px-8 px-4 py-8 h-[70px] border-b max-w-[300px]">
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

        <ParentDetailModal
          selectedParent={selectedParent}
          isOpen={openParentModal}
          setIsOpen={() => setOpenParentModal(!openParentModal)}
        />
      </div>

      <Paginator
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPage={totalPages}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={setItemsPerPage}
      />
    </div>
  );
};

export default ParentDetailTable;
