export type ExistingVaccineType = {
  id: string;
  ageTarget: string;
  dosageType: string;
  dosage: number;
  routeOfAdministration: string;
  site: string;
  type: string;
};

export type AgeTargetType = {
  label: string;
  value: string;
};
