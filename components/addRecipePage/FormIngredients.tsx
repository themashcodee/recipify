import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Ingredient } from "types";

interface Props {
	setIngredients: Dispatch<SetStateAction<Ingredient[]>>;
}

const FormIngredients = ({ setIngredients }: Props) => {
	const [quantity, setQuantity] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [type, setType] = useState<string>("");

	function addIngredient(e: FormEvent) {
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
				minLength={3}
				required
				placeholder="Ingredient quantity"
				className="h-12 rounded bg-white-800 dark:bg-black-700 px-4"
			/>
			<input
				type="text"
				value={type}
				onChange={(e) => setType(e.currentTarget.value)}
				maxLength={50}
				minLength={3}
				required
				placeholder="Ingredient type"
				className="h-12 rounded bg-white-800 dark:bg-black-700 px-4"
			/>
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
