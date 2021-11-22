import React from "react";
import Image from "next/image";
import { Recipe } from "types";

interface Props {
	recipe: Recipe | null;
}

const ArticleSection = ({ recipe }: Props) => {
	return (
		<article className="flex flex-col lg:w-[70%] flex-grow gap-8">
			{/* IMAGE */}
			<div className="w-full rounded-lg overflow-hidden relative h-96">
				{recipe && (
					<Image
						src={recipe.image}
						layout="fill"
						objectFit="cover"
						alt={recipe.name}
					></Image>
				)}
			</div>

			<h1 className="text-5xl font-bold">{recipe?.name}</h1>

			{/* INGREDIENTS */}
			<section className="flex flex-col gap-3">
				<h2 className="text-3xl font-medium">Ingredients</h2>
				<ul className="flex flex-wrap gap-4">
					{recipe?.ingredients.map((ingr, i) => {
						return (
							<li
								key={i}
								className="flex overflow-hidden text-black-800 rounded select-none"
							>
								<span className="bg-yellow-200 py-1 px-3 font-semibold text-lg flex items-center">
									{ingr.name}
								</span>
								<span className="bg-yellow-400 py-1 px-3 flex items-center">
									{ingr.quantity}
								</span>
							</li>
						);
					})}
				</ul>
			</section>

			{/* STEPS */}
			<section className="flex flex-col gap-3">
				<h2 className="text-3xl font-medium">Steps</h2>
				<ul className="flex flex-col gap-2 px-8">
					{recipe?.steps.map((ingr, i) => {
						return (
							<li className="list-decimal text-lg" key={i}>
								{ingr}
							</li>
						);
					})}
				</ul>
			</section>
		</article>
	);
};

export default ArticleSection;
