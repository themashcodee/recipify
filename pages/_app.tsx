import "../styles/globals.css";
import { useCustomLayoutEffect } from "hooks";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store";
import { initTheme } from "helpers";

function MyApp({ Component, pageProps }: AppProps) {
	useCustomLayoutEffect(() => {
		initTheme();
	}, []);

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
