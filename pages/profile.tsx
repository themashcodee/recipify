import type { NextPage } from "next";
import Header from "components/core/header/Header";
import { useSelector } from "react-redux";
import { selectUser } from "store/user";
import { useCustomLayoutEffect } from "hooks";
import { useRouter } from "next/router";
import Loading from "components/core/Loading";
import CustomHead from "components/core/CustomHead";

const Profile: NextPage = () => {
	const user = useSelector(selectUser);
	const router = useRouter();

	useCustomLayoutEffect(() => {
		if (!user.username) router.replace("/signup");
	}, [user.username, router]);

	if (!user.username) return <Loading />;

	return (
		<>
			<CustomHead title="| Profile" />

			<main className="page py-8">
				<Header showHome showFavourite />
			</main>
		</>
	);
};

export default Profile;
