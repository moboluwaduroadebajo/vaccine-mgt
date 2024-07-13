import HomeSchedules from "@/components/dashboard/HomeSchedules";
import PageLayout from "@/components/Layout/PageLayout";
import AddNewVaccine from "@/components/vaccines/AddNewVaccine";
import React from "react";
import OnboardParentCard from "./schedules/OnboardParentCard";
import NoOfChildrenCard from "@/components/children/NoOfChildrenCard";
import PendingVaccinesToday from "@/components/Table/PendingVaccinesToday";
import DashboardParentsTable from "@/components/Table/DashboardParentsTable";

const breadcrumbs = [{ name: "Home" }];

const Dashboard = () => {
  return (
    <PageLayout breadcrumbs={breadcrumbs}>
      <div className="flex flex-col sm:gap-8 gap-5">
        <div className="flex lg:flex-row flex-col sm:gap-8 gap-5 w-full">
          <HomeSchedules />
          <AddNewVaccine />
        </div>

        <div className="flex lg:flex-row flex-col sm:gap-8 gap-5 w-full">
          <OnboardParentCard
            variant="secondary"
            additionalClassname="lg:w-[60%]"
          />
          <div className="lg:w-[38%]">
            <NoOfChildrenCard variant="whiteBackground" />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col sm:gap-8 gap-5 w-full">
          <PendingVaccinesToday />
          <DashboardParentsTable />
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
