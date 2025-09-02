import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { UserData } from "../../Types/User";
import { api } from "../../Api/axiosConfig";
import type { AxiosError } from "axios";

const initialState: {
  user: UserData | undefined;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
} = {
  user: undefined,
  status: "idle",
  error: null,
};
export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("api/me");
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      rejectWithValue(axiosError.response?.data || axiosError?.message);
      //   throw new Error((error as AxiosError).message);
    }
  }
);

export const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserData | undefined>) => {
      state.user = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { addUser } = UserSlice.actions;
export default UserSlice.reducer;
