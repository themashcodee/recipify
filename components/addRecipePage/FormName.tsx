import React, { Dispatch, SetStateAction } from "react";

interface Props {
	name: string;
	setName: Dispatch<SetStateAction<string>>;
}

const FormName = ({ name, setName }: Props) => {
	return (
		<label className="flex flex-col gap-3">
			<h2 className="text-2xl font-medium">
				Name <span className="text-red-500">*</span>
			</h2>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.currentTarget.value)}
				maxLength={50}
				minLength={3}
				required
				className="h-12 rounded bg-white-800 dark:bg-black-700 px-4"
			/>
		</label>
	);
};

export default FormName;
