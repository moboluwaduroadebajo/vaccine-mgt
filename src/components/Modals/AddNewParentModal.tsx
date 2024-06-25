import React from "react";
import Modal from "./Modal";
import { ArrowLeft } from "react-feather";
import InputField from "../FormFields/InputField";
import Button from "../utilities/Button";
import { useFormik } from "formik";
import { ParentDataType } from "@/type/user.type";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";

interface IProps {
  isOpen: boolean;
  setIsOpen: (arg: any) => void;
  parent?: ParentDataType | undefined;
}

const AddNewParentModal = ({ isOpen, setIsOpen, parent }: IProps) => {
  const closeModal = () => setIsOpen(!isOpen);
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      firstName: parent?.firstName,
      lastName: parent?.lastName,
      title: parent?.title,
      phoneNumber: parent?.phoneNumber,
      email: parent?.email,
    },
    onSubmit: async (values) => {
      try {
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        const response = await axios.post(`${baseURL}/immuno/parent`, values, {
          headers: {
            Authorization: token,
          },
        });

        console.log(response.data);
      } catch (err) {
        const error = err as AxiosError<Error>;
        console.error("Error fetching vaccine count:", error);
        if (error.response?.status === 403) {
          window.localStorage.removeItem("token");
          router.push("/login");
        }
      }
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className="flex flex-col text-black">
        <div className="flex flex-col gap-8 font-poppins mb-20 ">
          <p
            className="flex items-center gap-4 cursor-pointer hover:text-green-700"
            onClick={() => setIsOpen(false)}>
            <ArrowLeft color="#1F8E1F" />
            Back
          </p>

          <p className="text-2xl font-semibold">Onboard Parent</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <InputField
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <InputField
            name="lastName"
            label="Last Name"
            placeholder="Enter your first name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <InputField
            name="title"
            label="Parental Role"
            placeholder="Enter your first name"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <InputField
            name="number"
            label="Hospital Number"
            placeholder="Enter your first name"
          />

          <InputField name="dateOfBirth" label="Date of Birth" placeholder="" />

          <InputField
            name="email"
            type="email"
            label="Email Address"
            placeholder=""
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            additionalClass="text-black"
          />

          <InputField
            name="phoneNumber"
            label="Phone Number"
            placeholder=""
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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

export default AddNewParentModal;
