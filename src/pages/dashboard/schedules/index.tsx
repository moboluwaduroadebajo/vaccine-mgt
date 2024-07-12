import PageLayout from "@/components/Layout/PageLayout";
import ScheduleCard from "@/components/schedules/ScheduleCard";
import React, { useState, useEffect } from "react";
import DailyScheduleCard from "./DailyScheduleCard";
import OnboardParentCard from "./OnboardParentCard";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";

const Schedules = () => {
  const breadcrumbs = [{ name: "Schedules" }];
  const start = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(start.getDate() + 1);
  const nextTomorrow = new Date();
  nextTomorrow.setDate(start.getDate() + 2);

  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

  const [countToday, setCountToday] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImminentImmunizations = async () => {
      try {
        setIsLoading(true);
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        const response = await axios.get(
          `${baseURL}/immuno/pending/today/count`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        setCountToday(response.data.data);
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
    <PageLayout breadcrumbs={breadcrumbs}>
      <div className="flex flex-col gap-8">
        <div className="flex lg:flex-row flex-col gap-8 w-full">
          <ScheduleCard todayCount={countToday} />
          <OnboardParentCard
            additionalClassname="lg:w-[30%]"
            variant="primary"
          />
        </div>
        <div className="bg-white rounded-2xl p-5 font-semibold md:text-2xl text-lg font-poppins">
          Daily Immunization Schedules
        </div>
        <div className="flex gap-8 overflow-x-auto w-full h-full scroll-smooth">
          <DailyScheduleCard targetDate={start.toISOString().split("T")[0]} />
          <DailyScheduleCard
            targetDate={tomorrow.toISOString().split("T")[0]}
          />
          <DailyScheduleCard
            targetDate={nextTomorrow.toISOString().split("T")[0]}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Schedules;
