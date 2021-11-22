import type { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "store/user";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import { User } from "types/User";

import Header from "components/core/header/Header";
import Loading from "components/core/Loading";
import CustomHead from "components/core/CustomHead";

const Profile: NextPage = () => {
	const user: User = useSelector(selectUser);
	const dispatch = useDispatch();
	const router = useRouter();

	useEffect(() => {
		if (!user.username) router.replace("/signup");
	}, [user.username, router]);

	if (!user.username)
		return (
			<>
				<CustomHead title="| Profile" />
				<Loading />
			</>
		);

	return (
		<>
			<CustomHead title="| Profile" />

			<main className="page py-8">
				<Header showHome showFavourite />

				<section className="py-8 flex flex-col gap-6 items-center">
					<div className="relative h-40 w-40 sm:h-48 sm:w-48 lg:h-60 lg:w-60 rounded-lg overflow-hidden">
						<Image
							src={user.picture}
							layout="fill"
							objectFit="cover"
							alt="profile picture"
						></Image>
					</div>

					<div>
						<h2 className="text-3xl font-semibold text-center">{user.name}</h2>
						<p className="text-lg italic text-black-500 dark:text-white-500 text-center">
							{user.username}
						</p>
					</div>

					<button
						onClick={() => dispatch(logout())}
						className="bg-red-500 text-white font-semibold px-4 py-1 rounded"
					>
						Log out
					</button>
				</section>
			</main>
		</>
	);
};

export default Profile;
