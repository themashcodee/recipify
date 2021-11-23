import React from "react";
import { Recipe } from "types";
import RecipeCard from "./RecipeCard";

interface Props {
	recipes: Recipe[];
	query: string;
	selectedIngredients: string[];
}

const RecipeCards = ({ recipes, query, selectedIngredients }: Props) => {
	return (
		<section className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 place-content-between ">
			{recipes
				.filter((recipe) => {
					if (!query && !selectedIngredients.length) return true;
					return selectedIngredients.length
						? recipe.name.toLowerCase().includes(query.toLowerCase()) &&
								selectedIngredients.every((ing) =>
									recipe.ingredients.some((ingr) => ingr.type === ing)
								)
						: recipe.name.toLowerCase().includes(query.toLowerCase());
				})
				.map((recipe) => (
					<RecipeCard recipe={recipe} key={recipe.id} />
				))}
		</section>
	);
};

export default RecipeCards;
