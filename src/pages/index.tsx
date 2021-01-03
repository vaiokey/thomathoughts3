import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
import {ReactElement} from "react";

import {Post} from "../types/post.d";
import {formatDate} from "../lib/date/formatDate";
import {getSortedPostsData} from "../lib/query";

import {Layout} from "../components/layout";

export interface PagesProps {
	allPostsData: Array<Post>;
}

export default function pages({allPostsData}: PagesProps): ReactElement {
	// rome-ignore lint/jsx-a11y/useValidAnchor
	return <Layout>
		<Head>
			<title>
				thomathoughts
			</title>
		</Head>
		<section>
			<ul className="pl-0">
				{allPostsData.map(({id, date, title}) =>
					<li className={clsx("list-none mt-10", "first:mt-0")} key={id}>
						<Link href={`/posts/${id}`}>
							<a className={clsx("text-black", "dark:text-white")}>
								<h2>
									{title}
								</h2>
								<time dateTime={date}>
									{formatDate(date)}
								</time>
							</a>
						</Link>
					</li>
				)}
			</ul>
		</section>
	</Layout>;
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
