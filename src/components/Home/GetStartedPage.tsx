import React from "react";
import img1 from "../../../public/img1.png";
import img2 from "../../../public/img2.png";
import img3 from "../../../public/img3.png";
import img4 from "../../../public/img4.png";
import StepstoStart from "./StepstoStart";
import Button from "../utilities/Button";

const GetStartedPage = () => {
  const menu = [
    {
      id: 1,
      title: "Create a free account for your practice",
      description:
        "Get started quickly with a free account for your practice. Simply enter your healthcare professional information and clinic details in our secure system.",
      image: img1,
    },
    {
      id: 2,
      title: "Add your healthcare professional information and clinic details.",
      description:
        "Get started quickly with a free account for your practice. Simply enter your healthcare professional information and clinic details in our secure system.",
      image: img2,
    },
    {
      id: 3,
      title: "Upload or manually enter your patients' immunization data.",
      description:
        "Upload your patients' immunization data directly or enter it manually with ease. Our system is designed for efficient data management.",
      image: img3,
    },
    {
      id: 4,
      title: "Set up automated reminders and customize reporting preferences.",
      description:
        "Never miss a vaccination again! Set up automated alerts for upcoming immunizations and customize reporting preferences to meet your practice's specific needs.",
      image: img4,
    },
  ];
  return (
    <div className="bg-[#E1F0E1] py-32">
      <p className="font-poppins text-center text-transparent capitalize bg-gradient-to-r from-[#1F8E1F] to-[#061c06] bg-clip-text md:text-5xl text-3xl font-bold pb-20">
        Get Started
      </p>

      <div>
        {menu.map((item) => (
          <StepstoStart
            key={item.id}
            isMultiple={item.id % 2 === 0}
            {...item}
          />
        ))}
      </div>

      <div className="flex items-center justify-center py-12">
        <Button
          label="Register now"
          variant="primary"
          additionalClassname="lg:w-[280px] w-[200px]"
        />
      </div>
    </div>
  );
};

export default GetStartedPage;
