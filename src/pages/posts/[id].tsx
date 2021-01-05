import Head from "next/head";
import Link from "next/link";
import {ReactElement, useEffect} from "react";
import ReactMarkdown from "react-markdown";

import {PostData} from "../../types/post.d";
import {GetAllPostIdsReturn, getAllPostIds, getPostData} from "../../lib/query";
import {formatDate} from "../../lib/date";
import {Layout} from "../../components/layout";

export interface PostProps {
	postData: PostData;
}

export default function Post({postData}: PostProps): ReactElement {
	useEffect(
		() => {
			if (typeof document !== "undefined") {
				const elements = document.querySelectorAll("#__next * a");
				const elementsLength = elements.length - 1;
				for (let i = 1; i < elementsLength; i = i + 1 | 0) {
					if (elements[i].getAttribute("href")?.startsWith?.("#")) {
						continue;
					} else {
						elements[i].setAttribute("target", "_blank");
					}
				}
			}
		},
		[],
	);

	// rome-ignore lint/jsx-a11y/useValidAnchor
	return <Layout home={true}>
		<Head>
			<title>
				{postData.title}
				- thomathoughts
			</title>
		</Head>
		<article id={postData.id}>
			<h2>
				{postData.title}
			</h2>
			<time dateTime={postData.date}>
				{formatDate(postData.date)}
			</time>
			<div className="my-12">
				<ReactMarkdown allowDangerousHtml={true}>
					{postData.contentHtml}
				</ReactMarkdown>
			</div>
		</article>
		<div className="flex flex-col">
			<Link href={`https://github.com/tkeiyama/thomathoughts/blob/main/posts/${postData.id}/${postData.id}.md`}>
				<a>
					Edit this post on GitHub.
				</a>
			</Link>
			<Link href="/">
				<a>
					Back to top
				</a>
			</Link>
		</div>
	</Layout>;
}

export interface GetStaticPathsReturn {
	paths: GetAllPostIdsReturn;
	fallback: boolean;
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}
export interface GetStaticProps {
	params: PostData;
}

export interface GetStaticPropsReturn {
	props: {
		postData: PostData;
	};
}

export async function getStaticProps(
	{params}: GetStaticProps,
): Promise<GetStaticPropsReturn> {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
