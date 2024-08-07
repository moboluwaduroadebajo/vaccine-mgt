import React, { useEffect, useState } from "react";
import MenuTab from "../Tabs/MenuTab";
import { useRouter } from "next/router";
import ImmunoCompletedTable from "../Table/ImmunoCompletedTable";
import ImmunoPendingTable from "../Table/ImmunoPendingTable";
import { ChildrenDataType } from "@/type/user.type";
import { ImmunizationType } from "@/type/immunization.types";
import { ExistingVaccineType } from "@/type/vaccines.type";

interface ImmunoProps {
  immunizationList?: ImmunizationType[];
}

const ImmunizationHistory = ({ immunizationList }: ImmunoProps) => {
  const menuTab = [
    {
      label: "Completed",
      url: "completed",
    },
    {
      label: "Pending",
      url: "pending",
    },
  ];
  const router = useRouter();
  const { tab } = router.query;

  const selectedTab = tab || menuTab[0].url;

  const [pendingVaccine, setPendingVaccine] = useState<ImmunizationType[]>([]);
  const [completedVaccine, setCompletedVaccine] = useState<ImmunizationType[]>(
    []
  );

  useEffect(() => {
    if (immunizationList) {
      const administered = immunizationList.filter(
        (immunization) => immunization.administered
      );
      const unadministered = immunizationList.filter(
        (immunization) => !immunization.administered
      );
      setCompletedVaccine(administered);
      setPendingVaccine(unadministered);
    }
  }, [immunizationList]);

  return (
    <div className="flex flex-col gap-8 font-poppins">
      <div className="p-6 bg-white rounded-2xl shadow-md">
        <p className="font-semibold md:text-2xl text-lg">
          Immunization History
        </p>
      </div>

      <div className="bg-white shadow-md rounded-2xl h-[600px] overflow-auto">
        <div className="sticky top-0 bg-white z-10 p-8">
          <MenuTab tabs={menuTab} />
        </div>

        {selectedTab === "completed" && (
          <ImmunoCompletedTable completedVaccine={completedVaccine} />
        )}
        {selectedTab === "pending" && (
          <ImmunoPendingTable pendingVaccines={pendingVaccine} />
        )}
      </div>
    </div>
  );
};

export default ImmunizationHistory;
