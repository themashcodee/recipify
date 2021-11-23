import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";

interface Props {
	setSteps: Dispatch<SetStateAction<string[]>>;
}

const FormSteps = ({ setSteps }: Props) => {
	const [step, setStep] = useState<string>("");

	function addIngredient(e: FormEvent) {
		e.preventDefault();
		setSteps((prev) => [...prev, step]);
		setStep("");
	}

	return (
		<form onSubmit={(e) => addIngredient(e)} className="flex flex-col gap-2">
			<input
				type="text"
				value={step}
				onChange={(e) => setStep(e.currentTarget.value)}
				maxLength={255}
				minLength={3}
				required
				placeholder="Step"
				className="h-12 rounded bg-white-800 dark:bg-black-700 px-4"
			/>
			<button
				type="submit"
				className="h-12 rounded bg-green-500 text-white-900 px-4"
			>
				Add Step
			</button>
		</form>
	);
};

export default FormSteps;
