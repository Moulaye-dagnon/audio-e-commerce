import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../redux/Cart/CartSlice";
import  UserReducer from "../redux/user/UserSlice";
export const store = configureStore({
  reducer: {
    cart: CartReducer,
	user: UserReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;
