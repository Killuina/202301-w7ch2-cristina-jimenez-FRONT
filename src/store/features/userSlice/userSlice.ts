import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

const initialState: UserState = {
  username: "",
  isLogged: false,
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (currentUserState, { payload }: PayloadAction<User>) => ({
      ...payload,
      isLogged: true,
    }),
    logoutUser: () => ({ ...initialState }),
  },
});

export const { reducer: userReducer } = userSlice;
export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
