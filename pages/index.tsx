import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "store/user";
import { useCustomLayoutEffect } from "hooks";
import { useRouter } from "next/router";

import CustomHead from "components/core/CustomHead";
import Header from "components/core/header/Header";
import Loading from "components/core/Loading";
import RecipeCard from "components/mainPage/RecipeCard";
import Recipes from "database/recipes.json";
import SearchBar from "components/mainPage/SearchBar";
import IngredientsBar from "components/mainPage/IngredientsBar";

const Home: NextPage = () => {
	const user = useSelector(selectUser);
	const router = useRouter();

	const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
	const [query, setQuery] = useState<string>("");
	const searchInputRef = useRef<HTMLInputElement | null>(null);

	useCustomLayoutEffect(() => {
		if (!user.username) router.replace("/signup");
	}, [user.username, router]);

	useEffect(() => {
		function focusOnSearch(this: Window, e: globalThis.KeyboardEvent): any {
			if (e.key === "/" && e.ctrlKey) searchInputRef.current?.focus();
		}
		window.addEventListener("keydown", focusOnSearch);
		return () => {
			window.removeEventListener("keydown", focusOnSearch);
		};
	}, []);

	if (!user.username) return <Loading />;

	return (
		<>
			<CustomHead title="" />

			<main className="page py-8">
				<Header showFavourite showProfile />
				<SearchBar query={query} setQuery={setQuery} ref={searchInputRef} />
				<IngredientsBar
					selectedIngredients={selectedIngredients}
					setSelectedIngredients={setSelectedIngredients}
				/>

				<section className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 place-content-between ">
					{Recipes.filter((recipe) => {
						if (!query && !selectedIngredients.length) return true;
						return selectedIngredients.length
							? recipe.name.toLowerCase().includes(query.toLowerCase()) &&
									selectedIngredients.every((ing) =>
										recipe.ingredients.some((ingr) => ingr.type === ing)
									)
							: recipe.name.toLowerCase().includes(query.toLowerCase());
					}).map((recipe) => (
						<RecipeCard recipe={recipe} key={recipe.id} />
					))}
				</section>
			</main>
		</>
	);
};

export default Home;
