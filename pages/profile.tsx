import type { NextPage } from "next";
import Header from "components/core/header/Header";
import { useSelector } from "react-redux";
import { selectUser } from "store/user";
import { useCustomLayoutEffect } from "hooks";
import { useRouter } from "next/router";
import { useState } from "react";
import Loading from "components/core/Loading";
import CustomHead from "components/core/CustomHead";

const Profile: NextPage = () => {
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
			<CustomHead title="Recepify | Profile" />

			<main className="page py-8">
				<Header showHome showFavourite />
			</main>
		</>
	);
};

export default Profile;
