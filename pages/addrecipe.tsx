import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "store/user";
import { selectRecipes } from "store/recipes";
import { useRouter } from "next/router";

import CustomHead from "components/core/CustomHead";
import Header from "components/core/header/Header";
import Loading from "components/core/Loading";

const AddRecipe: NextPage = () => {
	const user = useSelector(selectUser);
	const recipes = useSelector(selectRecipes);
	const router = useRouter();

	useEffect(() => {
		if (!user.username) router.replace("/signup");
	}, [user, router]);

	if (!user.username)
		return (
			<>
				<CustomHead title="| Add a Recipe" />
				<Loading />
			</>
		);

	return (
		<>
			<CustomHead title="| Add a Recipe" />

			<main className="page py-8">
				<Header showFavourite showProfile />
			</main>
		</>
	);
};

export default AddRecipe;
