import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { User } from "types";
import RecipesData from "database/recipes.json";
import IngredientsData from "database/ingredients.json";

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
			localStorage.setItem("recipes", JSON.stringify(RecipesData));
			localStorage.setItem("ingredients", JSON.stringify(IngredientsData));
			localStorage.setItem(
				"preferIngredients",
				JSON.stringify(["misc", "meat"])
			);
			state.user = action.payload;
		},
		logout: (state, action: PayloadAction<void>) => {
			localStorage.removeItem("user");
			localStorage.removeItem("recipes");
			localStorage.removeItem("preferIngredients");
			localStorage.removeItem("ingredients");
			state.user = initialState.user;
		},
	},
});

export const userReducer = userSlice.reducer;
export const { login, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
