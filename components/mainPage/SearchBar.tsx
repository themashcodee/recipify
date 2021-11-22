import React, {
	Dispatch,
	forwardRef,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import SearchIcon from "components/icons/Search";

interface Props {
	query: string;
	setQuery: Dispatch<SetStateAction<string>>;
}

const SearchBar = forwardRef<HTMLInputElement, Props>(
	({ query, setQuery }, ref) => {
		return (
			<div className="w-full h-14 rounded-lg bg-white-900 mb-6 flex dark:bg-black-800 items-center px-4">
				<span className="w-6 h-6">
					<SearchIcon />
				</span>

				<input
					type="text"
					ref={ref}
					placeholder={`Press "ctrl + /" to focus`}
					value={query}
					onChange={(e) => setQuery(e.currentTarget.value)}
					className="bg-transparent w-full h-full mx-4 outline-none text-lg"
				/>
			</div>
		);
	}
);

SearchBar.displayName = "SearchBar";

export default SearchBar;
