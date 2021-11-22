import type { NextPage } from "next";
import Header from "components/core/header/Header";
import Loading from "components/core/Loading";
import { useCustomLayoutEffect } from "hooks";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useState } from "react";
import { selectUser } from "store/user";
import CustomHead from "components/core/CustomHead";

const Favourite: NextPage = () => {
	const user = useSelector(selectUser);
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	useCustomLayoutEffect(() => {
		if (!user.username) router.replace("/signup");
		else setLoading(false);
	}, [user.username, router]);

	if (loading) return <Loading />;

	return (
		<>
			<CustomHead title="Recepify | Favourite" />

			<main className="page py-8">
				<Header showHome showProfile />
			</main>
		</>
	);
};

export default Favourite;
