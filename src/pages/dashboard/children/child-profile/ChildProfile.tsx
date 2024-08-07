import PageLayout from "@/components/Layout/PageLayout";
import ChildProfileCard from "@/components/children/ChildProfileCard";
import ImmunizationHistory from "@/components/children/ImmunizationHistory";
import ParentDetailCard from "@/components/parents/ParentDetailCard";
import { ImmunizationType } from "@/type/immunization.types";
import { ChildrenDataType } from "@/type/user.type";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const breadcrumbs = [
  { name: "Children", href: "/dashboard/children" },
  { name: "Child" },
];
const ChildProfile = () => {
  const [selectedChild, setSelectedChild] = useState<ChildrenDataType>();
  const [immunizations, setImmunizations] = useState<ImmunizationType[]>([]);

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
        setSelectedChild(response.data.data);
        setImmunizations(response.data.data.immunizations);
      } catch (error) {
        console.log(error);
      }
    };
    getChildData();
  }, [id, baseURL]);
  return (
    selectedChild && (
      <PageLayout breadcrumbs={breadcrumbs}>
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="grow flex flex-col gap-8 w-[]">
            <ChildProfileCard selectedChild={selectedChild} />
            <ImmunizationHistory immunizationList={immunizations} />
          </div>
          <div className="lg:w-[30%]">
            <ParentDetailCard childData={selectedChild as ChildrenDataType} />
          </div>
        </div>
      </PageLayout>
    )
  );
};

export default ChildProfile;
