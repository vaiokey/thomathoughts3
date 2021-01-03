import {glob} from "../deps/glob";

export interface GetAllPostIdsReturn {
	params: {
		id: string;
	};
}

export function getAllPostIds(): Array<GetAllPostIdsReturn> {
	const fileNames = glob("posts/**/*.md").flatMap((file: string) => {
		const slashLastIndex = file.lastIndexOf("/");
		return file.slice(slashLastIndex + 1);
	});
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ""),
			},
		};
	});
}
