export const sideMenu = [
  {
    label: "Home",
    path: "/dashboard",
    iconName: "home",
  },
  {
    label: "Children",
    path: "/dashboard/children",
    iconName: "children",
  },
  {
    label: "Parents",
    path: "/dashboard/parents",
    iconName: "parents",
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

// [ *BCG, **OPV0, ***Hep BO birth, Pentavalent(DPT, Hep B and Hib) 1,
//   Premococcal Conjugate Vaccine 1, OPV1, IPV1, Rotavirus vaccine 1,
//   Pentavalent(DPT, Hep B and Hib) 2, Premococcal Conjugate Vaccine 2, OPV2,
//   Rotavirus vaccine 2, (DPT, Hep B and Hib) 3, Premococcal Conjugate Vaccine 3,
//   OPV3, Rotavirus vaccine 3, IPV2, Vitamin A 1st done, Measles 1st dose(MCV1),
//   Yellow Fever, Meningitis Vaccine, Vitamin A 2nd done, Measles 2nd dose(MCV2),
//    **** HPV, unknown]

export const vaccineType = [
  { label: "*BCG", value: "*BCG" },
  { label: "**OPV0", value: "**OPV0" },
  { label: "***Hep BO birth", value: "***Hep BO birth" },
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
