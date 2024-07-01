import PageLayout from "@/components/Layout/PageLayout";
import ChildProfileCard from "@/components/children/ChildProfileCard";
import ImmunizationHistory from "@/components/children/ImmunizationHistory";
import ParentDetailCard from "@/components/parents/ParentDetailCard";
import { ImmunizationType } from "@/type/immunization.types";
import { ChildrenDataType } from "@/type/user.type";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ChildProfile = () => {
  const [selectedChild, setSelectedChild] = useState<ChildrenDataType>();

  const [immunizations, setImmunizations] = useState<ImmunizationType[]>([]);
  const [pendingVaccine, setPendingVaccine] = useState([]);
  const [completedVaccine, setCompletedVaccine] = useState([]);

  const router = useRouter();
  const { id } = router.query;
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

  useEffect(() => {
    const getChildData = async () => {
      try {
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        const response = await axios.get(`${baseURL}/immuno/child/${id}`, {
          headers: {
            Authorization: token,
          },
        });
        // console.log(response.data);
        setSelectedChild(response.data.data);
        setImmunizations(response.data.data.immunizations);
      } catch (error) {
        console.log(error);
      }
    };
    getChildData();
  }, []);
  return (
    <PageLayout>
      <div className="flex flex-col gap-8">
        {/* <div className="grow flex flex-col gap-8">
        <ChildProfileCard />
        <ImmunizationHistory />
      </div>
      <div className="w-[30%]">
        <ParentDetailCard />
      </div> */}

        <div className="flex gap-8 w-full">
          <ChildProfileCard selectedChild={selectedChild} />
          <ParentDetailCard childData={selectedChild} />
        </div>
        <ImmunizationHistory
          childData={selectedChild}
          immunizationList={immunizations}
        />
      </div>
    </PageLayout>
  );
};

export default ChildProfile;
