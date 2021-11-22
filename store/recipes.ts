import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { Recipe } from "types";

function getRecipesFromLocalStorage(): Recipe[] | null {
	if (typeof window !== "undefined") {
		const recipes = localStorage.getItem("recipes");
		if (recipes) return JSON.parse(recipes);
	}
	return null;
}

export const recipesSlice = createSlice({
	name: "recipes",
	initialState: {
		recipes: getRecipesFromLocalStorage() || [],
	},
	reducers: {
		addRecipesInitialy: (state, action: PayloadAction<void>) => {
			state.recipes = getRecipesFromLocalStorage() || [];
		},
		addComment: (
			state,
			action: PayloadAction<{ id: number; comment: string }>
		) => {
			const newState = state.recipes.map((recipe) => {
				if (recipe.id === action.payload.id) {
					return {
						...recipe,
						comments: [...recipe.comments, action.payload.comment],
					};
				}
				return recipe;
			});
			localStorage.setItem("recipes", JSON.stringify(newState));
			state.recipes = newState;
		},
		likeDislike: (state, action: PayloadAction<{ id: number }>) => {
			const newState = state.recipes.map((recipe) => {
				if (recipe.id === action.payload.id) {
					return {
						...recipe,
						likes: recipe.isLiked ? recipe.likes - 1 : recipe.likes + 1,
						isLiked: !recipe.isLiked,
					};
				}
				return recipe;
			});
			localStorage.setItem("recipes", JSON.stringify(newState));
			state.recipes = newState;
		},
		favouriteToggle: (state, action: PayloadAction<{ id: number }>) => {
			const newState = state.recipes.map((recipe) => {
				if (recipe.id === action.payload.id) {
					return {
						...recipe,
						isFavourite: !recipe.isFavourite,
					};
				}
				return recipe;
			});
			localStorage.setItem("recipes", JSON.stringify(newState));
			state.recipes = newState;
		},
	},
});

export const recipesReducer = recipesSlice.reducer;
export const { addComment, addRecipesInitialy, likeDislike, favouriteToggle } =
	recipesSlice.actions;
export const selectRecipes = (state: RootState) => state.recipes.recipes;
