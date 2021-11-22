import React, { SetStateAction, Dispatch } from "react";

interface Props {
	value: string;
	onChange: Dispatch<SetStateAction<string>>;
	type: "password" | "text" | "number" | "email";
	required?: boolean;
	id?: string;
	name?: string;
	className?: string;
	minLength?: number;
	maxLength?: number;
}

const Input = ({
	value,
	onChange,
	name,
	id,
	type = "text",
	required = true,
	className,
	minLength,
	maxLength,
}: Props) => {
	return (
		<input
			value={value}
			onChange={(e) => onChange(e.currentTarget.value)}
			name={name}
			id={id}
			type={type}
			required={required}
			className={`bg-white-800 dark:bg-black-700 h-12 rounded px-4 ${className}`}
			minLength={minLength}
			maxLength={maxLength}
		/>
	);
};

export default Input;
