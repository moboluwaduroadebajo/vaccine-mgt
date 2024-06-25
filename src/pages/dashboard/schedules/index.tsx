import PageLayout from "@/components/Layout/PageLayout";
import ScheduleCard from "@/components/schedules/ScheduleCard";
import React from "react";
import DailyScheduleCard from "./DailyScheduleCard";
import OnboardParentCard from "./OnboardParentCard";

const Schedules = () => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8 w-full">
          <ScheduleCard />
          <OnboardParentCard additionalClassname="w-[30%]" />
        </div>
        <div className="bg-white rounded-2xl p-5 font-semibold text-2xl font-poppins">
          Daily Immunization Schedules
        </div>
        <div className="flex gap-8 overflow-x-auto w-full h-full scroll-smooth">
          <DailyScheduleCard />
          <DailyScheduleCard />
          <DailyScheduleCard />
          <DailyScheduleCard />
          <DailyScheduleCard />
        </div>
      </div>
    </PageLayout>
  );
};

export default Schedules;
