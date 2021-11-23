import React from "react";
import Bookmark from "components/icons/Bookmark";
import { favouriteToggle } from "store/recipes";
import { useDispatch } from "react-redux";
import { popUpToast } from "store/toast";
import { motion } from "framer-motion";

interface Props {
	id: number | null;
	isFavourite: boolean | null;
}

const BookmarkButton = ({ isFavourite, id }: Props) => {
	const dispatch = useDispatch();

	function toggleFavourite() {
		if (id) {
			dispatch(
				popUpToast({
					text: `Recipe has been ${
						isFavourite ? "removed from" : "added to"
					} the favourite list`,
					timeout: 3000,
					bg: isFavourite ? "bg-red-500" : "bg-green-500",
					color: "#fff",
				})
			);
			dispatch(favouriteToggle({ id }));
		}
	}

	return (
		<motion.button
			whileTap={{ scale: 0.9 }}
			onClick={() => toggleFavourite()}
			className="h-12  w-max flex rounded-lg text-lg font-medium bg-pink-300 text-black-800 p-3 gap-2 items-center"
		>
			<span className="w-7 h-7">
				<Bookmark fill={isFavourite ? "#212121" : "none"} />
			</span>
		</motion.button>
	);
};

export default BookmarkButton;
