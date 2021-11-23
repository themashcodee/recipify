import React from "react";
import { Recipe } from "types";
import Image from "next/image";
import Link from "next/link";
import Badge from "components/core/Badge";
import { motion } from "framer-motion";

interface Props {
	recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
	const { id, name, image, steps, likes, comments } = recipe;
	return (
		<Link href={`/recipe/${id}`} passHref>
			<article className="p-6 rounded-2xl bg-white-900 dark:bg-black-800 flex flex-col gap-5 border border-white-500 dark:border-black-500 cursor-pointer select-none">
				<div className="w-full h-48 relative overflow-hidden rounded-xl bg-white-800 dark:bg-black-700">
					<Image
						src={image}
						layout="fill"
						objectFit="cover"
						alt={`${name} image`}
					></Image>
				</div>

				<div className="flex items-center gap-2">
					<Badge
						content={`${likes} ${likes > 1 ? "Likes" : "Like"}`}
						bg={"bg-red-500"}
					/>
					<Badge
						content={`${comments.length} ${
							comments.length > 1 ? "Comments" : "Comment"
						}`}
						bg={"bg-blue-500"}
					/>
				</div>

				<span className="flex flex-col gap-2">
					<h2 className="text-2xl font-semibold">{name}</h2>
					<p>
						Steps : {steps[0]}
						{".."}
					</p>
				</span>
			</article>
		</Link>
	);
};

export default RecipeCard;
