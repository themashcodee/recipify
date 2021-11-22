import React from "react";
import UserIcon from "components/icons/User";
import Image from "next/image";
import Link from "next/link";
import { User } from "types";

interface Props {
	user: User;
}

const ProfileButton = ({ user }: Props) => {
	return (
		<Link href="/profile" passHref>
			<button className="w-10 h-10 rounded-lg p-2 bg-white-900 dark:bg-black-800 relative overflow-hidden">
				{user.picture ? (
					<Image
						src={user.picture}
						alt="profile picture"
						layout="fill"
						objectFit="cover"
					></Image>
				) : (
					<UserIcon />
				)}
			</button>
		</Link>
	);
};

export default ProfileButton;
