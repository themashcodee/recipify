import React from "react";

interface Props {
	content: string;
	className?: string;
	bg?: string;
}

const Badge = ({ content, className, bg = "bg-yellow-400" }: Props) => {
	return (
		<span
			className={`${bg} ${className} select-none px-4 py-1 rounded-full text-white font-semibold text-sm`}
		>
			{content}
		</span>
	);
};

export default Badge;
