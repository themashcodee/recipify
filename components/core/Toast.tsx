import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toast as ToastAnim } from "animations";
import { useSelector, useDispatch } from "react-redux";
import { selectToast, popUpToast } from "store/toast";

const Toast = () => {
	const toast = useSelector(selectToast);
	const dispatch = useDispatch();

	useEffect(() => {
		function dissapear() {
			dispatch(popUpToast({ text: "", timeout: 0 }));
		}
		if (toast.text && toast.timeout) {
			const id = setTimeout(dissapear, toast.timeout);
			return () => clearTimeout(id);
		}
	}, [toast, dispatch]);

	useEffect(() => {
		dispatch(popUpToast({ text: "", timeout: 0 }));
	}, [dispatch]);

	return (
		<AnimatePresence exitBeforeEnter>
			{toast.text && (
				<motion.div
					initial="initial"
					animate="animate"
					exit="exit"
					variants={ToastAnim}
					transition={{ duration: 0.2 }}
					className={`
					fixed top-20 left-1/2 transform bg-red-500 text-white text-center py-1 px-2 z-50 shadow-2xl rounded max-w-md ${toast.bg} ${toast.color}
					`}
				>
					{toast.text}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Toast;
