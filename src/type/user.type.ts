export type userCompanyDetail = {
  id: string;
  name: string;
  industry: string;
  mission: string;
  vision: string;
};

export type studentDepartmentDetail = {
  id: string;
  name: string;
};

export type userDetail = {
  username: string;
  firstName: string;
  lastName: string;
  department: studentDepartmentDetail;
  level: string;
  email: string;
  profileImageUrl: string;
  company?: userCompanyDetail;
  phoneNumber: string;
  gender: string;
};
