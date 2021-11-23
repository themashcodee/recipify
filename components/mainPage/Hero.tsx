import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectpreferIngredients } from "store/preferIngredients";
import { selectRecipes } from "store/recipes";
import { Recipe } from "types";
import Image from "next/image";
import Link from "next/link";

import Badge from "components/core/Badge";

interface Props {}

const Hero = (props: Props) => {
	const recipes = useSelector(selectRecipes);
	const preferIngredients = useSelector(selectpreferIngredients);
	const [recipe, setRecipe] = useState<Recipe | null>(null);

	useEffect(() => {
		const recipesWithPreferIngredients = recipes.filter((recipe) => {
			return recipe.ingredients.some((ingr) =>
				preferIngredients.includes(ingr.type)
			);
		});
		const randomRecipe =
			recipesWithPreferIngredients[
				Math.floor(Math.random() * recipesWithPreferIngredients.length)
			];
		setRecipe(randomRecipe);
	}, [recipes, preferIngredients]);

	return (
		<section className="w-full flex flex-col md:flex-row gap-8 p-6 rounded-xl bg-white-900 dark:bg-black-800 mb-8">
			<div className="w-full min-h-[320px] flex-grow bg-white-800 dark:bg-black-700 rounded-lg overflow-hidden relative">
				{recipe && (
					<Image
						src={recipe.image}
						alt={recipe.name}
						layout="fill"
						objectFit="cover"
					></Image>
				)}
			</div>

			<div className="w-full flex justify-between flex-col gap-4">
				<div className="flex flex-col gap-4">
					<Badge content="Recipe for you" className="w-max text-black-800" />
					<h1 className="text-4xl font-bold">{recipe?.name}</h1>
					<ul className="px-4">
						<li className="list-disc">{recipe?.steps[0]}</li>
						<li className="list-disc">{recipe?.steps[1]}</li>
						<li className="list-disc">
							{recipe?.steps[2].substr(0, 10)}
							{"..."}
						</li>
					</ul>
				</div>
				<Link href={`/recipe/${recipe?.id}`} passHref>
					<button className="bg-green-500 text-white-900 h-12 rounded-lg w-max px-6 py-1">
						Read More
					</button>
				</Link>
			</div>
		</section>
	);
};

export default Hero;
