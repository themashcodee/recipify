import React from "react";
import ThemeButton from "components/core/ThemeButton";
import Link from "next/link";
import { selectUser } from "store/user";
import { useSelector } from "react-redux";
import { User } from "types";
import ProfileButton from "components/core/header/ProfileButton";

interface Props {
	showFavourite?: boolean;
	showHome?: boolean;
	showProfile?: boolean;
}

const Header = ({
	showFavourite = false,
	showHome = false,
	showProfile = false,
}: Props) => {
	const user: User = useSelector(selectUser);

	return (
		<header className="flex justify-between mb-8 w-full items-center">
			<h2 className="sm:text-4xl text-3xl font-semibold select-none">
				<Link href="/">Recepify.</Link>
			</h2>
			<nav className="flex items-center gap-8">
				<ul className="hidden sm:flex gap-4">
					{showHome && (
						<li>
							<Link href="/">Home</Link>
						</li>
					)}
					{showFavourite && (
						<li>
							<Link href="/favourite">Favourite</Link>
						</li>
					)}
				</ul>

				<div className="flex items-center gap-4">
					{showProfile && <ProfileButton user={user} />}
					<ThemeButton />
				</div>
			</nav>
		</header>
	);
};

export default Header;
