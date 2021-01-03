import Head from "next/head";
import {ReactElement} from "react";

export default function ErrorPage(): ReactElement {
	if (typeof window === "undefined") {
		return <>
		</>;
	}

	return <>
		<Head>
			<title>
				PAGE NOT FOUND - thomathoughts
			</title>
		</Head>
		<div>
			<h2>
				OOPS! Page is not found ;(
			</h2>
			<p>
				If you think this page should be existed, please open an issue
				{" "}
				<a href="https://github.com/tkeiyama/thomathoughts/issues"
				target="_blank"
				rel="noreferrer noopener">
					here
				</a>
				{" "}
				to let me know.
			</p>
			<p>
				Thanks :&apos;)
			</p>
			<small>
				{window.location.href}
			</small>
		</div>
	</>;
}
