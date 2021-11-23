import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import { User } from "types/User";
import { selectUser, logout } from "store/user";

import UserIcon from "components/icons/User";
import Header from "components/core/header/Header";
import Loading from "components/core/Loading";
import CustomHead from "components/core/CustomHead";

const Profile: NextPage = () => {
	const user: User = useSelector(selectUser);
	const dispatch = useDispatch();
	const router = useRouter();

	// REDIRECT IF WE USER DOES NOT EXIST
	useEffect(() => {
		if (!user.username) router.replace("/signup");
	}, [user.username, router]);

	// WAIT FOR REDIRECT IF USER DOES NOT EXIST
	if (!user.username) {
		return (
			<>
				<CustomHead title="| Profile" />
				<Loading />
			</>
		);
	}

	return (
		<>
			<CustomHead title="| Profile" />

			<main className="page py-8">
				<Header showHome showFavourite showAddRecipe />

				<section className="py-8 flex flex-col gap-6 items-center">
					<div className="relative h-40 w-40 sm:h-48 sm:w-48 lg:h-60 lg:w-60 rounded-lg overflow-hidden bg-white-900 dark:bg-black-800 p-4">
						{user.picture ? (
							<Image
								src={user.picture}
								layout="fill"
								objectFit="cover"
								alt="profile picture"
							/>
						) : (
							<UserIcon />
						)}
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
