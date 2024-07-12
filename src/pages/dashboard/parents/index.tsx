import PageLayout from "@/components/Layout/PageLayout";
import React from "react";
import OnboardParentCard from "../schedules/OnboardParentCard";
import NoOfParentsCard from "@/components/parents/NoOfParentsCard";
import NoOfChildrenCard from "@/components/children/NoOfChildrenCard";
import ParentDetailTable from "@/components/Table/ParentDetailTable";

const Parent = () => {
  const breadcrumbs = [{ name: "Parents" }];
  return (
    <PageLayout breadcrumbs={breadcrumbs}>
      <div className="flex flex-col gap-8">
        <div className="flex lg:flex-row flex-col gap-8 w-full">
          <OnboardParentCard
            variant="secondary"
            additionalClassname="lg:grow h-[292px]"
          />

          <div className="lg:w-[25%]">
            <NoOfParentsCard />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse gap-8 w-full">
          <ParentDetailTable />

          <div className="lg:w-[25%]">
            <NoOfChildrenCard variant="primary" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Parent;
