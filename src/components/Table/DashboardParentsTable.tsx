import React, { useEffect, useState } from "react";
import { Icons } from "../icons";
import { BiMenuAltLeft } from "react-icons/bi";
import { ParentDataType } from "@/type/user.type";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios, { AxiosError } from "axios";
import { UserEntityType } from "@/type/account.type";
import { useRouter } from "next/router";
import ParentDetailModal from "../Modals/ParentDetailModal";
import Paginator from "./Paginator";

const DashboardParentsTable = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const router = useRouter();

  const [parentData, setParentData] = useState<ParentDataType[]>([]);
  const [selectedParent, setSelectedParent] = useState<ParentDataType>();
  const [openParentModal, setOpenParentModal] = useState(false);
  const columnHelper = createColumnHelper<ParentDataType>();

  const [searchKey, setSearchKey] = useState("");

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getParentDetails = async () => {
      try {
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
    };
    getParentDetails();
  }, [searchKey, baseURL, itemsPerPage, currentPage]);

  const handleClick = (parent: ParentDataType) => {
    setSelectedParent(parent);
    setOpenParentModal(true);
  };

  const columns = [
    columnHelper.accessor("firstName", {
      header: "Name",
      cell: (props) => {
        return (
          <p className="font-semibold max-w-[115px]">{`${props.row.original.firstName}  ${props.row.original.lastName}`}</p>
        );
      },
    }),

    columnHelper.accessor("children", {
      header: () => {
        return <p className="text-end">No of Children</p>;
      },
      cell: (props) => {
        return (
          <p className="font-light text-[#1F8E1F] text-end">{`${
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
    <div className="flex flex-col lg:w-[38%]">
      <div className="bg-white rounded-2xl shadow-md">
        <div className="flex justify-between items-center p-8 sticky top-0">
          <div>
            <p className="font-poppins font-semibold text-2xl">Parents</p>
          </div>

          <div className="flex items-center justify-center gap-8 cursor-pointer">
            <BiMenuAltLeft fontSize={26} />
            <div className="relative">
              <Icons name="search" fill="#1F8E1F" />

              {/* <input
                type="text"
                placeholder="Search"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                className="focus:outline-none active:outline-none h-10 w-96 px-6 rounded-full border border-[#1F8E1F]"
              /> */}
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
                <td className="p-8 text-center font-bold flex justify-center items-center">
                  No Record Found
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="cursor-pointer hover:rounded-2xl font-poppins"
                  onClick={() => {
                    handleClick(row.original);
                  }}>
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

export default DashboardParentsTable;
