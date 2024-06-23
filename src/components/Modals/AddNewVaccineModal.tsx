import React, { useState } from "react";
import Modal from "./Modal";
import { ArrowLeft } from "react-feather";
import InputField from "../FormFields/InputField";
import Button from "../utilities/Button";
import { useFormik } from "formik";
import axios from "axios";

interface IProps {
  isOpen: boolean;
  //   isSubmitting: boolean;
  setIsOpen: (arg: any) => void;
  onConfirm?: () => void;
  //   icon?: React.ReactNode;
}

const AddNewVaccineModal = ({ isOpen, setIsOpen }: IProps) => {
  const closeModal = () => setIsOpen(!isOpen);
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

  const formik = useFormik({
    initialValues: {
      ageTarget: "Birth",
      type: "*BCG",
      dosage: 0,
      dosageType: "ml",
      administerRoute: "Intra dermal",
      administerSite: "string",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${baseURL}/vaccine`, values, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className="flex flex-col justify- items- m-auto ">
        <div className="flex flex-col gap-8 font-poppins mb-20">
          <p
            className="flex items-center gap-4 cursor-pointer hover:text-green-700"
            onClick={() => setIsOpen(false)}>
            <ArrowLeft color="#1F8E1F" />
            Back
          </p>

          <p className="text-2xl font-semibold">New Vaccine</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <InputField
            name="type"
            label="Type of Vacccine"
            placeholder=""
            value={formik.values.type}
            onChange={formik.handleChange}
          />

          <InputField
            name="ageTarget"
            label="Minimum target age of child"
            placeholder=""
            value={formik.values.ageTarget}
            onChange={formik.handleChange}
          />

          <InputField
            type="text"
            name="dosage"
            label="Dosage"
            placeholder=""
            value={formik.values.dosageType}
            onChange={formik.handleChange}
          />

          <InputField
            name="administerRoute"
            label="Route of Administration"
            placeholder=""
            value={formik.values.administerRoute}
            onChange={formik.handleChange}
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
