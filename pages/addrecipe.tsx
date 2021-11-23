import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { selectUser } from "store/user";

import CustomHead from "components/core/CustomHead";
import Header from "components/core/header/Header";
import Loading from "components/core/Loading";
import Form from "components/addRecipePage/Form";

const AddRecipe: NextPage = () => {
	const user = useSelector(selectUser);
	const router = useRouter();

	// REDIRECT IF WE USER DOES NOT EXIST
	useEffect(() => {
		if (!user.username) router.replace("/signup");
	}, [user, router]);

	// WAIT FOR REDIRECT IF USER DOES NOT EXIST
	if (!user.username) {
		return (
			<>
				<CustomHead title="| Add a Recipe" />
				<Loading />
			</>
		);
	}

	return (
		<>
			<CustomHead title="| Add a Recipe" />

			<main className="page py-8">
				<Header showFavourite showProfile showHome />
				<Form />
			</main>
		</>
	);
};

export default AddRecipe;
