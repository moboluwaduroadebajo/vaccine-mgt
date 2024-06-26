import PageLayout from "@/components/Layout/PageLayout";
import ChildrenDetailCard from "@/components/children/ChildrenDetailCard";
import React from "react";
import OnboardParentCard from "../schedules/OnboardParentCard";
import NoOfChildrenCard from "@/components/children/NoOfChildrenCard";
import NoOfParentsCard from "@/components/parents/NoOfParentsCard";

const Children = () => {
  return (
    <PageLayout>
      <div className="flex gap-8 w-full">
        <ChildrenDetailCard />
        <div className="flex flex-col gap-8 w-[25%]">
          <OnboardParentCard
            additionalClassname="h-[400px]"
            variant="primary"
          />
          <NoOfParentsCard />
          <NoOfChildrenCard />
        </div>
      </div>
    </PageLayout>
  );
};

export default Children;
