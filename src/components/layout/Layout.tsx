import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {useTheme} from "next-themes";
import {ReactElement, useEffect, useState} from "react";

import {LayoutProps} from "./Layout.interfaces";

export function Layout({children, home}: LayoutProps): ReactElement {
	const [isMounted, setIsMounted] = useState(false);
	const {theme, setTheme} = useTheme();
	useEffect(
		() => {
			setIsMounted(true);
		},
		[],
	);

	function switchTheme() {
		if (isMounted) {
			setTheme(theme === "light" ? "dark" : "light");
		}
	}

	// rome-ignore lint/jsx-a11y/useValidAnchor
	return <div className="mx-auto w-2/5">
		<Head>
			<link rel="icon" href="/favicon.ico" />
			<meta name="description"
			content="Learn how to build a personal website using Next.js" />
			<meta property="og:image" content="/images/profile.jpg" />
			<meta name="og:title" content={process.env.siteTitle} />
			<meta name="twitter:card" content="summary_large_image" />
		</Head>
		<header className="flex items-center py-4">
			<Link href="/">
				<a className={clsx(
					"flex-grow text-black hover:no-underline",
					"dark:text-white",
				)}>
					<h1 className="text-3xl">
						Thomathoughts
					</h1>
				</a>
			</Link>
			<button className="h-5"
			onClick={switchTheme}
			onKeyDown={() => {}}
			type="button">
				<Image alt="The theme change button"
				src={`/images/themeSwitch/${theme === "light" ? "sun" : "moon"}.png`}
				width={15}
				height={15} />
			</button>
		</header>
		<main className="mt-5">
			{children}
		</main>
		{home === true &&
		<div>
			<Link href="/">
				<a>
					Back to top
				</a>
			</Link>
		</div>}
	</div>;
}