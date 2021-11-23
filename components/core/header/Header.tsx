import React, { useState } from "react";
import ThemeButton from "components/core/ThemeButton";
import Link from "next/link";
import { selectUser } from "store/user";
import { useSelector } from "react-redux";
import { User } from "types";
import ProfileButton from "components/core/header/ProfileButton";
import MenuIcon from "components/icons/Menu";
import CancelIcon from "components/icons/Cancel";

interface Props {
	showFavourite?: boolean;
	showHome?: boolean;
	showProfile?: boolean;
	showAddRecipe?: boolean;
}

const Header = ({
	showFavourite = false,
	showHome = false,
	showProfile = false,
	showAddRecipe = false,
}: Props) => {
	const user: User = useSelector(selectUser);
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<header className="flex justify-between mb-8 w-full items-center">
				<h2 className="text-3xl font-semibold select-none">
					<Link href="/">Recipify.</Link>
				</h2>

				{/* DESKTOP AND TABLET NAVBAR */}
				<nav className="flex items-center gap-8">
					<ul className="gap-4 hidden sm:flex">
						{showHome && (
							<li>
								<Link href="/">Home</Link>
							</li>
						)}
						{showAddRecipe && (
							<li>
								<Link href="/addrecipe">Add Recipe</Link>
							</li>
						)}
						{showFavourite && (
							<li>
								<Link href="/favourite">Favourite</Link>
							</li>
						)}
					</ul>

					<div className="flex items-center gap-4">
						<span className="hidden sm:flex">
							{showProfile && <ProfileButton user={user} />}
						</span>
						<ThemeButton />

						{(showFavourite || showProfile || showHome || showAddRecipe) && (
							<button
								onClick={() => setIsNavOpen(!isNavOpen)}
								className="flex justify-center items-center sm:hidden w-8 h-8 p-1 rounded-sm"
							>
								{isNavOpen ? <CancelIcon /> : <MenuIcon />}
							</button>
						)}
					</div>
				</nav>
			</header>

			{/* MOBILE NAVBAR */}
			{isNavOpen && (
				<nav className="block sm:hidden mb-8 bg-white-900 dark:bg-black-800 rounded-lg p-4">
					<ul className="flex flex-col gap-2">
						{showHome && (
							<Link href="/" passHref>
								<li>Home</li>
							</Link>
						)}
						{showAddRecipe && (
							<Link href="/addrecipe" passHref>
								<li>Add Recipe</li>
							</Link>
						)}
						{showFavourite && (
							<Link href="/favourite" passHref>
								<li>Favourite</li>
							</Link>
						)}
						{showProfile && (
							<Link href="/profile" passHref>
								<li>Profile</li>
							</Link>
						)}
					</ul>
				</nav>
			)}
		</>
	);
};

export default Header;
