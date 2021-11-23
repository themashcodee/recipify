import { Variants } from "framer-motion";

export const Toast: Variants = {
	initial: {
		opacity: 0,
		y: "-100%",
		x: "-50%",
	},
	animate: {
		opacity: 1,
		y: 0,
	},
	exit: {
		y: "-100%",
		opacity: 0,
	},
};
