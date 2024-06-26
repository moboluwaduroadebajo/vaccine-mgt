import HomeSchedules from "@/components/dashboard/HomeSchedules";
import PageLayout from "@/components/Layout/PageLayout";
import AddNewVaccine from "@/components/vaccines/AddNewVaccine";
import React from "react";
import OnboardParentCard from "./schedules/OnboardParentCard";
import NoOfChildrenCard from "@/components/children/NoOfChildrenCard";
import DashboardParentsList from "@/components/dashboard/DashboardParentsList";
import PendingVaccinesToday from "@/components/Table/PendingVaccinesToday";

const Dashboard = () => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8 w-full">
          <HomeSchedules />
          <AddNewVaccine />
        </div>

        <div className="flex gap-8 w-full">
          <OnboardParentCard
            variant="secondary"
            additionalClassname="w-[60%]"
          />
          <div className="w-[38%]">
            <NoOfChildrenCard variant="whiteBackground" />
          </div>
        </div>

        <div className="flex gap-8 w-full">
          <PendingVaccinesToday />
          <DashboardParentsList />
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
