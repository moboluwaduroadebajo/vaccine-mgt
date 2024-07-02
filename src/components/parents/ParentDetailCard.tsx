import React, { useEffect, useState } from "react";
import avatar from "@/assets/avatar.png";
import Image from "next/image";
import { BsFillTelephoneFill, BsPlusCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import OtherChildrenCard from "../children/OtherChildrenCard";
import { ChildrenDataType, ParentDataType } from "@/type/user.type";
import axios from "axios";
import { set } from "date-fns";
import AddNewChildModal from "../Modals/AddNewChildModal";

interface IProps {
  childData?: ChildrenDataType;
}

const ParentDetailCard = ({ childData }: IProps) => {
  const childID = childData?.id;
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

  const [allChildren, setAllChildren] = useState<ChildrenDataType[]>([]);
  const [otherChildren, setOtherChildren] = useState<ChildrenDataType[]>([]);
  const [addchildModal, setAddChildModal] = useState(false);

  useEffect(() => {
    const getOtherChildren = async () => {
      const parentId = childData?.parent.id;
      try {
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";

        const response = await axios.get(
          `${baseURL}/immuno/parent?id=${parentId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response.data.data);
        setAllChildren(response.data.data.children);
        if (allChildren) {
          const otherChildren = allChildren.filter(
            (children) => children.id != childID
          );
          console.log(otherChildren);
          setOtherChildren(otherChildren);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getOtherChildren();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="bg-[#D9ECD9] rounded-2xl p-8">
        <div className="flex flex-col items-center justify-center gap-4 mb-10">
          <Image alt="parent-image" src={avatar} />
          <div className=" font-poppins text-center">
            <p className="text-[#1F8E1F] font-semibold">
              {`${childData?.parent.firstName} ${childData?.parent.lastName}`}
            </p>
            <p className="text-[#828e82]">
              {childData?.parent.title === "Mr"
                ? "Dad"
                : childData?.parent.title === "Mrs"
                ? "Mom"
                : "Parent"}{" "}
              | {childData?.parent.age}
            </p>
          </div>
        </div>

        <ul>
          <li className="flex items-center gap-2 pb-5 font-poppins">
            <span className="flex items-center justify-center rounded-full w-10 h-10 bg-white text-2xl text-[#1F8E1F]">
              <MdEmail className="" />
            </span>
            {childData?.parent.email}
          </li>
          <li className="flex items-center gap-2 pb-5 font-poppins">
            <span className="flex items-center justify-center rounded-full w-10 h-10 bg-white text-2xl text-[#1F8E1F]">
              <BsFillTelephoneFill />
            </span>
            {childData?.parent.phoneNumber}
          </li>
        </ul>
      </div>

      {/* <OtherChildrenCard /> */}
      <div className="flex flex-col items-center justify-between gap-10 px-20 py-8 font-poppins bg-white rounded-2xl">
        <p className="font-bold text-2xl">Other Children</p>

        {otherChildren.length === 0 ? (
          <p className="font-bold">No Other Child available</p>
        ) : (
          otherChildren.map((child) => (
            <p key={child.id} className="font-medium">
              {child.firstName}
            </p>
          ))
        )}

        <BsPlusCircleFill
          className="text-[#1F8E1F] text-4xl hover:text-[#6ba96b] cursor-pointer"
          onClick={() => setAddChildModal(!addchildModal)}
        />
      </div>

      <AddNewChildModal
        isOpen={addchildModal}
        setIsOpen={() => {
          setAddChildModal(!addchildModal);
        }}
      />
    </div>
  );
};

export default ParentDetailCard;
