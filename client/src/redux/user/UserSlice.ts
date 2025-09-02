import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserData } from "../../Types/User";

const initialState: {
  user: UserData | undefined;
} = {
  user: undefined,
};

export const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserData | undefined>) => {
      state.user = action?.payload;
    },
    removeUser: (state) => {
      state.user = undefined;
    },
  },
});

export const { addUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
