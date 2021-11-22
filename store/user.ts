import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { User } from "types";

export const initialState: { user: User } = {
	user: {
		name: "",
		picture: "",
		username: "",
		password: "",
	},
};

function getUserFromLocalStorage() {
	if (typeof window !== "undefined") {
		const user = localStorage.getItem("user");
		if (user) return { user: JSON.parse(user) };
	}
	return null;
}

export const userSlice = createSlice({
	name: "user",
	initialState: getUserFromLocalStorage() || initialState,
	reducers: {
		login: (state, action: PayloadAction<User>) => {
			localStorage.setItem("user", JSON.stringify(action.payload));
			state.user = action.payload;
		},
		logout: (state, action: PayloadAction<void>) => {
			state.user = initialState.user;
		},
	},
});

export const userReducer = userSlice.reducer;
export const { login, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
