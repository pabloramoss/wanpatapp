import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

interface AuthState {
  data: {
    user: User | null;
  }
}

const initialState: AuthState = {
  data: {
    user: null
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<User>) => {
      state.data.user = action.payload;
    },
    userLogout: (state) => {
      state.data.user = null;
    }
  },
});

export const { userLogin, userLogout } = authSlice.actions;

export default authSlice.reducer;

