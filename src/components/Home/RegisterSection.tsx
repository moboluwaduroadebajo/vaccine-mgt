import React from "react";
import Image from "next/image";
import nurse from "@/assets/nurse-img.png";
import Button from "../utilities/Button";

const RegisterSection = () => {
  return (
    <div className="relative">
      <Image alt="nurse-image" src={nurse} className="object-cover w-screen" />

      <div className="absolute lg:top-[30%] top-[10%] md:left-[60%] left-[50%]">
        <p className="text-white font-poppins lg:text-2xl text-xs lg:leading-[48px] max-w-[500px] font-medium md:mb-8 mb-3">
          Join a growing network of healthcare professionals who are
          transforming immunization management! <br />
          <span>
            Sign up for your free account today and experience the difference.
          </span>
        </p>

        <Button
          label="Register now"
          variant="primary"
          additionalClassname="lg:w-[400px] w-[150px] md:h-[62px] h-10"
        />
      </div>
    </div>
  );
};

export default RegisterSection;
