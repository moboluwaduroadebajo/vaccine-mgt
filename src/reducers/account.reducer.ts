import { LoginPayloadType, UserEntityType } from "@/type/account.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface AccountState {
  loading: boolean;
  user: {
    id: string;
    email: string;
    username: string;
    type: string;
    lastLoginDate: Date | null;
    role: [
      {
        id: string;
        name: string;
        description: string;
      }
    ];
    status: string;
  };
  error: string;
  isLoadingAccountDetails: boolean;
  hasLoadedAccountDetails: boolean;
  isAuthenticated: boolean;
}

const initialState: AccountState = {
  loading: false,
  user: {
    id: "",
    email: "",
    username: "",
    type: "",
    lastLoginDate: null,
    role: [
      {
        id: "",
        name: "",
        description: "",
      },
    ],
    status: "",
  },
  error: "",
  isLoadingAccountDetails: false,
  hasLoadedAccountDetails: false,
  isAuthenticated: false,
};
const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const login = createAsyncThunk<UserEntityType, LoginPayloadType>(
  "account/login",
  async ({ username, password }) => {
    try {
      const request = await axios.post(
        `${baseURL}/auth/login`,
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      const response = request.data.data;
      localStorage.setItem("user", JSON.stringify(response));
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      if (action.payload) {
        state.user = action.payload;
      }
      state = initialState;
    },
    resetAccountState: (state) => {
      state = initialState;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoadingAccountDetails = true;
    });

    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user.id = payload.id;
      state.user.email = payload.email;
      state.user.username = payload.username;
      state.user.type = payload.type;
      state.isLoadingAccountDetails = false;
      state.hasLoadedAccountDetails = true;
      state.isAuthenticated = true;
    });

    builder.addCase(login.rejected, (state, { payload }: { payload: any }) => {
      if (payload) {
        state.error = payload.message;
      }
      state.isAuthenticated = false;
      state.isLoadingAccountDetails = false;
      state.hasLoadedAccountDetails = false;
    });
  },
});

export default accountSlice.reducer;
