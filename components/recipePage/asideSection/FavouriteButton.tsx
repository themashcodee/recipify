import React from "react";
import Bookmark from "components/icons/Bookmark";
import { favouriteToggle } from "store/recipes";
import { useDispatch } from "react-redux";

interface Props {
	id: number | null;
	isFavourite: boolean | null;
}

const BookmarkButton = ({ isFavourite, id }: Props) => {
	const dispatch = useDispatch();

	function toggleFavourite() {
		if (id) dispatch(favouriteToggle({ id }));
	}

	return (
		<button
			onClick={() => toggleFavourite()}
			className="h-12  w-max flex rounded-lg text-lg font-medium bg-pink-300 text-black-800 p-3 gap-2 items-center"
		>
			<span className="w-7 h-7">
				<Bookmark fill={isFavourite ? "#212121" : "none"} />
			</span>
		</button>
	);
};

export default BookmarkButton;
