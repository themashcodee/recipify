import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { selectRecipes } from "store/recipes";
import { selectUser } from "store/user";

import Loading from "components/core/Loading";
import CustomHead from "components/core/CustomHead";
import Header from "components/core/header/Header";
import RecipeCard from "components/mainPage/RecipeCard";

const Favourite: NextPage = () => {
	const user = useSelector(selectUser);
	const recipes = useSelector(selectRecipes);
	const router = useRouter();

	useEffect(() => {
		if (!user.username) router.replace("/signup");
	}, [user.username, router]);

	if (!user.username)
		return (
			<>
				<CustomHead title="| Favourite" />
				<Loading />
			</>
		);

	return (
		<>
			<CustomHead title="| Favourite" />

			<main className="page py-8">
				<Header showHome showProfile />
				<section className="flex flex-col py-8 gap-10">
					<h1 className="text-4xl font-semibold">Your Favourite Recipes</h1>
					<div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 place-content-between">
						{recipes
							.filter((recipe) => recipe.isFavourite)
							.map((recipe) => {
								return <RecipeCard recipe={recipe} key={recipe.id} />;
							})}
					</div>
				</section>
			</main>
		</>
	);
};

export default Favourite;
