export function initTheme() {
	if (typeof window !== "undefined") {
		if (localStorage.theme) {
			localStorage.theme === "dark" &&
				document.documentElement.classList.add("dark");
			return;
		}
		localStorage.setItem("theme", "dark");
		document.documentElement.classList.add("dark");
	}
}

export function toggleTheme() {
	const currentTheme = localStorage.theme;
	currentTheme === "dark"
		? (localStorage.setItem("theme", "light"),
		  document.documentElement.classList.remove("dark"))
		: (localStorage.setItem("theme", "dark"),
		  document.documentElement.classList.add("dark"));
}

export function getTheme() {
	if (typeof window !== "undefined") return localStorage.theme;
}
