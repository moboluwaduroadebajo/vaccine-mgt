import React, { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Icons } from "../icons";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { ChildrenDataType } from "@/type/user.type";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Loader from "../utilities/Loader";
import Paginator from "./Paginator";
import { useSearchParams } from "next/navigation";
import ChildProfileModal from "../Modals/ChildProfileModal";

const ChildrenDetailTable = () => {
  const [allChildren, setAllChildren] = useState<ChildrenDataType[]>([]);
  // const [selectedChild, setSelectedChild] = useState<ChildrenDataType>();
  const [isLoading, setIsLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");
  // const [openModal, setOpenModal] = useState(false);

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const router = useRouter();

  // const handleClick = (child: ChildrenDataType) => {
  //   setSelectedChild(child);
  //   setOpenModal(!openModal);
  // };

  const handleChildClick = (child: ChildrenDataType) => {
    router.push({
      pathname: "/dashboard/children/child-profile",
      query: { id: child.id },
    });
  };

  useEffect(() => {
    const getChildrenDetails = async () => {
      try {
        setIsLoading(true);
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        const response = await axios.get(
          `${baseURL}/immuno/children?size=${itemsPerPage}&page=${
            currentPage - 1
          }&search=${searchKey}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setAllChildren(response.data.data.content);
        setTotalPages(response.data.data.page.totalPages);
        if (currentPage > response.data.data.page.totalPages) {
          setCurrentPage(response.data.data.page.totalPages);
        }
        setIsLoading(false);
      } catch (err) {
        const error = err as AxiosError<Error>;
        console.error("Error fetching children:", error);
        if (error.response?.status === 403) {
          window.localStorage.removeItem("token");
          router.push("/login");
        }
      }
      setIsLoading(false);
    };
    getChildrenDetails();
  }, [itemsPerPage, currentPage, searchKey]);

  const columnHelper = createColumnHelper<ChildrenDataType>();

  const columns = [
    columnHelper.accessor("firstName", {
      header: "Name",
      cell: (props) => {
        return (
          <p className="font-semibold max-w-[115px]">{`${props.row.original.firstName}  ${props.row.original.lastName}`}</p>
        );
      },
    }),
    columnHelper.accessor("age", {
      header: () => <p className="text-center">Age</p>,
      cell: (props) => {
        return (
          <p className="font-light text-center">{`${props.row.original.age}`}</p>
        );
      },
    }),

    columnHelper.accessor("gender", {
      header: () => <p className="text-end">Gender</p>,
      cell: (props) => {
        return (
          <p className="font-semibold text-end text-[#1F8E1F]">{`${props.row.original.gender}`}</p>
        );
      },
    }),
  ];

  const table = useReactTable({
    data: allChildren,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="flex flex-col grow">
      <div className="h-full bg-white rounded-2xl">
        <div className="flex flex-col shadow-md p-8 sticky top-0 rounded-2xl bg-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-poppins font-semibold text-2xl">Children</p>
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
            {allChildren.length === 0 ? (
              <tr className="w-full">
                <td />
                <td className="p-8 font-bold">No Record Found</td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="cursor-pointer hover:rounded-2xl font-poppins"
                  onClick={() => handleChildClick(row.original)}>
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
      </div>
      <Paginator
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPage={totalPages}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={setItemsPerPage}
      />

      {/* <ChildProfileModal
        isOpen={openModal}
        setIsOpen={() => setOpenModal(!openModal)}
        selectedChild={selectedChild}
      /> */}
    </div>
  );
};

export default ChildrenDetailTable;
