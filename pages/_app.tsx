import React, { ReactElement } from "react";
import "../styles/globals.css";
import { useCustomLayoutEffect } from "hooks";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store";
import { initTheme } from "helpers";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Toast from "components/core/Toast";

function SafeHydrate({ children }: { children: ReactElement }) {
	return (
		<div suppressHydrationWarning>
			{typeof window === "undefined" ? null : children}
		</div>
	);
}

function MyApp({ Component, pageProps, router }: AppProps) {
	useCustomLayoutEffect(() => {
		initTheme();
	}, []);

	return (
		<Provider store={store}>
			<AnimateSharedLayout>
				<AnimatePresence exitBeforeEnter>
					<SafeHydrate>
						<>
							<Component {...pageProps} />
							<Toast />
						</>
					</SafeHydrate>
				</AnimatePresence>
			</AnimateSharedLayout>
		</Provider>
	);
}

export default MyApp;
