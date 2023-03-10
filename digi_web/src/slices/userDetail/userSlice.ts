import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthenticationDetails } from "../../interfaces/login/authenticationDetails";
import { initialState } from "../../interfaces/login/initialState";
import { IUserInput } from "../../interfaces/login/IUserInput";

export const userSlice = createSlice({
  name: "userInput",
  initialState: initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<IUserInput>) => {
      switch (true) {
        case Object.keys(action.payload).includes("userName"):
          state.userName = action.payload.userName;
          break;
        case Object.keys(action.payload).includes("userId"):
          state.userId = action.payload.userId;
          break;
        case Object.keys(action.payload).includes("bankLoginUserName"):
          state.bankLoginUserName = action.payload.bankLoginUserName;
          break;
        case Object.keys(action.payload).includes("bankLoginPassword"):
          state.bankLoginPassword = action.payload.bankLoginPassword;
          break;
        case Object.keys(action.payload).includes("userEmail"):
          state.userEmail = action.payload.userEmail;
          break;
        case Object.keys(action.payload).includes("userMobile"):
          state.userMobile = action.payload.userMobile;
          break;
        case Object.keys(action.payload).includes("loginMsg"):
          state.loginMsg = action.payload.loginMsg;
          break;
      }
    },
    handleBankLogin(state, action: PayloadAction<any>) {},
    updateLoginStatus: (state, action: PayloadAction<string>) => {
      state.bankLoginStatus = action.payload;
    },
    handleUserLogin(state, action: PayloadAction<any>) {},
    setIsAuthenticated: (state, action: PayloadAction<IAuthenticationDetails>) => {
      state.authenticationDetails = action.payload;
    },
  },
});

export const {
  updateForm,
  handleBankLogin,
  updateLoginStatus,
  handleUserLogin,
  setIsAuthenticated,
} = userSlice.actions;

export const userInputReducer = userSlice.reducer;
