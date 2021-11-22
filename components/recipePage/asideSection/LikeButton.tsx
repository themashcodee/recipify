import React from "react";
import Heart from "components/icons/Heart";
import { likeDislike } from "store/recipes";
import { useDispatch } from "react-redux";

interface Props {
	id: number | null;
	likes: number | null;
	isLiked: boolean | null;
}

const LikeButton = ({ likes, isLiked, id }: Props) => {
	const dispatch = useDispatch();

	function likeRecipe() {
		if (id) dispatch(likeDislike({ id }));
	}

	return (
		<button
			onClick={() => likeRecipe()}
			className="h-12  w-max flex rounded-lg text-lg font-medium bg-red-500 text-white-900 p-3 gap-2 items-center"
		>
			<span className="w-7 h-7">
				<Heart fill={isLiked ? "#fff" : "none"} />
			</span>
			<span>{likes}</span>
		</button>
	);
};

export default LikeButton;
