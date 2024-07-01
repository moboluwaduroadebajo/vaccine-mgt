export const sideMenu = [
  {
    label: "Home",
    path: "/dashboard",
    iconName: "home",
  },
  {
    label: "Parents",
    path: "/dashboard/parents",
    iconName: "parents",
  },
  {
    label: "Children",
    path: "/dashboard/children" || "/dashboard/children/child-profile",
    iconName: "children",
  },
  {
    label: "Vaccines",
    path: "/dashboard/vaccines",
    iconName: "injection",
  },
  {
    label: "Schedules",
    path: "/dashboard/schedules",
    iconName: "schedule",
  },
];

export const helpMenuList = [
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

// [ *BCG, **OPV0, ***Hep BO birth, Pentavalent(DPT, Hep B and Hib) 1,
//   Premococcal Conjugate Vaccine 1, OPV1, IPV1, Rotavirus vaccine 1,
//   Pentavalent(DPT, Hep B and Hib) 2, Premococcal Conjugate Vaccine 2, OPV2,
//   Rotavirus vaccine 2, (DPT, Hep B and Hib) 3, Premococcal Conjugate Vaccine 3,
//   OPV3, Rotavirus vaccine 3, IPV2, Vitamin A 1st done, Measles 1st dose(MCV1),
//   Yellow Fever, Meningitis Vaccine, Vitamin A 2nd done, Measles 2nd dose(MCV2),
//    **** HPV, unknown]

export const vaccineType = [
  { label: "BCG", value: "BCG" },
  { label: "OPV0", value: "OPV0" },
  { label: "Hep BO birth", value: "Hep BO birth" },
  {
    label: "Pentavalent(DPT, Hep B and Hib) 1",
    value: "Pentavalent(DPT, Hep B and Hib) 1",
  },
];

export const ageTarget = [
  { label: "Birth", value: "Birth" },
  { label: "Week 6", value: "Week 6" },
  { label: "Week 10", value: "Week 10" },
  { label: "Week 14", value: "Week 14" },
  { label: "Month 6", value: "Month 6" },
  { label: "Month 9", value: "Month 9" },
  { label: "Month 12", value: "Month 12" },
  { label: "Month 15", value: "Month 15" },
  { label: "Year 9", value: "Year 9" },
  { label: "unknown", value: "unknown" },
];

export const dosageType = [
  { label: "ml", value: "ml" },
  { label: "drop(s)", value: "drop(s)" },
  { label: "IU", value: "IU" },
  { label: "unknown", value: "unknown" },
];

// [ Intra dermal, Oral, Intramuscular, Subcutaneous, unknown ]

export const adminRoute = [
  { label: "Intra dermal", value: "Intra dermal" },
  { label: "Oral", value: "Oral" },
  { label: "Intramuscular", value: "Intramuscular" },
  { label: "Subcutaneous", value: "Subcutaneous" },
  { label: "unknown", value: "unknown" },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
