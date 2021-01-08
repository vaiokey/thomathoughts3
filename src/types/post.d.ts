import {DateFormat} from "./date.d";

export interface Post {
	date: DateFormat;
	id: string;
	tags: Array<string>;
	title: string;
}

export interface PostData extends Post {
	contentHtml: string;
}
