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
import Toast from "components/core/Toast";

const Recipe: NextPage = () => {
	const user = useSelector(selectUser);
	const router = useRouter();
	const recipes = useSelector(selectRecipes);
	const dispatch = useDispatch();
	const [recipe, setRecipe] = useState<Recipe | null>(null);

	useEffect(() => {
		if (!user.username) router.replace("/signup");
	}, [user.username, router]);

	useEffect(() => {
		if (recipe) {
			dispatch(
				changePreferIngredients(recipe.ingredients.map((ingr) => ingr.type))
			);
		}
	}, [recipe, dispatch]);

	useEffect(() => {
		const { id } = router.query;
		id && setRecipe(recipes.find((rec) => rec.id === +id) || null);
	}, [router, recipes]);

	if (!user.username)
		return (
			<>
				<CustomHead title="" />
				<Loading />
			</>
		);

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
