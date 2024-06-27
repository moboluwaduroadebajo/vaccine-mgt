import React from "react";
import Modal from "./Modal";
import { ArrowLeft } from "react-feather";
import InputField from "../FormFields/InputField";
import DatePickerInput from "../FormFields/DatePickerInput";
import Button from "../utilities/Button";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";
import { ParentDataType } from "@/type/user.type";
import { UserEntityType } from "@/type/account.type";
import { useRouter } from "next/router";

interface IProps {
  isOpen: boolean;
  setIsOpen: (arg: any) => void;
  parentId?: string;
}

const AddNewChildModal = ({ isOpen, setIsOpen, parentId }: IProps) => {
  const closeModal = () => setIsOpen(!isOpen);
  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: new Date(),
    },
    onSubmit: async (values) => {
      try {
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        await axios.post<ParentDataType>(
          `${baseURL}/immuno/parent/${parentId}/child`,
          values,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        closeModal();
      } catch (err) {
        const error = err as AxiosError<UserEntityType>;
        console.error("Error adding new child:", error.response?.data.errors);
        if (error.response?.status === 403) {
          window.localStorage.removeItem("token");
          router.push("/login");
        }
      }
    },
  });
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className="flex flex-col">
        <div className="flex flex-col gap-8 font-poppins mb-20">
          <p
            className="flex items-center gap-4 cursor-pointer hover:text-green-700"
            onClick={() => setIsOpen(false)}>
            <ArrowLeft color="#1F8E1F" />
            Back
          </p>

          <p className="text-2xl font-semibold">Onboard a Child</p>
        </div>

        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={formik.handleSubmit}>
          <InputField
            name="firstName"
            value={formik.values.firstName}
            label="First Name"
            placeholder="Enter first name"
            onChange={formik.handleChange}
          />

          <InputField
            name="lastName"
            value={formik.values.lastName}
            label="Last Name"
            placeholder="Enter last name"
            onChange={formik.handleChange}
          />

          <InputField
            name="gender"
            value={formik.values.gender}
            label="Gender"
            placeholder="Gender"
            onChange={formik.handleChange}
          />

          <DatePickerInput
            label="Date of Birth"
            value={formik.values.dateOfBirth}
            onChange={(val) => formik.setFieldValue("dateOfBirth", val)}
          />

          <Button
            label="Onboard"
            variant="primary"
            type="submit"
            loading={formik.isSubmitting}
          />

          <p className="flex items-center justify-center text-[#1F8E1F] font-poppins font-semibold">
            Powered by{" "}
            <span className=" italic font-extralight ml-1.5">Hacey</span>
          </p>
        </form>
      </div>
    </Modal>
  );
};

export default AddNewChildModal;
