import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { useCustomLayoutEffect } from "hooks";
import { store } from "store";
import { initTheme } from "helpers";
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
