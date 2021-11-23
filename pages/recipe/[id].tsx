import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "components/core/header/Header";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "store/user";
import { useRouter } from "next/router";
import { Recipe } from "types";

import Loading from "components/core/Loading";
import CustomHead from "components/core/CustomHead";
import ArticleSection from "components/recipePage/ArticleSection";
import AsideSection from "components/recipePage/asideSection/AsideSection";
import { selectRecipes } from "store/recipes";
import { changePreferIngredients } from "store/preferIngredients";

const Recipe: NextPage = () => {
	const user = useSelector(selectUser);
	const router = useRouter();
	const recipes = useSelector(selectRecipes);
	const dispatch = useDispatch();

	const [recipe, setRecipe] = useState<Recipe | null>(null);

	// REDIRECT IF WE USER DOES NOT EXIST
	useEffect(() => {
		if (!user.username) router.replace("/signup");
	}, [user.username, router]);

	// CHANGE PREFER INGREDIENTS TO CURRENT RECIPE INGREDIENTS FOR RECIPE SUGGESTION IN HERO SECTION
	useEffect(() => {
		if (recipe) {
			dispatch(
				changePreferIngredients(recipe.ingredients.map((ingr) => ingr.type))
			);
		}
	}, [recipe, dispatch]);

	// SETTING RECIPE ACCORDING TO THE RECIPE ID TAKEN FROM URL PATH QUERY
	useEffect(() => {
		const { id } = router.query;
		id && setRecipe(recipes.find((rec) => rec.id === +id) || null);
	}, [router, recipes]);

	// WAIT FOR REDIRECT IF USER DOES NOT EXIST
	if (!user.username) {
		return (
			<>
				<CustomHead title="" />
				<Loading />
			</>
		);
	}

	return (
		<>
			<CustomHead title={`| ${recipe?.name}`} />

			<main className="page py-8">
				<Header showFavourite showProfile showHome showAddRecipe />

				<section className="flex lg:flex-row flex-col py-8 gap-20">
					<ArticleSection recipe={recipe} />
					<AsideSection recipe={recipe} />
				</section>
			</main>
		</>
	);
};

export default Recipe;
