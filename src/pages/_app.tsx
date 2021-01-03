import {AppProps} from "next/app";
import {ThemeProvider} from "next-themes";
import {ReactElement} from "react";
import "../styles/global.css";

export default function _app({Component, pageProps}: AppProps): ReactElement {
	// rome-ignore lint/jsx/noPropSpreading
	return <ThemeProvider attribute="class">
		<Component {...pageProps} />
	</ThemeProvider>;
}
