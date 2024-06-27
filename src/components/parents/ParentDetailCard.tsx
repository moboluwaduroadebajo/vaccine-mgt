import React, { useEffect, useState } from "react";
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
import Paginator from "../Table/Paginator";

const ParentDetailCard = () => {
  const [parentData, setParentData] = useState<ParentDataType[]>([]);
  const [selectedParent, setSelectedParent] = useState<ParentDataType>();
  const [openParentModal, setOpenParentModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const router = useRouter();

  useEffect(() => {
    const getParentDetails = async () => {
      try {
        setIsLoading(true);
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        const response = await axios.get(
          `${baseURL}/immuno/parents/search?size=50&search=${searchKey}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        setParentData(response.data.data.content);
        setIsLoading(false);
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
      setIsLoading(false);
    };
    getParentDetails();
  }, [searchKey, baseURL]);

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
          <p className="font-semibold max-w-[115px]">{`${props.row.original.firstName}  ${props.row.original.lastName}`}</p>
        );
      },
    }),

    columnHelper.accessor("email", {
      header: "Contact",
      cell: (props) => {
        return (
          <p className="font-light">{`${props.row.original.email} / ${props.row.original.phoneNumber}`}</p>
        );
      },
    }),
    columnHelper.accessor("children", {
      header: "No of Children",
      cell: (props) => {
        return (
          <p className="font-light text-[#1F8E1F]">{`${
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
    <>
      <div className="grow bg-white rounded-2xl">
        <div className="flex flex-col shadow-md p-8 sticky top-0 rounded-2xl bg-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-poppins font-semibold text-2xl">Parents</p>
            </div>

            <div className="flex items-center justify-center gap-8">
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
                  className="focus:outline-none active:outline-none h-10 w-96 px-6 rounded-full border border-[#1F8E1F]"
                />
              </div>
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
                  onClick={() => handleClick(row.original)}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-16 py-8 h-[70px] border-b max-w-[300px]">
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

      <Paginator />
    </>
  );
};

export default ParentDetailCard;
