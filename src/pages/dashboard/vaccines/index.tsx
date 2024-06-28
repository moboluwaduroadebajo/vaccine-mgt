import PageLayout from "@/components/Layout/PageLayout";
import AddNewVaccine from "@/components/vaccines/AddNewVaccine";
import ExistingVaccinesTable from "@/components/Table/ExistingVaccinesTable";
import NoofVaccines from "@/components/vaccines/NoofVaccines";
import React from "react";

const Vaccines = () => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-8 h-">
        <div className="flex gap-8 w-full">
          <AddNewVaccine />
          <NoofVaccines />
        </div>
        <ExistingVaccinesTable />
      </div>
    </PageLayout>
  );
};

export default Vaccines;
