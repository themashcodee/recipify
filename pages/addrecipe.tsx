import type { NextPage } from "next";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "store/user";
import { useRouter } from "next/router";

import CustomHead from "components/core/CustomHead";
import Header from "components/core/header/Header";
import Loading from "components/core/Loading";
import Form from "components/addRecipePage/Form";
import Toast from "components/core/Toast";

const AddRecipe: NextPage = () => {
	const user = useSelector(selectUser);
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
				<Header showFavourite showProfile showHome />
				<Form />
			</main>
		</>
	);
};

export default AddRecipe;
