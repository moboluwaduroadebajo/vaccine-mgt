import Image from "next/image";
import React from "react";
import LoginImage from "@/assets/login_img.png";
import { ArrowLeft } from "react-feather";
import InputField from "@/components/FormFields/InputField";
import PasswordField from "@/components/FormFields/PasswordField";
import Button from "@/components/utilities/Button";
import Logo from "@/../public/logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Please enter a valid email"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="flex bg-loginBg bg-no-repeat bg-right lg:bg-contain bg-cover h-screen">
      <div className="absolute top-0 bottom-0 lg:left-[50%] left-0 right-0 bg-[#E1F0E1] opacity-90 z-10" />
      <div className="flex-1 hidden lg:block">
        <Image alt="login" src={LoginImage} className="h-screen w-full" />
      </div>

      <div className="flex-1 flex flex-col justify-center items-center w-full z-10">
        <div className="lg:w-2/5 md:w-1/2 w-[80%]">
          <Link href="/">
            <p className="flex items-center gap-4 cursor-pointer hover:text-green-700">
              <ArrowLeft color="#1F8E1F" />
              Back
            </p>
          </Link>

          <p className="font-poppins font-semibold text-2xl my-12">Login</p>

          <form onSubmit={formik.handleSubmit}>
            <InputField
              type="email"
              placeholder="Enter your email address"
              label="Email address"
              name="email"
              isRequired
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email ? formik.errors.email : ""}
            />

            <PasswordField
              name="password"
              placeholder="Enter your password"
              label="Password"
              isRequired
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password ? formik.errors.password : ""}
            />

            <Button
              type="submit"
              label="Login"
              variant="primary"
              additionalClassname="w-full mt-10"
            />
          </form>

          <p className="flex gap-2 justify-center items-center mt-8 text-[#1F8E1F] font-poppins font-semibold">
            Powered by{" "}
            <span>
              <Image alt="logo" src={Logo} className="w-[60%]" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
