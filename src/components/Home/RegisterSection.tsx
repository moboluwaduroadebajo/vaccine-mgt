import React from "react";
import Image from "next/image";
import nurse from "@/assets/nurse-img.png";
import Button from "../utilities/Button";

const RegisterSection = () => {
  return (
    <div className="relative">
      <Image alt="nurse-image" src={nurse} className=" object-cover w-screen" />

      <div className="absolute md:top-[40%] md:left-[60%] top-[10%] left-[50%] max-w-[]">
        <p className="text-white font-poppins md:text-2xl text-sm md:leading-[48px] max-w-[500px] font-medium mb-8">
          Join a growing network of healthcare professionals who are
          transforming immunization management! <br />
          <span>
            {" "}
            Sign up for your free account today and experience the difference.
          </span>
        </p>

        <Button
          label="Register now"
          variant="primary"
          additionalClassname="lg:w-[400px] w-[200px] md:h-[62px] h-12"
        />
      </div>
    </div>
  );
};

export default RegisterSection;
