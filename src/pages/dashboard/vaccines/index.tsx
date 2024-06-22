import PageLayout from "@/components/Layout/PageLayout";
import AddNewVaccine from "@/components/vaccines/AddNewVaccine";
import ExistingVaccinesTable from "@/components/vaccines/ExistingVaccinesTable";
import NoofVaccines from "@/components/vaccines/NoofVaccines";
import React from "react";

const Vaccines = () => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <div className="flex1 w-3/4 flex flex-col gap-8 h-screen">
            <AddNewVaccine />
            <ExistingVaccinesTable />
          </div>
          <NoofVaccines />
        </div>
      </div>
    </PageLayout>
  );
};

export default Vaccines;
