import React from "react";

const Sun = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="w-full h-full"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="4"></circle>
			<path d="M12 2v2"></path>
			<path d="M12 20v2"></path>
			<path d="M5 5l1.5 1.5"></path>
			<path d="M17.5 17.5L19 19"></path>
			<path d="M2 12h2"></path>
			<path d="M20 12h2"></path>
			<path d="M5 19l1.5-1.5"></path>
			<path d="M17.5 6.5L19 5"></path>
		</svg>
	);
};

export default Sun;
