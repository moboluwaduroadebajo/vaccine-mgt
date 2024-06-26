export type ParentDataType = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: Date | string;
  age: string
  children: ChildrenDataType[]
};

export type ChildrenDataType = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date | string;
  age: string;
  gender: string;
};
