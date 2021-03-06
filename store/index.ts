import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { recipesReducer } from "./recipes";
import { preferIngredientsReducer } from "./preferIngredients";
import { ingredientsReducer } from "./ingredients";
import { toastReducer } from "./toast";

export const store = configureStore({
	reducer: {
		user: userReducer,
		recipes: recipesReducer,
		preferIngredients: preferIngredientsReducer,
		ingredients: ingredientsReducer,
		toast: toastReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
