import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "store/user";
import { selectRecipes } from "store/recipes";
import { useRouter } from "next/router";

import Loading from "components/core/Loading";
import CustomHead from "components/core/CustomHead";
import Header from "components/core/header/Header";
import Hero from "components/mainPage/Hero";
import SearchBar from "components/mainPage/SearchBar";
import IngredientsBar from "components/mainPage/IngredientsBar";
import RecipeCards from "components/mainPage/RecipeCards";

const Home: NextPage = () => {
	const user = useSelector(selectUser);
	const recipes = useSelector(selectRecipes);
	const router = useRouter();

	const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
	const [query, setQuery] = useState<string>("");
	const searchInputRef = useRef<HTMLInputElement | null>(null);

	// REDIRECT IF WE USER DOES NOT EXIST
	useEffect(() => {
		if (!user.username) router.replace("/signup");
	}, [user, router]);

	// FOCUS ON SEARCH INPUT WHEN CLICK CTRL+/
	useEffect(() => {
		function focusOnSearch(this: Window, e: globalThis.KeyboardEvent) {
			if (e.key === "/" && e.ctrlKey) searchInputRef.current?.focus();
		}
		window.addEventListener("keydown", focusOnSearch);
		return () => window.removeEventListener("keydown", focusOnSearch);
	}, []);

	// WAIT FOR REDIRECT IF USER DOES NOT EXIST
	if (!user.username) {
		return (
			<>
				<CustomHead />
				<Loading />
			</>
		);
	}

	return (
		<>
			<CustomHead />

			<main className="page py-8">
				<Header showFavourite showProfile showAddRecipe />
				<Hero />
				<SearchBar query={query} setQuery={setQuery} ref={searchInputRef} />
				<IngredientsBar
					selectedIngredients={selectedIngredients}
					setSelectedIngredients={setSelectedIngredients}
				/>
				<RecipeCards
					query={query}
					recipes={recipes}
					selectedIngredients={selectedIngredients}
				/>
			</main>
		</>
	);
};

export default Home;
