import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { Recipe, RecipePayload } from "types";

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
			const recipeIndex = state.recipes.findIndex(
				(recipe) => recipe.id === action.payload.id
			);
			const recipe = state.recipes[recipeIndex];
			state.recipes[recipeIndex] = {
				...recipe,
				comments: [...recipe.comments, action.payload.comment],
			};
			localStorage.setItem("recipes", JSON.stringify(state.recipes));
		},
		likeDislike: (state, action: PayloadAction<{ id: number }>) => {
			const recipeIndex = state.recipes.findIndex(
				(recipe) => recipe.id === action.payload.id
			);
			const recipe = state.recipes[recipeIndex];
			state.recipes[recipeIndex] = {
				...recipe,
				likes: recipe.isLiked ? recipe.likes - 1 : recipe.likes + 1,
				isLiked: !recipe.isLiked,
			};
			localStorage.setItem("recipes", JSON.stringify(state.recipes));
		},
		favouriteToggle: (state, action: PayloadAction<{ id: number }>) => {
			const recipeIndex = state.recipes.findIndex(
				(recipe) => recipe.id === action.payload.id
			);
			const recipe = state.recipes[recipeIndex];
			state.recipes[recipeIndex] = {
				...recipe,
				isFavourite: !recipe.isFavourite,
			};
			localStorage.setItem("recipes", JSON.stringify(state.recipes));
		},
		addRecipe: (state, action: PayloadAction<RecipePayload>) => {
			const newState = [
				...state.recipes,
				{
					...action.payload,
					isFavourite: false,
					isLiked: false,
					likes: 0,
					comments: [],
					id: state.recipes[state.recipes.length - 1].id + 1,
				},
			];
			localStorage.setItem("recipes", JSON.stringify(newState));
			state.recipes = newState;
		},
	},
});

export const recipesReducer = recipesSlice.reducer;
export const {
	addComment,
	addRecipesInitialy,
	likeDislike,
	favouriteToggle,
	addRecipe,
} = recipesSlice.actions;
export const selectRecipes = (state: RootState) => state.recipes.recipes;
