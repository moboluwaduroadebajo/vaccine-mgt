import { ImmunizationRecordType } from "@/type/immunization.types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const PendingVaccinesToday = () => {
  const [pendingVaccines, setPendingVaccines] = useState<
    ImmunizationRecordType[]
  >([]);

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const router = useRouter();

  useEffect(() => {
    const getChildrenDetails = async () => {
      try {
        //   setIsLoading(true);
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        const response = await axios.get(`${baseURL}/immuno/pending/today`, {
          headers: {
            Authorization: token,
          },
        });

        //   setIsLoading(false);
        console.log(response.data.data);
        setPendingVaccines(response.data.data.content);
      } catch (err) {
        const error = err as AxiosError<Error>;
        console.error("Error fetching children:", error);
        if (error.response?.status === 403) {
          window.localStorage.removeItem("token");
          router.push("/login");
        }
      }
      // setIsLoading(false);
    };
    getChildrenDetails();
  }, []);

  const columnHelper = createColumnHelper<ImmunizationRecordType>();

  const columns = [
    columnHelper.accessor("child.firstName", {
      header: "Name",
      cell: (props) => {
        return (
          <p className="font-semibold max-w-[115px]">{`${props.row.original.child.firstName}  ${props.row.original.child.lastName}`}</p>
        );
      },
    }),

    columnHelper.accessor("immunization.vaccine", {
      header: "Vaccines",
      cell: (props) => {
        return <p>{`${props.row.original.immunization.vaccine.type}`}</p>;
      },
    }),

    columnHelper.accessor("id", {
      header: () => {
        return <p className="text-end">Status</p>;
      },
      cell: () => (
        <p className="px-3 py-1 rounded-full text-sm bg-[#eed8d4] text-[#C91919]">
          Pending 0/1
        </p>
      ),
    }),
  ];

  const table = useReactTable({
    data: pendingVaccines,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col grow">
      <div className="bg-white p-8 font-poppins rounded-2xl shadow-md mb-8">
        <p className="font-semibold text-2xl"> Today</p>
      </div>

      <div className="bg-white font-poppins rounded-2xl shadow-md">
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
            {pendingVaccines.length === 0 ? (
              <tr className="w-full">
                <td />
                <td className="p-8 font-bold">No Pending Vaccines Today</td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="cursor-pointer hover:rounded-2xl font-poppins">
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
    </div>
  );
};

export default PendingVaccinesToday;
