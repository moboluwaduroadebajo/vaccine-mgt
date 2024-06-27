import { ChildrenDataType } from "./user.type";
import { ExistingVaccineType } from "./vaccines.type";

export type ImmunizationType = {
  id: string;
  administered: boolean;
  dateOfAdministration: null | string;
  minimumAdministerDate: string;
  vaccine: ExistingVaccineType
};

export type ImmunizationRecordType = {
  id: string;
  immunization: ImmunizationType;
  child: ChildrenDataType;
};
