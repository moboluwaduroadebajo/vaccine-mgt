import ApiInstance from "@/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { Alert } from "@/Toast";
import { LoginPayloadType, UserEntityType } from "@/type/account.type";
import { AppDispatch } from "@/app/store";
import { resetAccountState } from "@/reducers/account.reducer";

export const login = createAsyncThunk<UserEntityType, LoginPayloadType>(
  "account/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await ApiInstance.post(
        "/auth/login",
        { username, password },
        { withCredentials: true }
      );
      window.localStorage.setItem(
        "token",
        "Bearer " + response.data.data.accessToken
      );
      console.log(response.data);

      return response.data.data.user;
    } catch (err) {
      const error = err as AxiosError<Error>;
      if (!error.response) {
        throw err;
      }
      toast.error(<Alert message={error.response.data.message} type="error" />);

      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = () => (dispatch: AppDispatch) => {
  ApiInstance.post("/user/profile")
    .then((response) => {
      localStorage.removeItem("token");
      // DISPATCH EACH REDUCER'S RESET ACTION HERE
      if (response.data === "success") {
        dispatch(resetAccountState());
      }
    })
    .catch((err) => {
      console.log("Logout error", err);
    });
};
