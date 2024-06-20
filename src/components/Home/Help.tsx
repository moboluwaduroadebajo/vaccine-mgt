import React from "react";
import { Icons } from "../icons";

const Help = () => {
  const menuList = [
    {
      id: 1,
      iconName: "peace",
      title: "Improved patient outcomes",
      description:
        "Ensure your patients receive timely and appropriate vaccinations,eading to better overall health",
      bgColor: "bg-[#dbeddb]",
      borderColor: "border-[#1F8E1F]",
      textColor: "text-[#1F8E1F]",
      fillColor: "#1F8E1F",
    },
    {
      id: 2,
      iconName: "rythm",
      title: "Enhanced Practice Efficiency",
      description:
        "Save valuable time and resources with streamlined workflows and automated tasks.",
      bgColor: "bg-[#eee3dd]",
      borderColor: "border-[#DF2935]",
      textColor: "text-[#DF2935]",
    },
    {
      id: 3,
      iconName: "peace",
      title: "reduced errors",
      description:
        "Minimize the risk of errors with a centralized and secure record-keeping system.",
      bgColor: "bg-[#f1eed8]",
      borderColor: "border-[#FF9900]",
      textColor: "text-[#FF9900]",
      fillColor: "#FF9900",
    },
    {
      id: 4,
      iconName: "peace",
      title: "Improved Patient Engagement:",
      description:
        "Empower patients to take an active role in their health by providing them with easy access to their immunization records.",
      bgColor: "bg-[#ddeaf1]",
      borderColor: "border-[#3772FF]",
      textColor: "text-[#3772FF]",
      fillColor: "#3772FF",
    },
  ];
  return (
    <div className="bg-[#f0f7f0] pt-32">
      <p className="font-poppins text-center text-transparent capitalize bg-gradient-to-r from-[#1F8E1F] to-[#061c06] bg-clip-text md:text-5xl text-3xl font-bold pb-20">
        Here is how we Help
      </p>

      <div className="flex gap-8 md:items-center md:justify-center w-full h-full pb-32 px-8 overflow-x-auto scroll-smooth">
        {menuList.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col gap-4 md:w-[237px] h-[396px] min-w-[237px] rounded-3xl border-2 ${item.borderColor} ${item.bgColor} p-6`}>
            <Icons name={item.iconName} fill={item.fillColor} />
            <p
              className={`capitalize font-poppins font-bold text-base ${item.textColor}`}>
              {item.title}
            </p>
            <p className="font-poppins text-base font-light text-[#222222] leading-[34.2px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
