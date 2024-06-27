import { Icons } from "@/components/icons";
import React, { useState, useEffect } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { ImmunizationRecordType } from "@/type/immunization.types";
import { getDateLabel } from "@/utils/date";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";

interface DailyScheduleCardProps {
  targetDate: Date;
}

const DailyScheduleCard: React.FC<DailyScheduleCardProps> = ({ targetDate }) => {
  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const current = new Date();
  const day = getDateLabel(current, targetDate);
  const dayString = targetDate.toISOString().split("T")[0];
  const [imminentImmunizations, setImminentImmunizations] = useState<ImmunizationRecordType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImminentImmunizations = async () => {
      try {
        setIsLoading(true);
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        const response = await axios.get(
          `${baseURL}/immuno/pending/betweenDays?startDate=${dayString}&endDate=${dayString}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        const immunizations = response.data.data.content;
        setImminentImmunizations(immunizations);
        setIsLoading(false);
      } catch (err) {
        const error = err as AxiosError<Error>;

        console.error("Error fetching imminent immunization for today:", error);
        if (error.response?.status === 403) {
          window.localStorage.removeItem("token");
          router.push("/login");
        }
      }
      setIsLoading(false);
    };
    getImminentImmunizations();
  }, [baseURL]);

  return (
    <div className="bg-white border border-[#1F8E1F] rounded-2xl min-w-[454px] h-[600px] overflow-auto">
      <div className="flex flex-col shadow-md p-4 sticky top-0 bg-white">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-poppins font-semibold text-2xl">{day}</p>
          </div>

          <div className="flex items-center gap-6 pr-6">
            <BiMenuAltLeft fontSize={24} />
            <Icons name="search" fill="#1F8E1F" />
          </div>
        </div>

        <div className="flex justify-between pt-8 pb-4 font-roboto text-[#686868]">
          <p>Name</p>
          <p>Vaccine</p>
        </div>
      </div>
      <div className=" ">
        {imminentImmunizations.map((item) => (
          <div
            key={item.id}
            className="flex justify-between py-8 px-4 hover:bg-[#f4f9f4] cursor-pointer">
            <p>{item.child.firstName} {item.child.lastName}</p>
            <p>{item.immunization.vaccine.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyScheduleCard;
