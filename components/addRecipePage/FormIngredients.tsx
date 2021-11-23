import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Ingredient } from "types";
import { useSelector } from "react-redux";
import { selectIngredients } from "store/ingredients";

interface Props {
	setIngredients: Dispatch<SetStateAction<Ingredient[]>>;
}

const FormIngredients = ({ setIngredients }: Props) => {
	const ingredientsList = useSelector(selectIngredients);
	const [quantity, setQuantity] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [type, setType] = useState<string>(ingredientsList[0]);

	function addIngredient(e: FormEvent) {
		console.log(type);
		e.preventDefault();
		setIngredients((prev) => [
			...prev,
			{ name, quantity, type: type.toLowerCase() },
		]);
		setName("");
		setQuantity("");
		setType("");
	}

	return (
		<form onSubmit={(e) => addIngredient(e)} className="flex flex-col gap-2">
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.currentTarget.value)}
				maxLength={50}
				minLength={3}
				required
				placeholder="Ingredient name"
				className="h-12 rounded bg-white-800 dark:bg-black-700 px-4"
			/>
			<input
				type="text"
				value={quantity}
				onChange={(e) => setQuantity(e.currentTarget.value)}
				maxLength={50}
				minLength={1}
				required
				placeholder="Ingredient quantity"
				className="h-12 rounded bg-white-800 dark:bg-black-700 px-4"
			/>
			<span className="flex relative before:absolute before:content-['↓'] before:z-20 before:right-4 before:top-3">
				<select
					required
					value={type}
					onChange={(e) => setType(e.currentTarget.value)}
					className="h-12 w-full rounded bg-white-800 dark:bg-black-700 px-4 appearance-none relative"
				>
					{ingredientsList.map((ingr) => {
						return (
							<option key={ingr} value={ingr}>
								{ingr}
							</option>
						);
					})}
				</select>
			</span>
			<button
				type="submit"
				className="h-12 rounded bg-green-500 text-white-900 px-4"
			>
				Add Ingredient
			</button>
		</form>
	);
};

export default FormIngredients;
