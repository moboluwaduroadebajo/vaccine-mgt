import PageLayout from "@/components/Layout/PageLayout";
import React from "react";
import OnboardParentCard from "../schedules/OnboardParentCard";
import NoOfChildrenCard from "@/components/children/NoOfChildrenCard";
import NoOfParentsCard from "@/components/parents/NoOfParentsCard";
import ChildrenDetailTable from "@/components/Table/ChildrenDetailTable";

const Children = () => {
  const breadcrumbs = [{ name: "Children" }];
  return (
    <PageLayout breadcrumbs={breadcrumbs}>
      <div className="flex lg:flex-row flex-col-reverse sm:gap-8 gap-5 w-full">
        <ChildrenDetailTable />
        <div className="flex flex-col sm:gap-8 gap-5 lg:w-[25%]">
          <OnboardParentCard
            additionalClassname="md:h-[400px]"
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
