import clsx from "clsx";
import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from "next/document";

export default class _document extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render() {
		return <Html>
			<Head />
			<body className={clsx(
				"bg-white text-black dark:bg-dark-not-black dark:text-white",
			)}>
				<Main />
				<NextScript />
			</body>
		</Html>;
	}
}
