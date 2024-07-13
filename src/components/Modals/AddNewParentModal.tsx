import React from "react";
import Modal from "./Modal";
import { ArrowLeft } from "react-feather";
import InputField from "../FormFields/InputField";
import Button from "../utilities/Button";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import * as Yup from "yup";
import DatePickerInput from "../FormFields/DatePickerInput";

interface IProps {
  isOpen: boolean;
  setIsOpen: (arg: any) => void;
}

const AddNewParentModal = ({ isOpen, setIsOpen }: IProps) => {
  const closeModal = () => setIsOpen(!isOpen);
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      title: "",
      phoneNumber: "",
      email: "",
      dateOfBirth: new Date(),
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required!"),
      firstName: Yup.string().required("First name is required!"),
      lastName: Yup.string().required("Last name is required!"),
      phoneNumber: Yup.string()
        .required("phone number is required!")
        .min(11, "Phone number should be at least 11 digits!")
        .max(2147483647, "phone number is too long!"),
      email: Yup.string()
        .required("Email is required!")
        .email("Invalid email!"),
    }),
    onSubmit: async (values) => {
      try {
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        await axios.post(`${baseURL}/immuno/parent`, values, {
          headers: {
            Authorization: token,
          },
        });
        closeModal();
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
        <div className="flex flex-col sm:gap-8 gap-5 font-poppins md:mb-20 mb-10">
          <p
            className="flex items-center gap-4 cursor-pointer hover:text-green-700"
            onClick={() => setIsOpen(false)}>
            <ArrowLeft color="#1F8E1F" />
            Back
          </p>

          <p className="sm:text-2xl text-lg font-semibold">Onboard Parent</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <InputField
            name="title"
            label="Title"
            placeholder="Mr/Mrs"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title ? formik.errors.title : ""}
          />

          <InputField
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName ? formik.errors.firstName : ""}
          />

          <InputField
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName ? formik.errors.lastName : ""}
          />

          <DatePickerInput
            label="Date of birth"
            value={formik.values.dateOfBirth}
            onChange={(val) => formik.setFieldValue("dateOfBirth", val)}
          />

          <InputField
            name="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email ? formik.errors.email : ""}
          />

          <InputField
            name="phoneNumber"
            type="number"
            label="Phone Number"
            placeholder="Phone number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNumber ? formik.errors.phoneNumber : ""}
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
