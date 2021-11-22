import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "components/core/header/Header";
import { useSelector } from "react-redux";
import { selectUser } from "store/user";
import { useCustomLayoutEffect } from "hooks";
import { useRouter } from "next/router";
import Recipes from "database/recipes.json";
import { Recipe } from "types";

import Loading from "components/core/Loading";
import CustomHead from "components/core/CustomHead";
import ArticleSection from "components/recipePage/ArticleSection";
import AsideSection from "components/recipePage/AsideSection";

const Recipe: NextPage = () => {
	const user = useSelector(selectUser);
	const router = useRouter();

	const [loading, setLoading] = useState(true);
	const [recipe, setRecipe] = useState<Recipe | null>(null);

	useCustomLayoutEffect(() => {
		if (!user.username) router.replace("/signup");
		else setLoading(false);
	}, [user.username, router]);

	useEffect(() => {
		const { id } = router.query;
		id && setRecipe(Recipes.find((rec) => rec.id === +id) || null);
	}, [router]);

	if (loading) return <Loading />;

	return (
		<>
			<CustomHead title="Recepify | Single Recipe" />

			<main className="page py-8">
				<Header showFavourite showProfile showHome />

				<section className="flex">
					<ArticleSection recipe={recipe} />
					<AsideSection recipe={recipe} />
				</section>
			</main>
		</>
	);
};

export default Recipe;
