import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

function getpreferIngredientsFromLocalStorage(): string[] | null {
	if (typeof window !== "undefined") {
		const preferIngredients = localStorage.getItem("preferIngredients");
		if (preferIngredients) return JSON.parse(preferIngredients);
	}
	return null;
}

export const preferIngredientsSlice = createSlice({
	name: "preferIngredients",
	initialState: {
		preferIngredients: getpreferIngredientsFromLocalStorage() || [
			"misc",
			"meat",
		],
	},
	reducers: {
		addPreferIngredientsInitialy: (state, action: PayloadAction<void>) => {
			state.preferIngredients = getpreferIngredientsFromLocalStorage() || [
				"misc",
				"meat",
			];
		},
		changePreferIngredients: (state, action: PayloadAction<string[]>) => {
			localStorage.setItem("preferIngredients", JSON.stringify(action.payload));
			state.preferIngredients = action.payload;
		},
	},
});

export const preferIngredientsReducer = preferIngredientsSlice.reducer;
export const { addPreferIngredientsInitialy, changePreferIngredients } =
	preferIngredientsSlice.actions;
export const selectpreferIngredients = (state: RootState) =>
	state.preferIngredients.preferIngredients;
