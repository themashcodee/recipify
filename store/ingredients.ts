import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import IngredientsData from "database/ingredients.json";

function getIngredientsFromLocalStorage(): string[] | null {
	if (typeof window !== "undefined") {
		const ingredients = localStorage.getItem("ingredients");
		if (ingredients) return JSON.parse(ingredients);
	}
	return null;
}

export const IngredientsSlice = createSlice({
	name: "ingredients",
	initialState: {
		ingredients: getIngredientsFromLocalStorage() || IngredientsData,
	},
	reducers: {
		addIngredientsInitialy: (state, action: PayloadAction<void>) => {
			state.ingredients = getIngredientsFromLocalStorage() || IngredientsData;
		},
		addIngredients: (state, action: PayloadAction<string[]>) => {
			const newState = Array.from(
				new Set([...state.ingredients, ...action.payload])
			);
			localStorage.setItem("ingredients", JSON.stringify(newState));
			state.ingredients = newState;
		},
	},
});

export const ingredientsReducer = IngredientsSlice.reducer;
export const { addIngredientsInitialy, addIngredients } =
	IngredientsSlice.actions;
export const selectIngredients = (state: RootState) =>
	state.ingredients.ingredients;
