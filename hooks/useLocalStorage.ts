import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
	const [value, setValue] = useState<T>(() => {
		if (typeof window !== "undefined") {
			const item = localStorage.getItem(key);
			if (item) return JSON.parse(item);
		}
		return initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue] as const;
}

export default useLocalStorage;
