import React from "react";

interface Props {
	required: boolean;
	value: string;
}

const InputLabel = ({ required, value }: Props) => {
	return (
		<span className="text-sm">
			{value}
			{required && <span className="text-red-500 text-sm">*</span>}
		</span>
	);
};

export default InputLabel;
