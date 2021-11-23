import React from "react";
import { Recipe } from "types";
import Link from "next/link";

import Comment from "components/icons/Comment";
import AddComment from "components/recipePage/asideSection/AddComment";
import LikeButton from "components/recipePage/asideSection/LikeButton";
import FavouriteButton from "components/recipePage/asideSection/FavouriteButton";

interface Props {
	recipe: Recipe | null;
}

const AsideSection = ({ recipe }: Props) => {
	return (
		<aside className="flex flex-col lg:w-[30%] flex-grow">
			<div className="flex gap-4 flex-wrap">
				<FavouriteButton
					id={recipe?.id || null}
					isFavourite={recipe?.isFavourite || null}
				/>

				<LikeButton
					id={recipe?.id || null}
					likes={recipe?.likes || null}
					isLiked={recipe?.isLiked || null}
				/>

				<span className="h-12  w-max flex rounded-lg text-lg font-medium bg-blue-500 text-white-900 p-3 gap-2 items-center">
					<span className="w-7 h-7">
						<Comment />
					</span>
					{recipe && recipe.comments && (
						<span>{`${recipe.comments.length}`}</span>
					)}
				</span>

				{/* Comments */}
				{recipe && recipe.comments.length ? (
					<section className="w-full flex flex-col gap-1">
						<ul className="w-full flex rounded-lg p-3 gap-2 flex-col bg-white-900 dark:bg-black-800 border border-white-500 dark:border-black-500">
							{recipe.comments.map((comment, i) => {
								return (
									<li key={i} className="text-lg">
										{comment}
									</li>
								);
							})}
						</ul>
					</section>
				) : null}

				<AddComment id={recipe?.id || null} />
			</div>
		</aside>
	);
};

export default AsideSection;
