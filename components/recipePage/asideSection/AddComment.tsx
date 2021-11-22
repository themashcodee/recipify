import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "store/recipes";

interface Props {
	id: number | null;
}

const AddComment = ({ id }: Props) => {
	const dispatch = useDispatch();
	const [comment, setComment] = useState<string>("");

	function addAComment(e: FormEvent) {
		e.preventDefault();
		if (id) dispatch(addComment({ id, comment }));
		setComment("");
	}

	return (
		<form
			onSubmit={(e) => addAComment(e)}
			className="flex w-full sm:flex-row flex-col lg:flex-col bg-white-900 dark:bg-black-800 p-4 rounded-lg gap-4"
		>
			<input
				type="text"
				value={comment}
				onChange={(e) => setComment(e.currentTarget.value)}
				className="w-full h-12 text-lg bg-transparent outline-none dark:bg-black-700 bg-white-700 rounded px-3"
				placeholder="Type a comment..."
			/>
			<button
				type="submit"
				className="h-12 flex-shrink-0 px-3 bg-purple-500 text-white-900 rounded"
			>
				Add
			</button>
		</form>
	);
};

export default AddComment;
