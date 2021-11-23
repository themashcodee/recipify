import React, { useState } from "react";
import { Ingredient } from "types";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { popUpToast } from "store/toast";
import { addRecipe } from "store/recipes";
import { addIngredients } from "store/ingredients";

import FormImage from "components/addRecipePage/FormImage";
import FormName from "components/addRecipePage/FormName";
import FormIngredients from "components/addRecipePage/FormIngredients";
import FormSteps from "components/addRecipePage/FormSteps";

const Form = () => {
	const dispatch = useDispatch();
	const [image, setImage] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const [steps, setSteps] = useState<string[]>([]);

	function submitRecipe() {
		if (!name)
			return dispatch(
				popUpToast({
					text: "Recipe must have a name",
					timeout: 2000,
					bg: "bg-red-500",
					color: "#fff",
				})
			);
		if (!image)
			return dispatch(
				popUpToast({
					text: "Recipe must have an image",
					timeout: 2000,
					bg: "bg-red-500",
					color: "#fff",
				})
			);

		if (!ingredients.length)
			return dispatch(
				popUpToast({
					text: "Recipe must have atleast 1 ingredient",
					timeout: 2000,
					bg: "bg-red-500",
					color: "#fff",
				})
			);

		if (steps.length < 3)
			return dispatch(
				popUpToast({
					text: "Recipe must have atleast 3 steps",
					timeout: 2000,
					bg: "bg-red-500",
					color: "#fff",
				})
			);

		dispatch(addRecipe({ name, image, ingredients, steps }));
		dispatch(addIngredients(ingredients.map((ingr) => ingr.type)));
		dispatch(
			popUpToast({
				text: "Recipe successfully added",
				timeout: 2000,
				bg: "bg-green-500",
				color: "#fff",
			})
		);
		setName("");
		setImage("");
		setIngredients([]);
		setSteps([]);
	}

	return (
		<div className="w-full rounded-lg bg-white-900 dark:bg-black-800 max-w-[500px] mx-auto my-16 p-6 gap-4 flex flex-col">
			<FormImage image={image} setImage={setImage} />
			<FormName name={name} setName={setName} />

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-medium">
					Ingredients <span className="text-red-500">*</span>
				</h2>
				{ingredients.length ? (
					<ul className="flex flex-wrap gap-4">
						{ingredients.map((ingr, i) => {
							return (
								<motion.li
									whileHover={{ scale: 0.9 }}
									onClick={() =>
										setIngredients((prev) =>
											prev.filter((ing) => ing.name !== ingr.name)
										)
									}
									key={i}
									className="flex overflow-hidden text-black-800 rounded select-none hover:bg-red-500 hover"
								>
									<span className="bg-yellow-200 py-1 px-3 font-semibold text-lg flex items-center">
										{ingr.name}
									</span>
									<span className="bg-yellow-400 py-1 px-3 flex items-center">
										{ingr.quantity}
									</span>
								</motion.li>
							);
						})}
					</ul>
				) : null}
			</section>
			<FormIngredients setIngredients={setIngredients} />

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-medium">
					Steps <span className="text-red-500">*</span>
				</h2>
				{steps.length ? (
					<ul className="flex flex-col gap-2 px-8">
						{steps.map((step, i) => {
							return (
								<li
									onClick={() =>
										setSteps((prev) => prev.filter((s) => s !== step))
									}
									className="hover:text-red-500 list-disc text-lg cursor-pointer rounded"
									key={i}
								>
									{step}
								</li>
							);
						})}
					</ul>
				) : null}
			</section>
			<FormSteps setSteps={setSteps} />

			<button
				onClick={() => submitRecipe()}
				className="bg-blue-500 text-white h-12 rounded-lg text-lg font-semibold"
			>
				Submit Recipe
			</button>
		</div>
	);
};

export default Form;
