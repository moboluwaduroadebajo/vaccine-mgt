import PageLayout from "@/components/Layout/PageLayout";
import React from "react";
import OnboardParentCard from "../schedules/OnboardParentCard";
import NoOfChildrenCard from "@/components/children/NoOfChildrenCard";
import NoOfParentsCard from "@/components/parents/NoOfParentsCard";
import ChildrenDetailTable from "@/components/Table/ChildrenDetailTable";

const Children = () => {
  return (
    <PageLayout>
      <div className="flex gap-8 w-full">
        <ChildrenDetailTable />
        <div className="flex flex-col gap-8 w-[25%]">
          <OnboardParentCard
            additionalClassname="h-[400px]"
            variant="primary"
          />
          <NoOfParentsCard />
          <NoOfChildrenCard variant="primary" />
        </div>
      </div>
    </PageLayout>
  );
};

export default Children;
