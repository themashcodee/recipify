import React, { useState } from "react";
import Sun from "components/icons/Sun";
import Moon from "components/icons/Moon";
import { getTheme, toggleTheme } from "helpers";
import { useCustomLayoutEffect } from "hooks";

const ThemeButton = () => {
	const [currentTheme, setCurrentTheme] = useState<"dark" | "light">();

	useCustomLayoutEffect(() => {
		setCurrentTheme(getTheme());
	}, []);

	return (
		<button
			onClick={() => {
				currentTheme === "dark"
					? setCurrentTheme("light")
					: setCurrentTheme("dark");
				toggleTheme();
			}}
			className="w-10 h-10 rounded-lg p-2 bg-white-900 dark:bg-black-800"
		>
			{currentTheme === "dark" ? <Moon /> : <Sun />}
		</button>
	);
};

export default ThemeButton;
