import React from "react";
import Image from "next/image";
import { Recipe } from "types";

interface Props {
	recipe: Recipe | null;
}

const ArticleSection = ({ recipe }: Props) => {
	return (
		<article className="flex flex-col">
			<div className="w-full rounded-lg overflow-hidden relative">
				{/* <Image src={recipe?.image} alt=""></Image> */}
			</div>
		</article>
	);
};

export default ArticleSection;
