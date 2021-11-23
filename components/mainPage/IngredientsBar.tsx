import React, { Dispatch, SetStateAction } from "react";

import { useSelector } from "react-redux";
import { selectIngredients } from "store/ingredients";
import { motion } from "framer-motion";

import Cancel from "components/icons/Cancel";

interface Props {
	selectedIngredients: string[];
	setSelectedIngredients: Dispatch<SetStateAction<string[]>>;
}

const IngredientsBar = ({
	selectedIngredients,
	setSelectedIngredients,
}: Props) => {
	const Ingredients = useSelector(selectIngredients);

	function clearSI() {
		setSelectedIngredients([]);
	}

	return (
		<div className="w-full h-14 rounded-lg mb-10 flex  items-center">
			<span className="font-semibold text-lg pr-2">Ingredients</span>
			<ul className="flex px-4 gap-2 overflow-auto hide-scrollbar">
				<motion.button
					whileTap={{ scale: 0.9 }}
					onClick={clearSI}
					className="w-10 h-10 rounded-lg p-2 text-white bg-red-500 flex-shrink-0"
				>
					<Cancel />
				</motion.button>
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
