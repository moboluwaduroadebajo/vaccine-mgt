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
import axios from "axios";
import { headers } from "next/headers";
import { useRouter } from "next/router";
import Loader from "@/components/utilities/Loader";

const Login = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${baseURL}/auth/login`, values, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          localStorage.setItem("token", response.data.data.accessToken);
          router.push("/dashboard");
        } else {
          console.log(response.data.errors[0]);
        }
      } catch (error: any) {
        if (error.response) {
          console.log(error.response.data.errors[0]);
        }
      }
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
              name="username"
              // isRequired
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username ? formik.errors.username : ""}
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

            <button className="flex justify-center items-center rounded-[80px] w-full mt-10 h-12 text-white font-poppins bg-[#1F8E1F]">
              {formik.isSubmitting ? <Loader /> : "Login"}
            </button>
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
