import PageLayout from "@/components/Layout/PageLayout";
import React from "react";
import OnboardParentCard from "../schedules/OnboardParentCard";
import NoOfParentsCard from "@/components/parents/NoOfParentsCard";
import NoOfChildrenCard from "@/components/children/NoOfChildrenCard";
import ParentDetailCard from "@/components/parents/ParentDetailCard";

const Parent = () => {
  return (
    <PageLayout>
      <div className="flex gap-8">
        <div className="grow flex flex-col gap-6">
          <OnboardParentCard
            variant="secondary"
            additionalClassname="flex p-6 items-start"
          />
          <ParentDetailCard />
        </div>
        <div className="w-[20%]">
          <NoOfParentsCard />
          <NoOfChildrenCard />
        </div>
      </div>
    </PageLayout>
  );
};

export default Parent;
