import React, { Dispatch, SetStateAction } from "react";

import { useSelector } from "react-redux";
import { selectIngredients } from "store/ingredients";

interface Props {
	selectedIngredients: string[];
	setSelectedIngredients: Dispatch<SetStateAction<string[]>>;
}

const IngredientsBar = ({
	selectedIngredients,
	setSelectedIngredients,
}: Props) => {
	const Ingredients = useSelector(selectIngredients);

	return (
		<div className="w-full h-14 rounded-lg mb-10 flex  items-center">
			<span className="font-semibold text-lg pr-2">Ingredients</span>
			<ul className="flex px-4 gap-2 overflow-auto hide-scrollbar">
				{Ingredients.map((ing) => {
					return (
						<li
							key={ing}
							className={`${
								selectedIngredients.includes(ing)
									? "bg-yellow-200 text-black-800"
									: "bg-white-900 dark:bg-black-800"
							} py-2 px-3 rounded text-base cursor-pointer select-none`}
							onClick={() => {
								if (selectedIngredients?.includes(ing)) {
									return setSelectedIngredients((prev) =>
										prev.filter((ingr) => ingr !== ing)
									);
								}
								setSelectedIngredients((prev) => [...prev, ing]);
							}}
						>
							{ing}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default IngredientsBar;
