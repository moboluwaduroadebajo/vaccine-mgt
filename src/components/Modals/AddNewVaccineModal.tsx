"use client";

import React from "react";
import Modal from "./Modal";
import { ArrowLeft } from "react-feather";
import InputField from "../FormFields/InputField";
import Button from "../utilities/Button";
import { useFormik } from "formik";
import axios from "axios";
import CustomSelect from "../FormFields/CustomSelect";
import { adminRoute, ageTarget, dosageType, vaccineType } from "@/constants";

interface IProps {
  isOpen: boolean;
  setIsOpen: (arg: any) => void;
}

const AddNewVaccineModal = ({ isOpen, setIsOpen }: IProps) => {
  const closeModal = () => setIsOpen(!isOpen);
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

  const formik = useFormik({
    initialValues: {
      ageTarget: "",
      type: "",
      dosage: 0,
      dosageType: "",
      administerRoute: "",
      administerSite: "",
    },
    onSubmit: async (values) => {
      try {
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : "";
        const response = await axios.post(`${baseURL}/vaccine`, values, {
          headers: {
            Authorization: `${token}`,
          },
        });

        closeModal();
      } catch (error: any) {
        console.log(error.response.data);
      }
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className="flex flex-col">
        <div className="flex flex-col sm:gap-8 gap-5 font-poppins md:mb-20 mb-10">
          <p
            className="flex items-center gap-4 cursor-pointer hover:text-green-700"
            onClick={() => setIsOpen(false)}>
            <ArrowLeft color="#1F8E1F" />
            Back
          </p>

          <p className="sm:text-2xl text-lg font-semibold">New Vaccine</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <CustomSelect
            options={vaccineType}
            label="Type of Vaccine"
            name="type"
            handleOptionChange={(option) => {
              formik.setFieldValue("type", option?.value);
            }}
          />

          <CustomSelect
            options={ageTarget}
            label="Minimum target age of child"
            name="ageTarget"
            handleOptionChange={(option) => {
              formik.setFieldValue("ageTarget", option?.value);
            }}
          />

          <InputField
            type="number"
            name="dosage"
            label="Dosage"
            placeholder=""
            value={formik.values.dosage}
            onChange={formik.handleChange}
          />

          <CustomSelect
            options={dosageType}
            label="Dosage Type"
            name="dosageType"
            handleOptionChange={(option) => {
              formik.setFieldValue("dosageType", option?.value);
            }}
          />

          <CustomSelect
            options={adminRoute}
            label="Route of Administration"
            name="administerRoute"
            handleOptionChange={(option) => {
              formik.setFieldValue("administerRoute", option?.value);
            }}
          />

          <InputField
            name="administerSite"
            label="Site of Administration"
            placeholder=""
            value={formik.values.administerSite}
            onChange={formik.handleChange}
          />

          <Button
            label="Create new vaccine"
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

export default AddNewVaccineModal;
