import { login } from "@/thunks/account-thunk";
import { createSlice, createSelector } from "@reduxjs/toolkit";

interface AccountState {
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
  accessToken: string;
  message: string;
  error: string;
  isLoadingAccountDetails: boolean;
  hasLoadedAccountDetails: boolean;
  isAuthenticated: boolean;
}

const initialState: AccountState = {
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
  accessToken: "",
  message: "",
  error: "",
  isLoadingAccountDetails: false,
  hasLoadedAccountDetails: false,
  isAuthenticated: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
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
    // `login.pending` is being fired:
    builder.addCase(login.pending, (state) => {
      state.isLoadingAccountDetails = true;
    });

    // When a server responses with the data,
    // `login.fulfilled` is fired:
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user.id = payload.id;
      state.user.email = payload.email;
      state.user.username = payload.username;
      state.user.type = payload.type;
      state.isLoadingAccountDetails = false;
      state.hasLoadedAccountDetails = true;
      state.isAuthenticated = true;
    });

    // When a server responses with an error:
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

export const selectAccountState = ({ account }: { account: AccountState }) => {
  return account;
};

export const selectUserInformation = createSelector(
  selectAccountState,
  (accountState) => accountState.user
);

export const selectUserID = createSelector(
  selectAccountState,
  (accountState) => accountState.user.id
);

export const selectAccessToken = createSelector(
  selectAccountState,
  (accountState) => accountState.accessToken
);

export const selectUserRole = createSelector(
  selectAccountState,
  (accountState) => accountState.user.type
);

export const selectIsAuthenticated = createSelector(
  selectAccountState,
  (accountState) => accountState.isAuthenticated
);

export const { resetAccountState } = accountSlice.actions;
