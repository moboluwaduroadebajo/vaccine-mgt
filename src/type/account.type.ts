export type UserEntityType = {
  id: string;
  email: string;
  username: string;

  type: string;
  lastLoginDate: Date | null;
  status: string;
  accessToken: string;
  message: string;
  errors: string[];
};

export type LoginPayloadType = {
  username: string;
  password: string;
};
